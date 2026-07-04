import { config } from "@/lib/config";

export default function FooterDimerro() {
  const { agent, footer, designer } = config;
  const year = new Date().getFullYear();

  return (
    <footer className="d-footer">
      <div className="d-footer-inner">
        {/* Top section */}
        <div className="d-footer-top">
          {/* Brand */}
          <div className="d-footer-brand">
            <div className="d-footer-logo-name">{agent.name}</div>
            <div className="d-footer-logo-sub">{agent.title}</div>
            <p className="d-footer-tagline">{footer.tagline}</p>
          </div>

          {/* Columns */}
          <div className="d-footer-cols">
            {footer.columns.map((col, i) => (
              <div key={i} className="d-footer-col">
                <p className="d-footer-col-heading">{col.heading}</p>
                <ul className="d-footer-col-list">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <a href={link.href} className="d-footer-col-link">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="d-footer-bottom">
          <p className="d-footer-copyright">
            &copy; {year} {agent.name}. {footer.legal}
          </p>
          <p className="d-footer-credit">
            Website by{" "}
            <a
              href={`mailto:${designer.email}`}
              className="d-footer-credit-link"
            >
              {designer.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
