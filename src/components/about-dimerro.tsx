import { config } from "@/lib/config";

export default function AboutDimerro() {
  const { agent } = config;
  const { about } = agent;

  return (
    <section id="about" className="d-about">
      <div className="d-about-inner">
        {/* Left: overlapping images */}
        <div className="d-about-images">
          <div className="d-about-img-main">
            <img
              src={agent.photo}
              alt={`${agent.name} — Vancouver REALTOR`}
            />
          </div>
          <div className="d-about-img-secondary">
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
              alt="Luxury Vancouver property"
            />
          </div>
          {/* Decorative circle */}
          <div className="d-about-circle" />
        </div>

        {/* Right: content */}
        <div className="d-about-content">
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

          {/* 2-column bullet disciplines */}
          <ul className="d-about-disciplines">
            {about.disciplines.map((d, i) => (
              <li key={i} className="d-about-discipline">
                <span className="d-about-discipline-icon">{d.icon}</span>
                <span className="d-about-discipline-label">{d.label}</span>
              </li>
            ))}
          </ul>

          <p className="d-about-signature">
            <em>— {agent.name} / {agent.title}</em>
          </p>

          <a href="#contact" className="d-about-btn">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
