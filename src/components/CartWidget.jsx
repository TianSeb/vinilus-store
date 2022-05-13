import { LinkContainer } from 'react-router-bootstrap';
import './styles/CartWidget.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping  } from '@fortawesome/free-solid-svg-icons';


const CartWidget = () => {
  return (
    <LinkContainer className='cart-widget' to={'/cart'}>
        <FontAwesomeIcon icon={faCartShopping} size="3x" color="silver"/>
        
    </LinkContainer>
  )
}
export default CartWidget