import Link from "next/link";
import Image from "next/image";
import Testimonial from "./component/testimonial";

export default function Home() {
  return (
    <main className="bg-[#fffaf3] text-[#4b2e1e]">
      {/* Hero Section */}
      <section className="herosection bg-gradient-to-r from-[#6f3e1d] to-[#b96e3f] text-white text-center py-24 px-4">
        <h1 className="herosection-heading text-5xl font-extrabold mb-4">
          Welcome to{" "}
          <span className="herosection-secondheading text-yellow-300">
            Roasted Bliss
          </span>
        </h1>
        <p className="herosection-text text-xl mb-8">
          Where every cup tells a story of passion and perfection
        </p>
        <div className="herosection-buttoncontainer space-x-4">
          <button className="herosection-viewmore bg-yellow-300 text-[#4b2e1e] font-semibold px-6 py-2 rounded shadow hover:bg-yellow-200 transition cursor-pointer">
            <Link href="/menu"> View Our Menu </Link>
          </button>
          <button className="herosection-visit border border-white px-6 py-2 rounded hover:bg-white hover:text-[#4b2e1e] transition cursor-pointer">
            Visit Us Today
          </button>
        </div>
      </section>

      {/* Signature Blends Section */}
      <section className="signature-section py-20 px-4 bg-[#fffaf3] text-center">
        <h2 className="signature-heading text-3xl font-bold mb-12 text-[#4b2e1e]">
          Our Signature Blends
        </h2>
        <div className="signature-content grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "Morning Sunrise",
              desc: "Smooth, with caramel and vanilla.",
              icon: "/coffeeimages.png",
            },
            {
              title: "Midnight Roast",
              desc: "Dark, bold, and intense.",
              icon: "/coffeeimages.png",
            },
            {
              title: "Hazelnut Dream",
              desc: "Creamy and nutty with a hint of sweetness.",
              icon: "/coffeeimages.png",
            },
          ].map((coffeeitems, signatureitems) => (
            <div
              key={signatureitems}
              className="signature-card bg-[#fef3c7] p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <Image
                src={coffeeitems.icon}
                alt={coffeeitems.title}
                width={64}
                height={64}
                className="signature-logo mx-auto mb-4 rounded-full"
              />
              <h3 className="signature-contentheading text-xl font-semibold mb-2">
                {coffeeitems.title}
              </h3>
              <p className="singnature-contenttext">{coffeeitems.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <Testimonial />

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
