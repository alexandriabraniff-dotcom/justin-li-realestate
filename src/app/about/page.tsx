import { config } from "@/lib/config";
import NavDimerro from "@/components/nav-dimerro";
import FooterDimerro from "@/components/footer-dimerro";
import PageBanner from "@/components/page-banner";

export const metadata = {
  title: `About Justin Li | Vancouver REALTOR®`,
  description:
    "Learn about Justin C. Li — Vancouver REALTOR® PREC, MLS Medallion Award recipient, and trusted specialist across Greater Vancouver's finest neighbourhoods.",
};

export default function AboutPage() {
  const { agent, services } = config;
  const { about, credentials } = agent;

  return (
    <>
      <NavDimerro />

      <main>
        <PageBanner
          eyebrow="ABOUT JUSTIN LI"
          heading={"Local Expertise.\nExceptional Results."}
          backgroundImage="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
        />

        {/* Bio section */}
        <section className="d-ap-bio">
          <div className="d-ap-bio-inner">
            {/* Photo */}
            <div className="d-ap-bio-img-wrap">
              <img
                src="/justin-li.jpg"
                alt={`${agent.name} — Vancouver REALTOR®`}
              />
            </div>

            {/* Content */}
            <div className="d-ap-bio-content">
              <p className="d-about-label">{about.label}</p>
              <h2
                className="d-about-heading"
                dangerouslySetInnerHTML={{ __html: about.heading }}
              />

              {about.paragraphs.map((para, i) => (
                <p key={i} className="d-about-body">
                  {para}
                </p>
              ))}

              <ul className="d-about-disciplines">
                {about.disciplines.map((d, i) => (
                  <li key={i} className="d-about-discipline">
                    {d.label}
                  </li>
                ))}
              </ul>

              <a href="/contact" className="d-about-btn">
                WORK WITH JUSTIN
              </a>
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section className="d-creds">
          <div className="d-creds-inner">
            {credentials.map((cred, i) => (
              <div key={i} className="d-creds-block">
                <p className="d-creds-value">{cred.value}</p>
                <p className="d-creds-label">{cred.label}</p>
                <p className="d-creds-detail">{cred.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="d-services">
          <div className="d-services-inner">
            <div className="d-services-header">
              <p className="d-services-label">{services.label}</p>
              <h2 className="d-services-heading">
                {services.heading}{" "}
                <em style={{ fontStyle: "italic" }}>{services.headingEmphasis}</em>
              </h2>
            </div>
            <div className="d-services-grid">
              {services.items.map((svc, i) => (
                <div key={i} className="d-service-card">
                  <p className="d-service-card-number">{svc.number}</p>
                  <h3 className="d-service-card-title">{svc.title}</h3>
                  <p className="d-service-card-subtitle">{svc.subtitle}</p>
                  <p className="d-service-card-desc">{svc.description}</p>
                  <div className="d-service-card-tags">
                    {svc.tags.map((tag, j) => (
                      <span key={j} className="d-service-card-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="d-ap-cta">
          <div className="d-ap-cta-inner">
            <h2 className="d-ap-cta-heading">Ready to work together?</h2>
            <p className="d-ap-cta-body">
              Justin brings precision, local knowledge, and genuine client
              advocacy to every transaction. Reach out today to discuss your
              goals.
            </p>
            <a href="/contact" className="d-ap-cta-btn">
              GET IN TOUCH
            </a>
          </div>
        </section>
      </main>

      <FooterDimerro />
    </>
  );
}
