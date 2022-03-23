import {Navbar, Nav, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavUser=()=>{
    return(
        <div>
            <Navbar bg="dark" variant="dark">
              <Container>
               <Navbar.Brand href="#home">List of Users</Navbar.Brand>
                 <Nav className="me-auto">
                    <Link to='/'><Nav.Link href="#home">Home</Nav.Link></Link>
                    <Link to='/users'> <Nav.Link href="#features">Users Infos</Nav.Link></Link>
      
                 </Nav>
              </Container>
            </Navbar>
        </div>
    )
}
export default NavUser