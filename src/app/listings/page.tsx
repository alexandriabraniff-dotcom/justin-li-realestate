import { config } from "@/lib/config";
import type { Listing } from "@/lib/config";
import NavDimerro from "@/components/nav-dimerro";
import FooterDimerro from "@/components/footer-dimerro";
import PageBanner from "@/components/page-banner";

export const metadata = {
  title: `Listings | ${config.agent.name} Real Estate`,
  description: config.listings.pageSubheadline,
};

export default function ListingsPage() {
  const { agent, listings } = config;
  const active = listings.items.filter((l) => l.status === "Active");
  const sold = listings.items.filter((l) => l.status === "Sold");

  return (
    <>
      <NavDimerro />

      <main>
        <PageBanner
          eyebrow="FEATURED PROPERTIES"
          heading="Current Listings."
          backgroundImage={listings.pageHeaderImage}
        >
          <div className="d-lp-filter-inner">
            <input
              type="text"
              className="d-lp-filter-field"
              placeholder="Neighbourhood, address, or MLS®"
            />
            <select className="d-lp-filter-select" defaultValue="">
              <option value="" disabled>Property Type</option>
              <option value="condo">Condo</option>
              <option value="townhouse">Townhouse</option>
              <option value="detached">Detached</option>
              <option value="penthouse">Penthouse</option>
            </select>
            <select className="d-lp-filter-select" defaultValue="">
              <option value="" disabled>Price Range</option>
              <option value="under-1m">Under $1M</option>
              <option value="1m-2m">$1M – $2M</option>
              <option value="2m-3m">$2M – $3M</option>
              <option value="3m-plus">$3M+</option>
            </select>
            <select className="d-lp-filter-select" defaultValue="">
              <option value="" disabled>Status</option>
              <option value="active">Active</option>
              <option value="sold">Sold</option>
            </select>
            <button className="d-lp-filter-btn">SEARCH</button>
          </div>
        </PageBanner>

        {/* Active listings */}
        <section className="d-lp-section">
          <div className="d-lp-section-inner">
            <p className="d-lp-section-label">
              ACTIVE LISTINGS ({active.length})
            </p>
            <div className="d-lp-grid">
              {active.map((listing, i) => (
                <ListingCard key={i} listing={listing} />
              ))}
            </div>
          </div>
        </section>

        {/* Sold listings */}
        <section className="d-lp-section--muted">
          <div className="d-lp-section-inner">
            <p className="d-lp-section-label">SOLD ({sold.length})</p>
            <div className="d-lp-grid">
              {sold.map((listing, i) => (
                <ListingCard key={i} listing={listing} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="d-lp-cta">
          <div className="d-lp-cta-inner">
            <h2 className="d-lp-cta-heading">Ready to make your move?</h2>
            <p className="d-lp-cta-body">
              Whether you are buying, investing, or exploring the market,{" "}
              {agent.name.split(" ")[0]} brings the expertise and market
              intelligence to guide every decision with clarity and confidence.
            </p>
            <a href="/contact" className="d-lp-cta-btn">
              GET IN TOUCH
            </a>
          </div>
        </section>
      </main>

      <FooterDimerro />
    </>
  );
}

function ListingCard({ listing }: { listing: Listing }) {
  return (
    <div className="d-lp-card">
      <div className="d-lp-card-img-wrap">
        <img
          src={listing.image}
          alt={listing.label}
          referrerPolicy="no-referrer"
        />
        <span
          className={`d-lp-card-badge ${
            listing.status === "Active"
              ? "d-lp-card-badge--active"
              : "d-lp-card-badge--sold"
          }`}
        >
          {listing.status.toUpperCase()}
        </span>
      </div>
      <div className="d-lp-card-body">
        <p className="d-lp-card-label">{listing.label}</p>
        <p className="d-lp-card-price">{listing.price}</p>
        <p className="d-lp-card-address">{listing.address}</p>
        <p className="d-lp-card-hood">{listing.neighbourhood}</p>
        <div className="d-lp-card-stats">
          <div className="d-lp-card-stat">
            <span className="d-lp-card-stat-val">{listing.beds}</span>
            <span className="d-lp-card-stat-lbl">Beds</span>
          </div>
          <div className="d-lp-card-stat">
            <span className="d-lp-card-stat-val">{listing.baths}</span>
            <span className="d-lp-card-stat-lbl">Baths</span>
          </div>
          <div className="d-lp-card-stat">
            <span className="d-lp-card-stat-val">{listing.sqft}</span>
            <span className="d-lp-card-stat-lbl">Sq Ft</span>
          </div>
        </div>
      </div>
    </div>
  );
}
