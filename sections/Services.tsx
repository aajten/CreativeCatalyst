const services = [
  {
    id: "01",
    title: "Supplier Development",
    description:
      "Supplier audits, localization, capability enhancement and supplier performance systems.",
  },
  {
    id: "02",
    title: "Quality Systems",
    description:
      "IATF 16949, VDA 6.3, Core Tools and audit readiness consulting.",
  },
  {
    id: "03",
    title: "Manufacturing Excellence",
    description:
      "Lean manufacturing, SMED, OEE improvement and shopfloor optimization.",
  },
  {
    id: "04",
    title: "Technical Training",
    description:
      "GD&T, engineering drawings, problem solving and technical capability building.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-[#0B1120]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.2em] text-sm">
            Core Expertise
          </p>

          <h2 className="text-5xl font-black mt-4">
            Services That Deliver Results
          </h2>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:-translate-y-2 hover:border-primary/40 transition-all duration-300"
            >

              {/* NUMBER */}
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-black text-xl mb-6">
                {service.id}
              </div>

              {/* TITLE */}
              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-muted leading-relaxed">
                {service.description}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}