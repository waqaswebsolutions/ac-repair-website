import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    quote: 'Exceptional service! My AC was fixed within hours. Professional and courteous.',
    author: 'Maria S.',
  },
  {
    quote: 'Highly recommend. Transparent pricing and the technician was very knowledgeable.',
    author: 'James R.',
  },
  {
    quote: 'They installed our new HVAC system flawlessly. Great communication.',
    author: 'Linda K.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="section-title">What Our Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="bg-white rounded-2xl p-8 border border-primary/5 shadow-sm hover:shadow-soft transition-all hover:-translate-y-2 cursor-default"
            >
              <FaQuoteLeft className="text-accent-cool/40 text-2xl mb-4" />
              <p className="text-text-dark italic text-sm sm:text-base">"{testimonial.quote}"</p>
              <h5 className="font-bold text-primary mt-4">— {testimonial.author}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}