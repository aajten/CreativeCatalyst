import { Consultation }
from "@/types/consultation";

export function validateConsultation(

data:Consultation

){

return(

data.name &&
data.email &&
data.mobile

)

}