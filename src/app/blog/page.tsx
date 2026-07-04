import { config } from "@/lib/config";
import NavDimerro from "@/components/nav-dimerro";
import FooterDimerro from "@/components/footer-dimerro";
import PageBanner from "@/components/page-banner";

export const metadata = {
  title: `Market Insights | ${config.agent.name} Real Estate`,
  description:
    "Vancouver real estate market updates, neighbourhood guides, and expert advice from Justin Li — REALTOR® PREC serving Greater Vancouver.",
};

export default function BlogPage() {
  const { blog } = config;
  const featured = blog.posts.find((p) => p.featured);
  const rest = blog.posts.filter((p) => !p.featured);

  return (
    <>
      <NavDimerro />

      <main>
        <PageBanner
          eyebrow="MARKET INSIGHTS"
          heading="The Journal."
          backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
        />

        {/* Featured post */}
        {featured && (
          <section className="d-blog-featured">
            <div className="d-blog-featured-inner">
              <div className="d-blog-featured-img">
                <img src={featured.image} alt={featured.title} />
              </div>
              <div className="d-blog-featured-content">
                <p className="d-blog-category">{featured.category}</p>
                <h2 className="d-blog-featured-title">{featured.title}</h2>
                <p className="d-blog-featured-excerpt">{featured.excerpt}</p>
                <div className="d-blog-meta">
                  <span>{featured.date}</span>
                  <span className="d-blog-meta-dot" />
                  <span>{featured.readTime}</span>
                </div>
                <a href={`/blog/${featured.slug}`} className="d-blog-featured-btn">
                  READ ARTICLE
                </a>
              </div>
            </div>
          </section>
        )}

        {/* Post grid */}
        <section className="d-blog-grid-section">
          <div className="d-blog-grid-inner">
            <p className="d-blog-grid-label">LATEST ARTICLES</p>
            <div className="d-blog-grid">
              {rest.map((post, i) => (
                <a key={i} href={`/blog/${post.slug}`} className="d-blog-card">
                  <div className="d-blog-card-img">
                    <img src={post.image} alt={post.title} />
                  </div>
                  <div className="d-blog-card-body">
                    <p className="d-blog-category">{post.category}</p>
                    <h3 className="d-blog-card-title">{post.title}</h3>
                    <p className="d-blog-card-excerpt">{post.excerpt}</p>
                    <div className="d-blog-meta">
                      <span>{post.date}</span>
                      <span className="d-blog-meta-dot" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="d-blog-cta">
          <div className="d-blog-cta-inner">
            <p className="d-blog-cta-label">STAY INFORMED</p>
            <h2 className="d-blog-cta-heading">
              Want personalised market intel?
            </h2>
            <p className="d-blog-cta-body">
              Every client gets direct access to Justin's analysis — no generic
              newsletters, just the data that matters for your specific goals.
            </p>
            <a href="/contact" className="d-blog-cta-btn">
              GET IN TOUCH
            </a>
          </div>
        </section>
      </main>

      <FooterDimerro />
    </>
  );
}
