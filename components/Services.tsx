import styles from "./Services.module.css";

import {
services
} from "@/data/services";

export default function Services(){

return(

<section
id="services"
className={styles.services}
>

<div className="wrap">

<div
className={styles.heading}
>

<h2>

Services

</h2>

<p>

Manufacturing systems and supplier excellence.

</p>

</div>

<div
className={styles.grid}
>

{services.map((item)=>(

<div
key={item}
className={styles.card}
>

<div
className={styles.icon}
>

✓

</div>

<h3>

{item}

</h3>

</div>

))}

</div>

</div>

</section>

)

}