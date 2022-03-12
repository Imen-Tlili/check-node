import axios from "axios"
import { useEffect, useState } from "react"
import UserCard from './UserCard'
import { Link} from "react-router-dom"

const UserList=()=>{
    const [users, setUsers]=useState([])
    const [user,setUser] = useState({})
    const [load, setLoad]=useState(true)

    useEffect(()=>{
                  axios.get('https://jsonplaceholder.typicode.com/users')
                  .then((res)=>setUsers(res.data))
                  .then(()=>setLoad(false))
                  .catch((err)=>console.log(err))
    },[])

    return (
        <div>
           {
                load? <h2>en cours</h2> : users.map(user=> <h2><Link to={`/users/${user.id}`}><UserCard user={user} setUser={setUser}/></Link></h2>)      } 
        </div>
    )
}
export default UserList