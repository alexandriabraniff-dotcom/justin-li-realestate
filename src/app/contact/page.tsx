import { config } from "@/lib/config";
import NavDimerro from "@/components/nav-dimerro";
import FooterDimerro from "@/components/footer-dimerro";
import PageBanner from "@/components/page-banner";

export const metadata = {
  title: `Contact | ${config.agent.name} Real Estate`,
  description: `Get in touch with Justin Li, Vancouver REALTOR® PREC. Call, email, or send a message to start your real estate journey.`,
};

export default function ContactPage() {
  const { agent, neighborhoods } = config;
  const { contact, social } = agent;

  return (
    <>
      <NavDimerro />

      <main>
        <PageBanner
          eyebrow="GET IN TOUCH"
          heading="Let's Talk."
          backgroundImage="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&q=80"
        />

        {/* Main contact section */}
        <section className="d-cp-section">
          <div className="d-cp-inner">
            {/* Left: info */}
            <div className="d-cp-left">
              <div>
                <p className="d-cp-label">CONTACT JUSTIN</p>
                <h2 className="d-cp-heading">
                  Start the
                  <br />
                  conversation.
                </h2>
              </div>

              <div className="d-cp-info-block">
                <p className="d-cp-info-label">Phone</p>
                <a
                  href={`tel:${contact.phone}`}
                  className="d-cp-info-value"
                >
                  {contact.phone}
                </a>
              </div>

              <div className="d-cp-info-block">
                <p className="d-cp-info-label">Email</p>
                <a
                  href={`mailto:${contact.email}`}
                  className="d-cp-info-value"
                >
                  {contact.email}
                </a>
              </div>

              <div className="d-cp-info-block">
                <p className="d-cp-info-label">Location</p>
                <p className="d-cp-info-address">{contact.address}</p>
              </div>

              <div className="d-cp-socials">
                {social.instagram && social.instagram !== "#" && (
                  <a href={social.instagram} className="d-cp-social-link">
                    Instagram
                  </a>
                )}
                {social.facebook && social.facebook !== "#" && (
                  <a href={social.facebook} className="d-cp-social-link">
                    Facebook
                  </a>
                )}
                {social.youtube && social.youtube !== "#" && (
                  <a href={social.youtube} className="d-cp-social-link">
                    YouTube
                  </a>
                )}
                {social.twitter && social.twitter !== "#" && (
                  <a href={social.twitter} className="d-cp-social-link">
                    Twitter
                  </a>
                )}
                <a
                  href={agent.googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-cp-social-link"
                >
                  Google Reviews
                </a>
              </div>

              <p className="d-cp-tagline">{agent.tagline}</p>
            </div>

            {/* Right: form */}
            <form className="d-contact-form d-contact-form--light">
              <div className="d-contact-field">
                <label className="d-contact-field-label">FULL NAME</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="d-contact-input"
                />
              </div>

              <div className="d-contact-field">
                <label className="d-contact-field-label">PHONE</label>
                <input
                  type="tel"
                  placeholder="Your phone number"
                  className="d-contact-input"
                />
              </div>

              <div className="d-contact-field">
                <label className="d-contact-field-label">EMAIL</label>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="d-contact-input"
                />
              </div>

              <div className="d-contact-field">
                <label className="d-contact-field-label">BUDGET</label>
                <select className="d-contact-input d-contact-select">
                  <option value="">Select a budget range</option>
                  <option value="under-1m">Under $1,000,000</option>
                  <option value="1m-2m">$1,000,000 - $2,000,000</option>
                  <option value="2m-3m">$2,000,000 - $3,000,000</option>
                  <option value="3m-5m">$3,000,000 - $5,000,000</option>
                  <option value="5m-plus">$5,000,000+</option>
                </select>
              </div>

              <div className="d-contact-field">
                <label className="d-contact-field-label">MESSAGE</label>
                <textarea
                  placeholder="Tell Justin about your real estate goals..."
                  className="d-contact-textarea"
                  style={{ minHeight: "160px" }}
                />
              </div>

              <button type="submit" className="d-contact-submit">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </section>

        {/* Area coverage */}
        <section className="d-cp-map-section">
          <div className="d-cp-map-inner">
            <p className="d-cp-map-label">SERVICE AREA</p>
            <h2 className="d-cp-map-heading">Serving Greater Vancouver</h2>
            <div className="d-cp-map-hoods">
              {neighborhoods.items.map((hood, i) => (
                <span key={i} className="d-cp-map-hood">
                  {hood.name}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>

      <FooterDimerro />
    </>
  );
}
