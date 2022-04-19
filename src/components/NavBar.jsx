import "./styles/NavBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import CartWidget from "./CartWidget";

const NavBar = () => {
const brand = "https://imagizer.imageshack.com/img924/1759/ALh05r.jpg"

return (
<div className="header-container">

  <div className="logo-container">
    <img src={brand} alt="Vinyl" />
  </div>

  <div className="menu-button">
    <FontAwesomeIcon icon={faBars} size="4x" color="white" />
    <span>Menu</span>
  </div>

  <nav>
    <ul className="nav-container">
      <li><a href="/">Inicio</a></li>
      <li><a href="/">Vinilos</a></li>
      <li><a href="/">Contacto</a></li>
      <li><a href="/">Nosotros</a></li>
    </ul>
  </nav>

  <CartWidget />

</div>
)
}
export default NavBar