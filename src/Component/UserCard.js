import {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from "axios"
import {Card,Button} from 'react-bootstrap'
const UserCard=({user, setUser})=>{
    
    const {id} = useParams()
    
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
                load ? 
                <h2>en cours</h2>
                :
                <div>
                    <Card style={{ width: '18rem' }}>
                    <Card.Body>
                    <Card.Title>User Infos</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{user.name}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">{user.username}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">{user.email}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">{user.adress.street}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">{user.phone}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">{user.website}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">{user.company.name}</Card.Subtitle>
                    
                    <Button>more details</Button>
    
                    </Card.Body>
                    </Card>
                </div>
}
            </div>
    )
}
export default UserCard