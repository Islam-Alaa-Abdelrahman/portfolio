"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { profile } from "@/lib/profile";
import Arrow from "./Arrow";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <a
          href="#hero"
          className="wordmark"
          aria-label="Islam Abdelrahman home"
        >
          ia<span>.</span>
          <small>
            ISLAM
            <br />
            ABDELRAHMAN
          </small>
        </a>
        <nav
          id="primary-navigation"
          className={open ? "main-nav is-open" : "main-nav"}
          aria-label="Main navigation"
          onKeyDown={(e) => {
            if (e.key === "Escape") setOpen(false);
          }}
        >
          {[
            ["projects", "Work"],
            ["about", "About"],
            ["skills", "Expertise"],
            ["contact", "Contact"],
          ].map(([id, label]) => (
            <a key={id} href={"#" + id} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <button
            className="theme-toggle"
            disabled={!mounted}
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            aria-label={
              mounted && resolvedTheme === "dark"
                ? "Switch to light theme"
                : "Switch to dark theme"
            }
          >
            <span aria-hidden="true">◐</span>
          </button>
          <a
            className="resume-link"
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            Résumé <Arrow diagonal />
          </a>
          <button
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="primary-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? "Close" : "Menu"}{" "}
            <span aria-hidden="true">{open ? "−" : "+"}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
