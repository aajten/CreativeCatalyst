import type { Metadata } from "next";

import Team from "@/components/Team";

export const metadata: Metadata = {

title: "Our Team",

description:
"Meet the Creative Catalyst team driving manufacturing excellence, supplier development and operational transformation."

};

export default function TeamPage() {

return (

<section>

<div className="wrap">

<div
style={{
paddingTop:"80px",
paddingBottom:"40px"
}}
>

<h1>

Our Team

</h1>

<p
style={{
marginTop:"20px",
maxWidth:"700px"
}}
>

Experienced professionals helping
organizations improve supplier capability,
quality systems, manufacturing excellence
and business performance.

</p>

</div>

<Team/>

</div>

</section>

);

}