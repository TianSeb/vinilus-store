import { useCartContext } from "../../context/CartContext"
import { useState } from 'react'
import { Container } from  'react-bootstrap'
import { addDoc, collection, getFirestore } from "firebase/firestore"
import CheckoutForm from "./CheckoutForm"

const Checkout = () => {
  const { cart, removeItem, totalAmountCart } = useCartContext()

  const [show,setShow] = useState(true)
  const [error,setError] = useState('')
  const [orderId, setOrderId] = useState()
  const [form,setForm] = useState({name:'',email:'',emailConfirmation:'tbd',phone:''})

  const db = getFirestore()
 
  const order = {
    buyer: Object.keys(form)
            .filter((key) => !key.includes('emailConfirmation'))
            .reduce((cur, key) => { return Object.assign(cur, { [key]: form[key] })}, {}),
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

  const orderPlaced = async (e) => {
    e.preventDefault()
    const validation = formValidation()

    if (validation) {
      setError('Chequea que los campos sean válidos')
      return
    }
    else {
      setError('')
      const orderSaved = await saveOrder(order)
      setShow(false)
      removeItem('')
    }
  }
  
  const formValidation = () => {
    const isEmptyCart = cart.length === 0
    const isEmptyFormName = form.name.length < 4
    const isEmptyTelephone = form.phone.length < 8
    const emailsAreDifferent = form.email !== form.emailConfirmation
    
    return isEmptyCart || isEmptyFormName || emailsAreDifferent || isEmptyTelephone ? true : false
  }

  return (
      <Container className='d-flex align-items-center justify-content-center mt-5' style={{ minHeight: '60vh'}}>
          {
            (show) ? 
            <CheckoutForm setForm={setForm} form={form} orderPlaced={orderPlaced} error={error}/>
            : 
            <div className='w-100 text-center mt-3'>
                <h4>Compra Finalizada. El número de su orden es: {orderId} </h4>
            </div>
        }
      </Container>
      )
}

export default Checkout