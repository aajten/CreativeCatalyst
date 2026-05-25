import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero(){

return(

<section
className={styles.hero}
>

<div className="wrap">

<div
className={styles.heroGrid}
>

<div>

<div
className={styles.eyebrow}
>

We enhance with creativity

</div>

<h1>

Shape ordinary operations
into world-class
manufacturing systems.

</h1>

<p>

Creative Catalyst helps
manufacturing companies
improve quality,
delivery and supplier capability.

</p>

<div
className={styles.actions}
>

<Link
href="/contact"
className={styles.primaryButton}
>

Book Consultation

</Link>

<Link
href="/case-studies"
className={styles.secondary}
>

Case Studies

</Link>

</div>

</div>

<div
className={styles.panel}
>

<div>
Supplier Capability
</div>

<div>
KPI Deployment
</div>

<div>
Audit Readiness
</div>

<div>
Industry 4.0
</div>

</div>

</div>

</div>

</section>

)

}