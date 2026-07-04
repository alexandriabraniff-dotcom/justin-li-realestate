"use client";

import { config } from "@/lib/config";

export default function HeroDimerro() {
  const { agent, hero } = config;

  return (
    <section className="d-hero">
      {/* Background image with overlay */}
      <div
        className="d-hero-bg"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&q=80')",
        }}
      />
      <div className="d-hero-overlay" />

      {/* Content */}
      <div className="d-hero-content">
        <p className="d-hero-eyebrow">VANCOUVER REAL ESTATE</p>
        <h1 className="d-hero-heading">
          {agent.tagline.toUpperCase()}
        </h1>
        <a href={hero.cta.secondary.href} className="d-hero-cta">
          EXPLORE LISTINGS
        </a>
      </div>

      {/* Bottom pagination style */}
      <div className="d-hero-pagination">
        <span className="d-hero-pagination-text">
          &#8592; Prev &nbsp;&nbsp;&mdash;&mdash;&mdash;&nbsp;&nbsp; Next &#8594;
        </span>
      </div>
    </section>
  );
}
