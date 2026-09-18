"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { profile } from "@/lib/content";

const LINKS = [
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#toolkit", label: "Toolkit" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-mark" onClick={() => setOpen(false)}>
          <span className="mark-badge">{profile.initials}</span>
          <span className="mono">{profile.name}</span>
        </a>

        <div className="nav-links mono">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <ThemeToggle />
          <button
            type="button"
            className="menu-btn"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M3 7h18M3 12h18M3 17h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div className="mobile-menu" id="mobile-menu" hidden={!open}>
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="display"
            onClick={() => setOpen(false)}
          >
            {l.label}
          </a>
        ))}
        <div className="mobile-menu-foot mono">
          <a href={profile.links.github} target="_blank" rel="noreferrer noopener">
            GitHub ↗
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer noopener">
            LinkedIn ↗
          </a>
          <a href={`mailto:${profile.links.email}`}>Email</a>
        </div>
      </div>
    </nav>
  );
}
