import { useCartContext } from "../../context/CartContext"
import { useState } from 'react'
import { Button, Form, Container } from  'react-bootstrap'
import { addDoc, collection, getFirestore } from "firebase/firestore"

const Checkout = () => {
  const { cart, removeItem, totalAmountCart } = useCartContext()

  const [show,setShow] = useState(true)
  const [orderId, setOrderId] = useState()
  const [form,setForm] = useState({name:'',email:'',phone:0})

  const db = getFirestore()
 

  const order = {
    buyer: form,
    items: cart.map(item => { return {
                  artist: item.artist,
                  album: item.album,
                  amount: item.amount
                }}),
    total: totalAmountCart
  }

  const saveOrder = async (order) => {
    const response = await addDoc(collection(db,'orders'),order)
    setOrderId(response.id);
  }

  const orderPlaced = (e) => {
    e.preventDefault()
    
    saveOrder(order)
    setShow(false)
    removeItem('')
  }

  return (
      <Container style={{marginTop:'35px'}}>
          {
            (show) ? 
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail" >
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="@email" onChange={(e)=> setForm({...form, email: e.target.value})} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formName" >
            <Form.Label>Nombre y Apellido</Form.Label>
            <Form.Control type="text" placeholder="Nombre y Apellido" onChange={(e)=> setForm({...form, name: e.target.value})} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formTelephone" >
            <Form.Label>Ingresá Teléfono</Form.Label>
            <Form.Control type="number" placeholder="Teléfono" onChange={(e)=> setForm({...form, phone: e.target.value})} required />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={orderPlaced}>
            Submit
          </Button>
        </Form>
          : 
          <Container style={{marginTop:'100px', textAlign:'center'}}>
              <h4>Compra Finalizada. El número de su orden es: {orderId} </h4>
          </Container>
        }
      </Container>
      )
}

export default Checkout