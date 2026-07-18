const steps = [
  { number: 1, title: 'Book', description: 'Schedule online or call us.' },
  { number: 2, title: 'Inspection', description: 'Thorough diagnosis of your system.' },
  { number: 3, title: 'Repair', description: 'Fast, reliable fix with quality parts.' },
  { number: 4, title: 'Enjoy Comfort', description: 'Relax with your perfectly working HVAC.' },
];

export default function Process() {
  return (
    <section className="section-padding bg-bg-light">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="section-title">Our Process</h2>
          <p className="section-subtitle mt-3">Four refined steps to total comfort</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {steps.map((step) => (
            <div key={step.number} className="text-center group cursor-default">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-2xl font-extrabold shadow-soft transition-all group-hover:bg-accent-cool group-hover:scale-105 group-hover:shadow-glow-cool">
                {step.number}
              </div>
              <h4 className="text-xl font-bold text-primary mt-4">{step.title}</h4>
              <p className="text-text-soft text-sm mt-1">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}