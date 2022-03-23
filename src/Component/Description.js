import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Description=()=>{
        const {id} = useParams()
        const [user,setUser] = useState({})
        const [load,setLoad] = useState(true)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=>setUser(res.data))
        .then(()=>setLoad(false))
        .catch((err)=>console.log(err))
    },[])

    return(
        <div>
               {
                   load ? <h2>Stana</h2> : <h2>{user.name}</h2>
               }
        </div>
    )
}
export default Description