const cards = [
  "Strategy",
  "Execution",
  "Analytics",
  "Growth",
];

export default function SystemGrid() {
  return (
    <div className="system-grid">

      {cards.map((card) => (

        <div
          key={card}
          className="card"
        >

          <h3>
            {card}
          </h3>

          <p>
            Build scalable systems
          </p>

        </div>

      ))}

    </div>
  );
}