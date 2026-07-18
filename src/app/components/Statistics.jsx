const stats = [
  { number: '15+', label: 'Years Experience' },
  { number: '10K+', label: 'Happy Customers' },
  { number: '24/7', label: 'Availability' },
  { number: '4.9', label: 'Rating' },
];

export default function Statistics() {
  return (
    <section className="section-padding bg-bg-light">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group cursor-default">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary group-hover:scale-105 transition-all">
                {stat.number}
              </div>
              <p className="text-text-soft font-semibold text-sm sm:text-base mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}