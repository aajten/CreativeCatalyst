import styles from "./CaseStudies.module.css";

import {
  caseStudies
} from "@/data/caseStudies";

export default function CaseStudies() {

  return (

    <section
      className={styles.caseStudies}
    >

      <div className="wrap">

        <div
          className={styles.heading}
        >

          <div
            className={styles.eyebrow}
          >

            Case Studies

          </div>

          <h2>

            Transformation stories
            from manufacturing excellence.

          </h2>

          <p>

            Execution-led consulting,
            supplier capability development
            and operational transformation.

          </p>

        </div>

        <div
          className={styles.grid}
        >

          {caseStudies.map((study)=>(

            <div

              key={study.company}

              className={styles.card}

            >

              <div
                className={styles.pill}
              >

                {study.company}

              </div>

              <h3>

                {study.title}

              </h3>

              <p>

                {study.result}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  )

}