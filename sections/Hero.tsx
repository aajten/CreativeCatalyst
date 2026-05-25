export default function Hero() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 pt-24 pb-20 grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT */}
      <div>
        <p className="uppercase tracking-[0.25em] text-primary text-sm mb-6">
          Manufacturing Excellence • Supplier Development • Transformation
        </p>

        <h1 className="text-5xl md:text-7xl font-black leading-tight">
          Transforming
          <span className="block text-primary">
            Manufacturing
          </span>
          Through Excellence
        </h1>

        <p className="mt-8 text-lg text-muted leading-relaxed max-w-xl">
          Creative Catalyst helps automotive and engineering organizations
          achieve operational excellence through supplier development,
          audit readiness, lean transformation and implementation-focused
          consulting.
        </p>

        <div className="mt-10 flex flex-wrap gap-5">
          <button className="bg-primary text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-transform duration-300">
            Explore Services
          </button>

          <button className="border border-white/20 px-8 py-4 rounded-2xl font-semibold hover:border-primary hover:text-primary transition-all duration-300">
            View Projects
          </button>
        </div>
      </div>

      {/* RIGHT */}
      <div className="relative flex justify-center">
        <div className="absolute w-[450px] h-[450px] bg-primary/20 blur-[120px] rounded-full" />

        <img
          src="/logo.png"
          alt="Creative Catalyst"
          className="relative z-10 w-full max-w-xl"
        />
      </div>
    </section>
  );
}