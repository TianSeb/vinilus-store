import { LinkContainer } from 'react-router-bootstrap'
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import CartWidget from "../../components/CartWidget";
import './NavBar.css'


const NavBar = () => {
const brand = "https://imagizer.imageshack.com/img924/1759/ALh05r.jpg"
const categories = [
  { id:'12312', adress:'/', text:'Inicio', subCategories:[]},
  { id:'12313', adress:'/about', text:'Nosotros', subCategories:[]},
  { id:'12314', adress:'/categories', text:'Vinilos', subCategories:[
    { id:'12314-1', adress:'/categories/1960', text:'60s' },
    { id:'12314-2', adress:'/categories/1970', text:'70s' },
    { id:'12314-3', adress:'/categories/1980', text:'80s' },
  ]},
]
return (
<Navbar className='navbar-container' expand='lg' collapseOnSelect variant="dark">
  <Container>
  <Navbar.Brand className='nav-brand'><LinkContainer to={'/'}><img src={brand} alt="Vinyl" /></LinkContainer></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mx-auto">
      {
        categories.map((cat) => { 
          if (cat.subCategories.length === 0) {
            return (<Nav.Link className='nav-link' key={cat.id} ><LinkContainer className='nav-link' to={cat.adress}><span>{cat.text}</span></LinkContainer></Nav.Link>)
          }
          else { 
            return(
            <NavDropdown title="Vinilos" id="collasible-nav-dropdown"  className='nav-link' key={cat.id}>
              {cat.subCategories.map((subcat) => {
                return (
                  <NavDropdown.Item className='nav-dropdown' key={subcat.id} to={subcat.adress} as={LinkContainer}>
                    <span>{subcat.text}</span>
                    </NavDropdown.Item>
                )
              })}
              <NavDropdown.Divider />
              <NavDropdown.Item><LinkContainer to={`/`}><span>Coleccion</span></LinkContainer></NavDropdown.Item>
            </NavDropdown>  
            )
          }
        })
      }
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