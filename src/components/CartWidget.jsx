import './styles/CartWidget.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRecordVinyl  } from '@fortawesome/free-solid-svg-icons';


const CartWidget = () => {
  return (
    <div className='cart-widget'>
        <FontAwesomeIcon icon={faRecordVinyl} size="3x" color="silver"/>
    </div>
  )
}
export default CartWidget