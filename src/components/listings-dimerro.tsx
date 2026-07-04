import { config } from "@/lib/config";

export default function ListingsDimerro() {
  const { listings } = config;
  const featured = listings.items.slice(0, 3);

  return (
    <section id="listings" className="d-listings">
      <div className="d-listings-inner">
        {/* Header row */}
        <div className="d-listings-header">
          <div>
            <p className="d-listings-label">{listings.featuredLabel}</p>
            <h2 className="d-listings-heading">Find Your Ideal Home.</h2>
          </div>
          {/* Carousel dots */}
          <div className="d-listings-dots">
            {[0, 1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className={`d-listings-dot${i === 0 ? " d-listings-dot--active" : ""}`}
              />
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="d-listings-cards">
          {featured.map((listing, i) => (
            <div
              key={i}
              className={`d-listing-card${i === 1 ? " d-listing-card--featured" : ""}`}
            >
              <div className="d-listing-card-img-wrap">
                <img src={listing.image} alt={listing.label} />
                <div className="d-listing-card-overlay" />
              </div>
              <div className="d-listing-card-strip">
                <div className="d-listing-card-strip-left">
                  <span className="d-listing-card-label">{listing.label}</span>
                  <span className="d-listing-card-neighbourhood">
                    {listing.neighbourhood}
                  </span>
                </div>
                <a href="/listings" className="d-listing-card-cta">
                  View Property &#8594;
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="d-listings-footer">
          <a href="/listings" className="d-listings-all-link">
            View All Properties &#8594;
          </a>
        </div>
      </div>
    </section>
  );
}
