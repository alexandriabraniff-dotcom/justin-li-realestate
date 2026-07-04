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

        {/* Search bar */}
        <div className="d-hero-search">
          <input
            type="text"
            className="d-hero-search-field"
            placeholder="Neighbourhood, address, or MLS®"
          />
          <select className="d-hero-search-select" defaultValue="">
            <option value="" disabled>Property Type</option>
            <option value="condo">Condo</option>
            <option value="townhouse">Townhouse</option>
            <option value="detached">Detached</option>
            <option value="penthouse">Penthouse</option>
          </select>
          <select className="d-hero-search-select" defaultValue="">
            <option value="" disabled>Price Range</option>
            <option value="under-1m">Under $1M</option>
            <option value="1m-2m">$1M – $2M</option>
            <option value="2m-3m">$2M – $3M</option>
            <option value="3m-plus">$3M+</option>
          </select>
          <button className="d-hero-search-btn">SEARCH</button>
        </div>

        <a href={hero.cta.secondary.href} className="d-hero-cta">
          EXPLORE LISTINGS
        </a>
      </div>

    </section>
  );
}
