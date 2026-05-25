import styles from "./Stats.module.css";

interface Stat{

value:string;

description:string;

}

const stats:Stat[]=[

{
value:"40+ Years",
description:"Manufacturing leadership"
},

{
value:"50+ Suppliers",
description:"Transformation projects"
},

{
value:"1000+ Parts",
description:"Quality development capability"
}

];

export default function Stats(){

return(

<section
className={styles.stats}
>

<div className="wrap">

<div
className={styles.grid}
>

{stats.map((item)=>(

<div
key={item.value}
className={styles.card}
>

<h2>

{item.value}

</h2>

<p>

{item.description}

</p>

</div>

))}

</div>

</div>

</section>

)

}