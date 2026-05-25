import Link from "next/link";

import styles from "./Footer.module.css";

export default function Footer(){

return(

<footer
className={styles.footer}
>

<div
className={`wrap ${styles.container}`}
>

<div>

© 2026 Creative Catalyst

</div>

<div
className={styles.links}
>

<Link
href="/services"
>

Services

</Link>

<Link
href="/team"
>

Team

</Link>

<Link
href="/contact"
>

Contact

</Link>

</div>

</div>

</footer>

)

}