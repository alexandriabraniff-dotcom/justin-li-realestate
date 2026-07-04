"use client";

import { useState } from "react";
import { config } from "@/lib/config";

export default function ContactDimerro() {
  const { agent } = config;
  const { contact } = agent;

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Wire to API route or form service
  };

  return (
    <section id="contact" className="d-contact">
      <div className="d-contact-inner">
        {/* Left: heading + contact info */}
        <div className="d-contact-left">
          <p className="d-contact-label">GET IN TOUCH</p>
          <h2 className="d-contact-heading">
            Ready to make your move?
          </h2>

          <div className="d-contact-info-block">
            <p className="d-contact-info-label">PHONE</p>
            <a
              href={`tel:${contact.phone}`}
              className="d-contact-info-value"
            >
              {contact.phone}
            </a>
          </div>

          <div className="d-contact-info-block">
            <p className="d-contact-info-label">EMAIL</p>
            <a
              href={`mailto:${contact.email}`}
              className="d-contact-info-value"
            >
              {contact.email}
            </a>
          </div>

          <div className="d-contact-info-block">
            <p className="d-contact-info-label">LOCATION</p>
            <p className="d-contact-info-address">{contact.address}</p>
          </div>
        </div>

        {/* Right: form */}
        <div className="d-contact-right">
          <form className="d-contact-form" onSubmit={handleSubmit}>
            <div className="d-contact-field">
              <label className="d-contact-field-label" htmlFor="c-name">
                NAME
              </label>
              <input
                id="c-name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="d-contact-input"
                placeholder="Your full name"
                required
              />
            </div>

            <div className="d-contact-field">
              <label className="d-contact-field-label" htmlFor="c-phone">
                PHONE
              </label>
              <input
                id="c-phone"
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="d-contact-input"
                placeholder="Your phone number"
              />
            </div>

            <div className="d-contact-field">
              <label className="d-contact-field-label" htmlFor="c-email">
                EMAIL
              </label>
              <input
                id="c-email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="d-contact-input"
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="d-contact-field">
              <label className="d-contact-field-label" htmlFor="c-message">
                MESSAGE
              </label>
              <textarea
                id="c-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                className="d-contact-textarea"
                placeholder="How can Justin help you?"
                rows={5}
              />
            </div>

            <button type="submit" className="d-contact-submit">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
