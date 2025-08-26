export default function testimonial() {
  return (
    <section className="bg-[#fff7e6] py-20 px-4 text-center">
      <h2 className="testimonial-mainheading text-3xl font-bold mb-12 text-[#4b2e1e]">
        What Our Customers Say
      </h2>
      <div className="testimonial-content grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {[
          {
            author: "- Sarah Johnson",
            review:
              "The best coffee in town! The atmosphere is cozy and the baristas really know their craft. My morning isn’t complete without my Sunrise blend.",
          },
          {
            author: "- Michael Chen",
            review:
              "A hidden gem! Great wifi, comfortable seating, and amazing pastries. This has become my go-to spot for work meetings.",
          },
        ].map((testimonialteam, testimonialsdata) => (
          <div
            key={testimonialsdata}
            className="testimonial-container bg-white p-6 rounded-xl shadow"
          >
            <p className="testimonial-text italic mb-3">
              {testimonialteam.review}
            </p>
            <h4 className="testimonial-heading text-xxl font-semibold ">
              {testimonialteam.author}
            </h4>
          </div>
        ))}
      </div>
      
    </section>
  );
}
