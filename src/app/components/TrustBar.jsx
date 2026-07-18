import { FaCertificate, FaFileSignature, FaClock, FaCalendarCheck, FaStar } from 'react-icons/fa';

const trustItems = [
  { icon: FaCertificate, label: 'Licensed' },
  { icon: FaFileSignature, label: 'Insured' },
  { icon: FaClock, label: '24/7 Emergency' },
  { icon: FaCalendarCheck, label: 'Same‑Day Service' },
  { icon: FaStar, label: '100% Satisfaction' },
];

export default function TrustBar() {
  return (
    <section className="py-6 border-b border-primary/5">
      <div className="container-custom">
        <div className="flex flex-wrap justify-center md:justify-between gap-4 md:gap-8">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-3 font-semibold text-sm md:text-base text-text-dark">
              <item.icon className="text-accent-cool text-xl" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}