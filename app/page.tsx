import { Nav } from "@/components/Nav";
import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/Reveal";
import { DegreeProgress } from "@/components/Progress";
import { ContributionGraph } from "@/components/ContributionGraph";
import {
  profile,
  education,
  roles,
  featured,
  projects,
  toolkit,
  workingSet,
  stats,
  type Project,
} from "@/lib/content";

function SectionHead({
  index,
  kicker,
  title,
}: {
  index: string;
  kicker: string;
  title: string;
}) {
  return (
    <div className="section-head">
      <div className="section-index mono">
        {index} — {kicker}
      </div>
      <Reveal as="h2" className="display section-title">
        {title}
      </Reveal>
    </div>
  );
}

function ProjectCard({ p, delay }: { p: Project; delay: number }) {
  return (
    <Reveal
      as="article"
      delay={delay}
      className="card"
      style={{ "--accent": `var(--${p.accent})` } as React.CSSProperties}
    >
      <div className="card-top mono">
        <span className="card-kind">{p.kind}</span>
        <span>
          {p.n} · {p.year}
        </span>
      </div>

      <h3 className="display card-title">{p.name}</h3>
      <p className="card-tagline">{p.tagline}</p>
      <p className="card-desc">{p.description}</p>

      <ul className="card-evidence">
        {p.evidence.map((e) => (
          <li key={e}>{e}</li>
        ))}
      </ul>

      <div className="tags">
        {p.stack.map((s) => (
          <span className="tag" key={s}>
            {s}
          </span>
        ))}
      </div>

      <div className="card-foot mono">
        <a
          className="card-link"
          href={p.repo}
          target="_blank"
          rel="noreferrer noopener"
        >
          Repository <span aria-hidden="true">↗</span>
        </a>
        {p.extra?.map((x) => (
          <a
            key={x.href}
            className="card-link"
            href={x.href}
            target="_blank"
            rel="noreferrer noopener"
          >
            {x.label} <span aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
    </Reveal>
  );
}

export default function Home() {
  return (
    <>
      <Nav />

      <main id="top">
        {/* ---------------- HERO ---------------- */}
        <header className="shell hero">
          <Reveal className="hero-meta mono">
            <span className="pill">
              <span className="dot" />
              {profile.status}
            </span>
            <span>{profile.location}</span>
            <span>{profile.school}</span>
          </Reveal>

          <Reveal as="h1" className="display hero-title" delay={80}>
            {profile.tagline}
          </Reveal>

          <div className="hero-grid">
            <Reveal delay={160}>
              <p className="hero-intro">{profile.intro}</p>
              <div className="hero-actions">
                <a className="btn btn-solid" href="#work">
                  See the work <span aria-hidden="true">→</span>
                </a>
                <a
                  className="btn btn-ghost"
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  GitHub <span aria-hidden="true">↗</span>
                </a>
                <a
                  className="btn btn-ghost"
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  LinkedIn <span aria-hidden="true">↗</span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="idcard">
                <div className="idcard-top mono">
                  <span>Candidate file</span>
                  <span>01 / 05</span>
                </div>
                <dl className="idcard-body">
                  <div className="idrow">
                    <dt className="mono">University</dt>
                    <dd>{education.school}</dd>
                  </div>
                  <div className="idrow">
                    <dt className="mono">Study</dt>
                    <dd>Computer Science · Data Science minor</dd>
                  </div>
                  <div className="idrow">
                    <dt className="mono">Timeline</dt>
                    <dd>{education.period}</dd>
                  </div>
                  <div className="idrow">
                    <dt className="mono">GPA</dt>
                    <dd>
                      {education.gpa} · {education.honors}
                    </dd>
                  </div>
                  <div className="idrow">
                    <dt className="mono">Direction</dt>
                    <dd>Platform · Backend · AI/ML</dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          </div>
        </header>

        <Marquee />

        {/* ---------------- EDUCATION ---------------- */}
        <section className="shell section" id="education" style={{ borderTop: 0 }}>
          <SectionHead
            index="01"
            kicker="Where I am"
            title="Studying and building, in Tempe."
          />

          <div className="where-grid">
            <Reveal className="panel">
              <div className="panel-kicker mono">
                <span>Education · {education.period}</span>
                <span>Year 3 / 4</span>
              </div>
              <h3 className="display panel-title">{education.school}</h3>
              <p className="mono muted">{education.college}</p>
              <p style={{ color: "var(--ink-2)", maxWidth: "52ch" }}>
                {education.degree}, with a minor in data science from the College
                of Liberal Arts and Sciences. Algorithms, systems and machine
                learning, pointed at distributed infrastructure.
              </p>

              <div className="metrics">
                <div className="metric">
                  <div className="metric-value">{education.gpa}</div>
                  <div className="metric-label mono">Cumulative GPA</div>
                </div>
                <div className="metric">
                  <div className="metric-value">Dec &rsquo;27</div>
                  <div className="metric-label mono">Expected graduation</div>
                </div>
              </div>

              <div className="tags">
                {education.coursework.map((c) => (
                  <span className="tag" key={c}>
                    {c}
                  </span>
                ))}
                <span className="tag">{education.honors}</span>
              </div>

              <DegreeProgress />
            </Reveal>

            <Reveal delay={120} className="panel">
              <div className="panel-kicker mono">
                <span>Method</span>
                <span>How I work</span>
              </div>
              <p
                className="display"
                style={{ fontSize: "clamp(1.5rem, 2.6vw, 2rem)", lineHeight: 1.15 }}
              >
                {profile.method}
              </p>
              <div className="working-set" style={{ marginTop: "2rem" }}>
                {workingSet.map((w) => (
                  <div className="working-item" key={w.project}>
                    <strong>{w.project}</strong>
                    <p>{w.note}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------------- EXPERIENCE ---------------- */}
        <section className="shell section" id="experience">
          <SectionHead
            index="02"
            kicker="Experience"
            title="Three roles, all of them shipping infrastructure."
          />

          <div className="xp-list">
            {roles.map((r, i) => (
              <Reveal as="article" className="xp" key={r.company + r.position} delay={i * 80}>
                <div className="xp-when mono">
                  <span>
                    {r.start} — {r.end}
                  </span>
                  <span className="muted">{r.duration}</span>
                  <span className="muted">{r.type}</span>
                  {r.current && <span className="badge-now">Active</span>}
                </div>

                <div>
                  <h3 className="display xp-role">{r.position}</h3>
                  <span className="xp-company">
                    {r.company} <span className="muted">· {r.location}</span>
                  </span>
                  <p className="xp-summary">{r.summary}</p>
                  <ul className="xp-points">
                    {r.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <div className="tags">
                    {r.stack.map((s) => (
                      <span className="tag" key={s}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------------- FEATURED ---------------- */}
        <section className="shell section" id="work">
          <SectionHead
            index="03"
            kicker="Flagship"
            title="The system I'd want to be read first."
          />

          <Reveal className="feature">
            <div className="feature-top mono">
              <span className="feature-name">
                {featured.n} · {featured.name}
              </span>
              <span>
                {featured.kind} · {featured.year}
              </span>
            </div>

            <h3 className="display feature-title">{featured.tagline}</h3>

            <div className="feature-body">
              <div>
                <p className="feature-desc">{featured.description}</p>
                <div className="tags">
                  {featured.stack.map((s) => (
                    <span className="tag tag-dark" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
                <div className="feature-links">
                  <a
                    className="btn btn-light"
                    href={featured.repo}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Repository <span aria-hidden="true">↗</span>
                  </a>
                  {featured.extra?.map((x) => (
                    <a
                      key={x.href}
                      className="btn btn-outline-light"
                      href={x.href}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {x.label} <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <div className="mono" style={{ color: "var(--sage)", marginBottom: "1.1rem" }}>
                  Engineering evidence
                </div>
                <ul className="evidence">
                  {featured.evidence.map((e) => (
                    <li key={e}>{e}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ---------------- SELECTED WORK ---------------- */}
        <section className="shell section">
          <SectionHead
            index="04"
            kicker="Selected work"
            title="Four more, each built to prove something specific."
          />

          <div className="cards">
            {projects.map((p, i) => (
              <ProjectCard key={p.name} p={p} delay={i * 70} />
            ))}
          </div>
        </section>

        {/* ---------------- TOOLKIT ---------------- */}
        <section className="shell section" id="toolkit">
          <SectionHead
            index="05"
            kicker="Toolkit"
            title="What I've actually shipped with."
          />

          <Reveal className="toolkit">
            {toolkit.map((t) => (
              <div className="toolkit-col" key={t.group}>
                <h3>{t.group}</h3>
                <ul className="toolkit-list">
                  {t.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>
        </section>

        {/* ---------------- ACTIVITY ---------------- */}
        <section className="shell section">
          <SectionHead
            index="06"
            kicker="Activity"
            title="Always shipping."
          />

          <div className="activity-grid">
            <Reveal>
              <ContributionGraph />
            </Reveal>

            <Reveal delay={120} className="panel">
              <div className="panel-kicker mono">
                <span>Open source</span>
                <span>Public repositories</span>
              </div>
              <p style={{ color: "var(--ink-2)", margin: 0 }}>
                Every project below is public, documented, and backed by CI. The
                benchmarks are local and labelled as such — none of them are
                presented as production capacity.
              </p>
              <div className="tags" style={{ marginTop: "1.5rem" }}>
                {[featured, ...projects].map((p) => (
                  <a
                    className="tag"
                    key={p.name}
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {p.name} ↗
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal className="stat-strip" delay={80}>
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <div className="stat-value">{s.value}</div>
                <div className="stat-label mono">{s.label}</div>
              </div>
            ))}
          </Reveal>
        </section>

        {/* ---------------- CONTACT ---------------- */}
        <section className="shell section contact" id="contact">
          <Reveal className="mono muted" >
            07 — Contact
          </Reveal>
          <Reveal as="h2" className="display contact-title" delay={80}>
            Open to 2027 internships.
          </Reveal>
          <Reveal delay={140}>
            <p className="contact-note">
              I&rsquo;m interested in teams that care about system boundaries,
              measurable behavior, and software that survives more than the happy
              path — platform and cloud, backend, AI/ML, and general software
              engineering.
            </p>
            <div className="hero-actions">
              <a className="btn btn-solid" href={`mailto:${profile.links.email}`}>
                {profile.links.email}
              </a>
              <a
                className="btn btn-ghost"
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer noopener"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
              <a
                className="btn btn-ghost"
                href={profile.links.github}
                target="_blank"
                rel="noreferrer noopener"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>
          </Reveal>
        </section>

        <footer className="shell footer mono">
          <span>{profile.name}</span>
          <span>Tempe, Arizona</span>
          <span suppressHydrationWarning>© {new Date().getFullYear()}</span>
        </footer>
      </main>
    </>
  );
}
