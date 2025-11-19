import { useState } from "react"
import Get from "../Components/family"
const Button=()=>{
    const[sohw,setshow]=useState(false)
    return(
        <>
        <button onClick={()=>setshow(true)}>get all family</button>
        {sohw&&<Get/>}
        </>
    )
}
export default Button