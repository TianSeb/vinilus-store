import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping  } from '@fortawesome/free-solid-svg-icons';
import './styles/CartWidget.css'


const CartWidget = ({totalItems}) => {
  return (
    <div className='cart-widget'>
        <FontAwesomeIcon icon={faCartShopping} size="3x" color="silver"/>
        {totalItems > 0 && <div className="cart_count">{totalItems}</div>}   
    </div>

  )
}
export default CartWidget