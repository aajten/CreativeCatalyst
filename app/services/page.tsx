import Services from "@/components/Services";

import type { Metadata }
from "next";

export const metadata:Metadata={

title:
"Services",

description:
"Supplier development, VDA 6.3, Lean Manufacturing and consulting services."

};

export default function Page(){

return(

<Services/>

)

}