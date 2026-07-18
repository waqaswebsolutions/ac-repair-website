import { FaUserShield, FaTachometerAlt, FaTag, FaMedal, FaMicroscope, FaHeadset } from 'react-icons/fa';

const reasons = [
  { icon: FaUserShield, title: 'Certified Technicians' },
  { icon: FaTachometerAlt, title: 'Fast Response' },
  { icon: FaTag, title: 'Transparent Pricing' },
  { icon: FaMedal, title: 'Warranty' },
  { icon: FaMicroscope, title: 'Modern Equipment' },
  { icon: FaHeadset, title: 'Excellent Service' },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-bg-light">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle mt-3">Excellence, reliability, and peace of mind — every time</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white rounded-2xl p-8 text-center border border-primary/5 shadow-sm hover:shadow-soft transition-all hover:-translate-y-2 cursor-default"
            >
              <div className="inline-flex p-4 rounded-2xl bg-accent-cool/10 text-accent-cool text-3xl transition-all hover:bg-accent-cool/20 hover:scale-105">
                <reason.icon />
              </div>
              <h4 className="text-lg font-bold text-primary mt-4">{reason.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}