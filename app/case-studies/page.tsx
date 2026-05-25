import CaseStudies
from "@/components/CaseStudies";

import type { Metadata }
from "next";

export const metadata:Metadata={

title:
"Case Studies",

description:
"Manufacturing transformation examples."

};

export default function Page(){

return(

<CaseStudies/>

)

}