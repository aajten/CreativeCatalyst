import styles from "./Testimonials.module.css";
import { testimonials } from "@/data/testimonial";

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className="wrap">
        <div className={styles.heading}>
          <div className={styles.eyebrow}>
            Testimonials
          </div>

          <h2>
            What Our Clients Say
          </h2>

          <p>
            Trusted by manufacturing leaders, suppliers, and organizations
            committed to operational excellence.
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((item) => (
            <div
              key={item.name}
              className={styles.card}
            >
              <div className={styles.quote}>
                "
              </div>

              <p className={styles.feedback}>
                {item.feedback}
              </p>

              <div className={styles.footer}>
                <h3>{item.name}</h3>
                <span>{item.company}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}