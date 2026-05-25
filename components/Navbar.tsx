import Link from "next/link";
import Image from "next/image";

import styles from "./Navbar.module.css";

export default function Navbar() {

return(

<header
className={styles.header}
>

<div
className={`wrap ${styles.navbar}`}
>

<Link
href="/"
className={styles.logo}
>

<Image

src="/logo.jpg"

alt="Creative Catalyst Logo"

width={56}

height={56}

priority

/>

<div>

</div>

</Link>

<nav
className={styles.links}
>

<Link href="/">
Home
</Link>

<Link href="/services">
Services
</Link>

<Link href="/case-studies">
Case Studies
</Link>

<Link href="/team">
Team
</Link>

<Link href="/contact">
Contact
</Link>

</nav>

<Link
href="/contact"
className={styles.button}
>

Book Consultation

</Link>

</div>

</header>

)

}