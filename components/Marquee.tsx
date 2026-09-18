import { domains } from "@/lib/content";

export function Marquee() {
  const track = (
    <div className="marquee-track" aria-hidden="true">
      {domains.map((d, i) => (
        <span className="marquee-item" key={`${d}-${i}`}>
          {d}
        </span>
      ))}
    </div>
  );

  return (
    <div className="marquee">
      {track}
      {track}
    </div>
  );
}
