import {Navbar, Nav, Container} from 'react-bootstrap'

const NavUser=()=>{
    return(
        <div>
            <Navbar bg="dark" variant="dark">
              <Container>
               <Navbar.Brand href="#home">List of Users</Navbar.Brand>
                 <Nav className="me-auto">
                    <link to='/'><Nav.Link href="#home">Home</Nav.Link></link>
                    <link to='/users/'> <Nav.Link href="#features">User Infos</Nav.Link></link>
      
                 </Nav>
              </Container>
            </Navbar>
        </div>
    )
}
export default NavUser