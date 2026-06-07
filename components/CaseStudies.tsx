import styles from "./CaseStudies.module.css";
import { caseStudies } from "@/data/caseStudies";

export default function CaseStudies() {
  return (
    <section className={styles.caseStudies}>
      <div className="wrap">
        <div className={styles.heading}>
          <div className={styles.eyebrow}>
            Case Studies
          </div>

          <h2>
            Transformation Stories in Manufacturing Excellence
          </h2>

          <p>
            Execution-Led Consulting, Supplier Capability Development &
            Operational Transformation.
          </p>
        </div>

        <div className={styles.grid}>
          {caseStudies.map((study) => (
            <div
              key={study.company}
              className={styles.card}
            >
              <div className={styles.pill}>
                {study.company}
              </div>

              <h3>{study.focus}</h3>

              <div className={styles.section}>
                <strong>Impact</strong>
                <p>{study.impact}</p>
              </div>

              <div className={styles.section}>
                <strong>Result</strong>
                <p>{study.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}