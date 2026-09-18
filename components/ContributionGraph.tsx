import { GITHUB_USER } from "@/lib/content";

type Day = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };

const LEVEL_COLOR: Record<number, string> = {
  0: "var(--paper-3)",
  1: "color-mix(in srgb, var(--sage) 28%, var(--paper-3))",
  2: "color-mix(in srgb, var(--sage) 52%, var(--paper-3))",
  3: "color-mix(in srgb, var(--sage) 76%, var(--paper-3))",
  4: "var(--sage)",
};

async function getContributions(): Promise<{ days: Day[]; total: number } | null> {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${GITHUB_USER}?y=last`,
      { next: { revalidate: 21600 } }
    );
    if (!res.ok) return null;
    const data = (await res.json()) as {
      total: Record<string, number>;
      contributions: Day[];
    };
    const total = Object.values(data.total ?? {}).reduce((a, b) => a + b, 0);
    return { days: data.contributions ?? [], total };
  } catch {
    return null;
  }
}

/** Renders the trailing 12 months of public contributions, or a quiet
 *  placeholder grid when GitHub's data is unreachable at build time. */
export async function ContributionGraph() {
  const data = await getContributions();
  const days: Day[] =
    data?.days.slice(-371) ??
    Array.from({ length: 371 }, (_, i) => ({
      date: String(i),
      count: 0,
      level: 0 as const,
    }));

  return (
    <div className="panel">
      <div className="panel-kicker">
        <span className="mono">Contribution graph · 12 months</span>
        <span className="mono">
          {data ? `${data.total.toLocaleString()} contributions` : "GitHub"}
        </span>
      </div>

      <div className="graph-wrap">
        <div className="graph" role="img" aria-label={
          data
            ? `GitHub contribution graph for the last year: ${data.total} contributions`
            : "GitHub contribution graph placeholder"
        }>
          {days.map((d, i) => (
            <span
              key={`${d.date}-${i}`}
              className="cell"
              style={{ background: LEVEL_COLOR[d.level] }}
            />
          ))}
        </div>
      </div>

      <div className="graph-legend mono">
        <span>Less</span>
        {[0, 1, 2, 3, 4].map((l) => (
          <span key={l} className="cell" style={{ background: LEVEL_COLOR[l] }} />
        ))}
        <span>More</span>
      </div>

      <div className="tags" style={{ marginTop: "1.5rem" }}>
        <a
          className="btn btn-ghost"
          href={`https://github.com/${GITHUB_USER}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          @{GITHUB_USER} <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  );
}
