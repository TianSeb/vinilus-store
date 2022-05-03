import { LinkContainer } from 'react-router-bootstrap'
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import CartWidget from "./CartWidget";


const NavBar = () => {
const brand = "https://imagizer.imageshack.com/img924/1759/ALh05r.jpg"

return (
<Navbar style={{backgroundColor:'#2b2929', fontSize: '1.5rem'}} collapseOnSelect variant="dark">
  <Container>
  <Navbar.Brand href="/"><LinkContainer to='/'><img src={brand} alt="Vinyl" /></LinkContainer></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mx-auto">
      <Nav.Link href="/" style={{paddingRight:'2rem'}}>Inicio</Nav.Link>
      <Nav.Link href="/about" style={{paddingRight:'2rem'}}>About</Nav.Link>
      <NavDropdown title="Vinilos" id="collasible-nav-dropdown" style={{paddingRight:'2rem'}}> 
        <NavDropdown.Item><LinkContainer to={`/category/1960`}><span>60's</span></LinkContainer></NavDropdown.Item>
        <NavDropdown.Item><LinkContainer to={`/category/1970`}><span>70's</span></LinkContainer></NavDropdown.Item>
        <NavDropdown.Item><LinkContainer to={`/category/1980`}><span>80's</span></LinkContainer></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/">Todos</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link eventKey={2} href="#cart">
        <CartWidget />
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default NavBar