import styles from "./Team.module.css";

import {
teamMembers
} from "@/data/team";

export default function Team(){

return(

<section
className={styles.team}
>

<div className="wrap">

<div
className={styles.heading}
>

<div
className={styles.eyebrow}
>

Leadership Team

</div>

<h2>

Experts driving manufacturing
transformation and supplier excellence.

</h2>

<p>

Execution-led consulting backed by
deep automotive, manufacturing and
business excellence experience.

</p>

</div>

<div
className={styles.grid}
>

{teamMembers.map((member)=>(

<div

key={member.name}

className={styles.card}

>

<div
className={styles.avatar}
>

{member.initials}

</div>

<h3>

{member.name}

</h3>

<p
className={styles.role}
>

{member.role}

</p>

<p
className={styles.experience}
>

{member.experience}

</p>

</div>

))}

</div>

</div>

</section>

)

}