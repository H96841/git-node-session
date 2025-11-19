import { useEffect } from "react"
import { useState } from "react"
import{axios}from "axios"

const Get=()=>{
const [family ,setfamily]=useState([])
useEffect(()=>{
const fetchData=async()=>{
    const res=await axios.GET("http/lochalhost:1005/api/family/"`${id}`)
    if(!res)
        res.send("")
        setfamily(res.data)

    }
fetchData()

},[]
)
    return (
      <h1> {family.map((temp)=>(<li key={family._id}>{family.name}</li>))}</h1>
    )
}
export default  Get