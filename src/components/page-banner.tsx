import { ReactNode } from "react";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&q=80";

interface PageBannerProps {
  eyebrow: string;
  heading: string;
  backgroundImage?: string;
  children?: ReactNode;
}

export default function PageBanner({
  eyebrow,
  heading,
  backgroundImage,
  children,
}: PageBannerProps) {
  const bg = backgroundImage || DEFAULT_IMAGE;

  return (
    <section className="d-page-banner">
      <div
        className="d-page-banner-bg"
        style={{ backgroundImage: `url(${bg})` }}
      />
      <div className="d-page-banner-overlay" />
      <div className="d-page-banner-content">
        <p className="d-page-banner-eyebrow">{eyebrow}</p>
        <h1 className="d-page-banner-heading">{heading}</h1>
        {children}
      </div>
    </section>
  );
}
