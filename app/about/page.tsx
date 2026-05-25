import Team from "@/components/Team";

import type { Metadata }
from "next";

export const metadata:Metadata={

title:
"About",

description:
"Creative Catalyst manufacturing consulting."

};

export default function About(){

return(

<section>

<div className="wrap">

<h1>

About Creative Catalyst

</h1>

<p>

Creative Catalyst enhances manufacturing systems through execution-led consulting.

</p>

</div>

<Team/>

</section>

)

}