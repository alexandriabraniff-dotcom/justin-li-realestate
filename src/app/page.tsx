import { config } from "@/lib/config";
import NavDimerro from "@/components/nav-dimerro";
import HeroDimerro from "@/components/hero-dimerro";
import AboutDimerro from "@/components/about-dimerro";
import ListingsDimerro from "@/components/listings-dimerro";
import TestimonialsDimerro from "@/components/testimonials-dimerro";
import ContactDimerro from "@/components/contact-dimerro";
import FooterDimerro from "@/components/footer-dimerro";

export default function Home() {
  const { designer } = config;

  return (
    <>
      {/* DESIGNER CREDIT BANNER - remove only after client payment */}
      <div className="designer-banner">
        Website designed by{" "}
        <a
          href={designer.website}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit", textDecoration: "underline" }}
        >
          {designer.name}
        </a>
        {" · "}
        <a
          href={`mailto:${designer.email}`}
          style={{ color: "inherit", textDecoration: "underline" }}
        >
          {designer.email}
        </a>
      </div>

      <NavDimerro />

      <main>
        <HeroDimerro />
        <AboutDimerro />
        <ListingsDimerro />
        <TestimonialsDimerro />
        <ContactDimerro />
      </main>

      <FooterDimerro />
    </>
  );
}
