"use client";

import { useState } from "react";

import styles from "./Contact.module.css";

interface FormData{

name:string;

email:string;

mobile:string;

company:string;

message:string;

}

export default function Contact(){

const[
loading,
setLoading
]=useState(false);

const[
success,
setSuccess
]=useState("");

const[
formData,
setFormData
]=useState<FormData>({

name:"",
email:"",
mobile:"",
company:"",
message:""

});

function handleChange(
e:React.ChangeEvent<
HTMLInputElement|
HTMLTextAreaElement

>

){
    console.log("inside handle change ",formData)

setFormData({

...formData,

[e.target.name]:
e.target.value

});

}

async function handleSubmit(
  

e:React.FormEvent

){

e.preventDefault();
  console.log("formData",)
setLoading(true);

setSuccess("");

try{

const response=

await fetch(

"/api/consultation",

{

method:"POST",

headers:{

"Content-Type":
"application/json"

},

body:

JSON.stringify(

formData

)

}

);

const data=

await response.json();

if(data.success){

setSuccess(

"Consultation request submitted successfully."

);

setFormData({

name:"",
email:"",
mobile:"",
company:"",
message:""

});

}

else{

setSuccess(

"Unable to submit request."

);

}

}

catch{

setSuccess(

"Something went wrong."

);

}

finally{

setLoading(false);

}

}

return(

<section
className={styles.contact}
>

<div className="wrap">

<div
className={styles.container}
>

<div>

<h2>

Book Consultation

</h2>

<p>

Discuss supplier development,
quality systems,
manufacturing excellence
and operational improvement.

</p>

</div>

<form

onSubmit={handleSubmit}

className={styles.form}

>

<input

name="name"

placeholder="Full Name"

value={formData.name}

onChange={handleChange}

required

/>

<input

name="email"

type="email"

placeholder="Email Address"

value={formData.email}

onChange={handleChange}

required

/>

<input

name="mobile"

placeholder="Mobile Number"

value={formData.mobile}

onChange={handleChange}

required

/>

<input

name="company"

placeholder="Company Name"

value={formData.company}

onChange={handleChange}

/>

<input

name="message"

placeholder="Tell us your requirement"

value={formData.message}

onChange={handleChange}

required

/>

<button

disabled={loading}

className={styles.button}

>

{

loading

?

"Submitting..."

:

"Submit"

}

</button>

{

success&&(

<p>

{success}

</p>

)

}

</form>

</div>

</div>

</section>

)

}