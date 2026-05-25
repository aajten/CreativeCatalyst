export default function CTA() {
  return (
    <section className="pb-24 px-6">
      <div className="max-w-7xl mx-auto rounded-[40px] p-14 bg-gradient-to-r from-primary to-secondary">

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">

          {/* LEFT CONTENT */}
          <div>
            <p className="uppercase tracking-[0.2em] text-sm font-semibold text-black/70">
              Let’s Build Excellence
            </p>

            <h2 className="text-4xl md:text-5xl font-black mt-4 leading-tight text-black max-w-3xl">
              Ready To Transform Your Manufacturing Performance?
            </h2>

            <p className="mt-6 text-black/70 text-lg max-w-2xl">
              Partner with Creative Catalyst to strengthen supplier systems,
              improve operational excellence and achieve measurable business impact.
            </p>
          </div>

          {/* BUTTON */}
          <div>
            <button className="bg-black text-white px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-transform duration-300 shadow-2xl">
              Schedule Consultation
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}