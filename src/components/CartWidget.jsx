import './styles/CartWidget.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping  } from '@fortawesome/free-solid-svg-icons';


const CartWidget = () => {
  return (
    <div className='cart-widget'>
        <FontAwesomeIcon icon={faCartShopping} size="3x" color="silver"/>
    </div>
  )
}
export default CartWidget