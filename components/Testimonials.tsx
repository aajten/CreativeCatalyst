import styles from "./Testimonials.module.css";

import {
testimonials
} from "@/data/testimonial";

export default function Testimonials(){

return(

<section
className={styles.testimonials}
>

<div className="wrap">

<h2>

Testimonials

</h2>

<div
className={styles.grid}
>

{testimonials.map((item)=>(

<div
key={item.name}
className={styles.card}
>

<div
className={styles.quote}
>

"

</div>

<p>

{item.feedback}

</p>

<h3>

{item.name}

</h3>

<div
className={styles.company}
>

{item.company}

</div>

</div>

))}

</div>

</div>

</section>

)

}