import { config } from "@/lib/config";
import NavDimerro from "@/components/nav-dimerro";
import FooterDimerro from "@/components/footer-dimerro";
import PageBanner from "@/components/page-banner";

export const metadata = {
  title: `Neighbourhoods | ${config.agent.name} Real Estate`,
  description:
    "Explore Vancouver's most sought-after neighbourhoods with Justin Li. From Coal Harbour to Kitsilano, deep local expertise across Greater Vancouver.",
};

const HOOD_IMAGES = [
  "https://images.unsplash.com/photo-1609902725622-4d1ea23dfb6e?w=800&q=80",
  "https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=800&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
  "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
];

export default function NeighbourhoodsPage() {
  const { neighborhoods } = config;

  return (
    <>
      <NavDimerro />

      <main>
        <PageBanner
          eyebrow="MARKET COVERAGE"
          heading="The Neighbourhoods."
          backgroundImage="/vancouver-skyline.jpg"
        />

        {/* Intro */}
        <section className="d-np-intro">
          <div className="d-np-intro-inner">
            <p className="d-np-intro-label">LOCAL EXPERTISE</p>
            <p className="d-np-intro-body">
              Justin Li has spent years building deep, ground-level knowledge
              across Greater Vancouver&apos;s most coveted residential
              neighbourhoods. From waterfront towers in Coal Harbour to the
              character streets of Mount Pleasant, that familiarity translates
              into real advantages for buyers and sellers alike.
            </p>
          </div>
        </section>

        {/* Neighbourhood grid */}
        <section className="d-np-grid-section">
          <div className="d-np-grid-inner">
            {neighborhoods.items.map((hood, i) => (
              <div key={i} className="d-hood-card">
                <div className="d-hood-card-img-wrap">
                  <img
                    src={HOOD_IMAGES[i] || HOOD_IMAGES[0]}
                    alt={hood.name}
                    referrerPolicy="no-referrer"
                  />
                  <div className="d-hood-card-img-overlay" />
                  <p className="d-hood-card-name">{hood.name}</p>
                </div>
                <div className="d-hood-card-body">
                  <p className="d-hood-card-desc">{hood.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quote + CTA */}
        <section className="d-np-quote">
          <div className="d-np-quote-inner">
            <p className="d-np-quote-text">
              &ldquo;{neighborhoods.quote.text}&rdquo;
            </p>
            <p className="d-np-quote-attr">{neighborhoods.quote.attribution}</p>
            <a href="/contact" className="d-np-quote-btn">
              EXPLORE WITH JUSTIN
            </a>
          </div>
        </section>
      </main>

      <FooterDimerro />
    </>
  );
}
