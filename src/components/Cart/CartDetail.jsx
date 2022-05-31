import { useCartContext } from "../../context/CartContext"
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Button, Table } from "react-bootstrap"

const CartDetail = ({cart}) => {

    const { increaseQuantity, decreaseQuantity, totalAmountCart, removeItem } = useCartContext()

  return (
    <Container>
        <Table responsive>
            <thead>
              <tr>
                <th>Artist</th>
                <th>Album</th>
                <th>Items</th>
                <th>Precio</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            {
                    cart.map((item) => 
                      <tr key={item.id}>
                        <td>{item.artist}</td>
                        <td>{item.album}</td>
                        <td>{item.amount}</td>
                        <td>$ {item.price}</td>
                        <td>$ {item.price * item.amount}</td>
                        <td>
                          <Button className='w-25' style={{marginLeft:'2px', backgroundColor:'red'}} onClick={() => decreaseQuantity(item)}>-</Button> 
                          <Button className='w-25' style={{marginLeft:'2px', backgroundColor:'green'}} onClick={() => increaseQuantity(item)}>+</Button>
                        </td>
                      </tr>
                  )
                  }
                      <tr style={{fontWeight:'700'}}>
                        <td></td>
                        <td >Total</td>
                        <td></td>
                        <td></td>
                        <td>$ {totalAmountCart}</td>
                        <td><Button onClick={() => removeItem('')}>Vaciar Carro</Button></td>
                      </tr>
              </tbody>
            </Table>
              <Container style={{marginTop:'50px'}}>
                <LinkContainer to='/checkout'><Button>Terminar Compra</Button></LinkContainer>
              </Container> 
    </Container>
  )
}
export default CartDetail