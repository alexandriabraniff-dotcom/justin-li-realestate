"use client";

import { useState } from "react";

export default function QuickContact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic can be wired to an API route
    window.location.href = `/#contact`;
  };

  return (
    <section className="d-quickcontact">
      <form className="d-quickcontact-inner" onSubmit={handleSubmit}>
        <div className="d-quickcontact-field">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="d-quickcontact-input"
            autoComplete="name"
          />
        </div>
        <div className="d-quickcontact-field">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="d-quickcontact-input"
            autoComplete="tel"
          />
        </div>
        <div className="d-quickcontact-field">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="d-quickcontact-input"
            autoComplete="email"
          />
        </div>
        <button type="submit" className="d-quickcontact-btn">
          SEND ENQUIRY
        </button>
      </form>
    </section>
  );
}
