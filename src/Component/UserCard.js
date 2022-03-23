import {useEffect,useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import axios from "axios"
import {Card,Button} from 'react-bootstrap'

const UserCard=({user})=>{
    
    // const {id} = useParams()
   
    // const [load,setLoad] = useState(true)

    // useEffect(()=>{
    //     axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    //     .then((res)=>setUser(res.data))
    //     .then(()=>setLoad(false))
    //     .catch((err)=>console.log(err))
    // },[])


    return(
   
                <div>
                    <Card style={{ width: '18rem' }}>
                    <Card.Body>
                    
                    <Card.Subtitle className="mb-2 text-muted">{user.name}</Card.Subtitle>
                    <Card.Text className="mb-2 text-muted">{user.username}</Card.Text>
                    <Card.Text className="mb-2 text-muted">{user.email}</Card.Text>
                    <Card.Text className="mb-2 text-muted">{user.address.street}</Card.Text>
                    {/* <Card.Phone className="mb-2 text-muted">{user.phone}</Card.Phone>
                    <Card.Website className="mb-2 text-muted">{user.website}</Card.Website>
                    <Card.Comp className="mb-2 text-muted">{user.company.name}</Card.Comp> */}
                    
                   <Link to={`/users/${user.id}`}><Button>more details</Button></Link> 
    
                    </Card.Body>
                    </Card>
                </div>

    )
}
export default UserCard