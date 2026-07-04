import { config } from "@/lib/config";

export default function TestimonialsDimerro() {
  const { testimonials } = config;

  return (
    <section id="testimonials" className="d-testimonials">
      <div className="d-testimonials-inner">
        <div className="d-testimonials-header">
          <p className="d-testimonials-label">TESTIMONIALS</p>
          <h2 className="d-testimonials-heading">What Clients Say.</h2>
        </div>

        <div className="d-testimonials-grid">
          {testimonials.items.map((item, i) => (
            <div key={i} className="d-testimonial-card">
              <div className="d-testimonial-stars">
                {Array.from({ length: item.stars }).map((_, j) => (
                  <span key={j} className="d-testimonial-star">
                    &#9733;
                  </span>
                ))}
              </div>
              <p className="d-testimonial-quote">&ldquo;{item.quote}&rdquo;</p>
              <div className="d-testimonial-meta">
                <div className="d-testimonial-avatar">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="d-testimonial-name">{item.name}</p>
                  <p className="d-testimonial-date">{item.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="d-testimonials-footer">
          <a
            href={testimonials.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="d-testimonials-google-link"
          >
            View all Google reviews &#8594;
          </a>
        </div>
      </div>
    </section>
  );
}
