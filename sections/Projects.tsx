const projects = [
  {
    company: "Kiran Machine Tools",
    title: "VDA 6.3 + MMOG Implementation",
    result: "Audit score improved to 90%+",
  },
  {
    company: "Prabha Engineering",
    title: "GD&T & Inspection Capability",
    result: "Inspection accuracy improved by 40%",
  },
  {
    company: "Sintercom India Ltd.",
    title: "VDA 6.3 Process Audit Training",
    result: "Reduced to only 5 red points",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">

          <div>
            <p className="text-primary uppercase tracking-[0.2em] text-sm">
              Case Studies
            </p>

            <h2 className="text-5xl font-black mt-4">
              Proven Industry Impact
            </h2>
          </div>

          <button className="border border-primary text-primary px-6 py-3 rounded-2xl hover:bg-primary hover:text-black transition-all duration-300">
            View All Projects
          </button>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl overflow-hidden hover:border-primary/40 transition-all duration-300"
            >

              {/* TOP VISUAL */}
              <div className="h-52 bg-gradient-to-br from-primary/20 to-secondary/20" />

              {/* CONTENT */}
              <div className="p-8">

                <p className="text-sm uppercase tracking-[0.15em] text-primary mb-3">
                  {project.company}
                </p>

                <h3 className="text-2xl font-bold mb-4 leading-snug">
                  {project.title}
                </h3>

                <p className="text-muted text-lg leading-relaxed">
                  {project.result}
                </p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}