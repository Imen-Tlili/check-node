import { Link } from "react-router-dom"

const Home =()=>{
    return(
        <div>
            <h2>List of users:</h2>
            <button><Link to='/users'>Click</Link></button>
        </div>
    )
}
export default Home