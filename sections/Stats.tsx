const stats = [
  {
    number: "38+",
    label: "Years Experience",
  },
  {
    number: "50+",
    label: "Suppliers Developed",
  },
  {
    number: "100+",
    label: "PPAP Approvals",
  },
  {
    number: "90%+",
    label: "Audit Achievement",
  },
];

export default function Stats() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">
      <div className="grid md:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8"
          >
            <h3 className="text-5xl font-black text-primary">
              {item.number}
            </h3>

            <p className="mt-3 text-muted text-lg">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}