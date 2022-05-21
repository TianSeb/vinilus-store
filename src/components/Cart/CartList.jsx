import { useCartContext, CartContext } from "../../context/CartContext"
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Button } from "react-bootstrap"
import  CartDetail from './CartDetail'

const CartList = () => {

  const { cart } = useCartContext()
  
  return (
    <Container style={{marginTop:'50px', textAlign: 'center'}}>
        {
          cart.length > 0 ? 
            <CartDetail cart={cart}/>
            : 
          <Container >
              <h3>Carro Vacío</h3>
              <LinkContainer to='/'><Button>Seguir comprando</Button></LinkContainer>
          </Container>    
          }
    </Container>
  )
}
export default CartList