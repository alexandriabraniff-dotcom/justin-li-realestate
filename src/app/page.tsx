import { config } from "@/lib/config";
import Topbar from "@/components/topbar";
import NavDimerro from "@/components/nav-dimerro";
import HeroDimerro from "@/components/hero-dimerro";
import QuickContact from "@/components/quickcontact";
import AboutDimerro from "@/components/about-dimerro";
import ListingsDimerro from "@/components/listings-dimerro";
import TestimonialsDimerro from "@/components/testimonials-dimerro";
import ContactDimerro from "@/components/contact-dimerro";
import FooterDimerro from "@/components/footer-dimerro";

export default function Home() {
  const { designer } = config;

  return (
    <>
      {/* Designer credit banner */}
      <div className="designer-banner">
        Website design by{" "}
        <a
          href={`mailto:${designer.email}`}
          style={{ color: "inherit", textDecoration: "underline" }}
        >
          {designer.name}
        </a>
      </div>

      <Topbar />
      <NavDimerro />

      <main>
        <HeroDimerro />
        <QuickContact />
        <AboutDimerro />
        <ListingsDimerro />
        <TestimonialsDimerro />
        <ContactDimerro />
      </main>

      <FooterDimerro />
    </>
  );
}
