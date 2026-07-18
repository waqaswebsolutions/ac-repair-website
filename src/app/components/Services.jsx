import { FaWrench, FaTools, FaMicrochip, FaFire, FaWind, FaBolt } from 'react-icons/fa';

const services = [
  { icon: FaWrench, title: 'AC Repair', description: 'Fast diagnostic and repair for all premium AC brands.', type: 'cool' },
  { icon: FaTools, title: 'AC Installation', description: 'Energy‑efficient installation with extended warranty.', type: 'cool' },
  { icon: FaMicrochip, title: 'AC Maintenance', description: 'Preventive maintenance to maximize equipment life.', type: 'cool' },
  { icon: FaFire, title: 'Heating Repair', description: 'Furnace and heat pump repair by certified experts.', type: 'warm' },
  { icon: FaWind, title: 'Indoor Air Quality', description: 'Purifiers, humidifiers & professional duct cleaning.', type: 'neutral' },
  { icon: FaBolt, title: 'Emergency HVAC', description: '24/7 rapid response for urgent breakdowns.', type: 'neutral' },
];

const typeStyles = {
  cool: 'text-accent-cool bg-accent-cool/10 hover:bg-accent-cool/20',
  warm: 'text-accent-warm bg-accent-warm/10 hover:bg-accent-warm/20',
  neutral: 'text-primary bg-primary/10 hover:bg-primary/20',
};

export default function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle mt-3">Comprehensive HVAC solutions delivered with precision and care</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-8 text-center border border-primary/5 shadow-sm hover:shadow-soft transition-all hover:-translate-y-3 cursor-default"
            >
              <div className={`inline-flex p-4 rounded-2xl text-3xl ${typeStyles[service.type]} transition-all`}>
                <service.icon />
              </div>
              <h3 className="text-xl font-bold text-primary mt-5">{service.title}</h3>
              <p className="text-text-soft text-sm mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}