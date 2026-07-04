import { config } from "@/lib/config";

export default function Topbar() {
  const { contact } = config.agent;

  return (
    <div className="d-topbar">
      <div className="d-topbar-inner">
        <div className="d-topbar-left">
          <a href={`mailto:${contact.email}`} className="d-topbar-item">
            {contact.email}
          </a>
          <span className="d-topbar-sep">·</span>
          <a href={`tel:${contact.phone}`} className="d-topbar-item">
            {contact.phone}
          </a>
        </div>
        <div className="d-topbar-center">
          <a href="#contact" className="d-topbar-pill">
            Book a Consultation
          </a>
        </div>
        <div className="d-topbar-right">
          <span className="d-topbar-item">{contact.address}</span>
        </div>
      </div>
    </div>
  );
}
