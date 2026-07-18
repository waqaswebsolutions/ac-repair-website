const areas = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego'];

export default function ServiceAreas() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="section-title">Service Areas</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
          {areas.map((area) => (
            <div
              key={area}
              className="bg-white border border-primary/10 rounded-full py-3.5 text-center font-semibold text-sm text-primary hover:bg-primary hover:text-white hover:border-primary transition-all hover:scale-105 shadow-sm hover:shadow-soft cursor-default"
            >
              {area}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}