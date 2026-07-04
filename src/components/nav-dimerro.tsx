"use client";

import { useState } from "react";
import { config } from "@/lib/config";

export default function NavDimerro() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { agent, nav } = config;

  return (
    <header className="d-nav">
      <div className="d-nav-inner">
        {/* Logo */}
        <a href="/" className="d-nav-logo">
          <div className="d-nav-logo-name">{agent.name}</div>
          <div className="d-nav-logo-sub">{agent.title}</div>
        </a>

        {/* Center nav links */}
        <nav className="d-nav-links">
          {nav.links.map((link) => (
            <a key={link.href} href={link.href} className="d-nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <a href="/contact" className="d-nav-cta d-nav-cta--desktop">
          Contact
        </a>

        {/* Mobile hamburger */}
        <button
          className="d-nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="d-nav-hamburger-line" />
          <span className="d-nav-hamburger-line" />
          <span className="d-nav-hamburger-line" />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="d-nav-mobile-menu">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="d-nav-mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/contact"
            className="d-nav-cta"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
