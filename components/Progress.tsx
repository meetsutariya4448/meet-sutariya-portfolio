"use client";

import { useEffect, useRef, useState } from "react";
import { education } from "@/lib/content";

function currentPercent() {
  return Math.min(
    100,
    Math.max(
      0,
      ((Date.now() - education.progressStart) /
        (education.progressEnd - education.progressStart)) *
        100
    )
  );
}

export function DegreeProgress() {
  const ref = useRef<HTMLDivElement>(null);
  // Held null through SSR and the first client render: the page is statically
  // prerendered, so a clock-derived value here would be baked at build time
  // and disagree with the client once enough time has passed.
  const [pct, setPct] = useState<number | null>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setPct(currentPercent());
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || pct === null) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setWidth(pct);
        io.disconnect();
      }
    });
    io.observe(el);
    return () => io.disconnect();
  }, [pct]);

  return (
    <div className="progress" ref={ref}>
      <div className="progress-scale mono">
        <span>Degree progress</span>
        <span>{pct === null ? " " : `${Math.round(pct)}% complete`}</span>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${width}%` }} />
      </div>
      <div className="progress-scale mono">
        <span>Jan &rsquo;24</span>
        <span>Now</span>
        <span>Dec &rsquo;27</span>
      </div>
    </div>
  );
}
