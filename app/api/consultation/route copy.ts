import { NextResponse }
from "next/server";

import { resend }
from "@/lib/resend";

import {
validateConsultation
}
from "@/lib/validations";

export async function POST(

request:Request

){

try{
const body=

await request.json();

const valid=

validateConsultation(

body

);

if(!valid){

return NextResponse.json(

{

success:false

},

{

status:400

}

)

}

const{

name,
email,
mobile,
company,
message

}=body;

await resend.emails.send({

from:

"Creative Catalyst <onboarding@resend.dev>",

to:

process.env.COMPANY_EMAIL!,

subject:

"New Consultation Request",

html:`

<h2>

New Lead

</h2>

<p>

Name:
${name}

</p>

<p>

Email:
${email}

</p>

<p>

Mobile:
${mobile}

</p>

<p>

Company:
${company}

</p>

<p>

Message:
${message}

</p>

`

});

await resend.emails.send({

from:

"Creative Catalyst <onboarding@resend.dev>",

to:

email,

subject:

"We received your request",

html:`

<h2>

Thank You

${name}

</h2>

<p>

Your response has been recorded.

Our team will connect
with you shortly.

</p>

`

});

return NextResponse.json({

success:true

})

}

catch{

return NextResponse.json(

{

success:false

},

{

status:500

}

)

}

}