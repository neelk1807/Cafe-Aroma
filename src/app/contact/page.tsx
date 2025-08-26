"use client";

import { useState, ChangeEvent, FormEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // 💡 Add correct typing for event parameter
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 💡 Add typing for form submission and error
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("");
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(`❌ Error: ${data.error || "Something went wrong."}`);
      }
    } catch (err: unknown) {
      const error = err as Error;
      setStatus(`❌ Network Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-[#fffaf3] text-[#4b2e1e]">
      <section className="max-w-xl mx-auto px-4 py-10 mt-30 mb-20">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            className="border border-[#ddd] rounded px-4 py-2"
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className="border border-[#ddd] rounded px-4 py-2"
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            className="border border-[#ddd] rounded px-4 py-2"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-[#facc15] text-[#4b2e1e] font-semibold px-4 py-2 rounded hover:bg-[#fbbf24] transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          {status && <p className="text-center">{status}</p>}
        </form>
      </section>

      {/* Location & Contact */}
      <section className="contact-section bg-gradient-to-r from-[#b96e3f] to-[#6f3e1d] text-white py-16 text-center">
        <div className="contact-conatiner grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="contact-info">
            <h4 className="contact-infoheading font-bold text-lg mb-2">
              Hours
            </h4>
            <p className="contact-infoday">Mon-Fri: 6:00 AM - 8:00 PM</p>
            <p className="contact-infotime">Weekends: 7:00 AM - 9:00 PM</p>
          </div>
          <div className="contact-info">
            <h4 className="contact-infoheading font-bold text-lg mb-2">
              Location
            </h4>
            <p className="contact-infolocate">123 Coffee Street</p>
            <p className="contact-infoarea">Downtown District</p>
          </div>
          <div className="contact-info">
            <h4 className="contact-infoheading font-bold text-lg mb-2">
              Contact
            </h4>
            <p className="contact-infotel">(555) 123-BREW</p>
            <p className="contact-infomail">hello@roastedbliss.com</p>
          </div>
        </div>
      </section>
    </main>
  );
}
 