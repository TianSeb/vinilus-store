import { useState, createContext } from 'react'

export const CartContext = createContext({})

export const CartProvider = ({defaultValue = [], children}) => {
    const [cart, setCart] = useState(defaultValue)

    const addItem = (item, amount) => {
      
      console.log(amount)
        if (isInCart(item.id)) {
          const updatedCart = cart.map((cartItem) => {
            if (cartItem.id === item.id) {
              return { ...cartItem, amount: cartItem.amount + amount };
            } else return cartItem;
          })
          setCart(updatedCart)
          }
          else setCart((prev) => [...prev, { ...item, amount }])
    }
  
    const removeItem = (id) => setCart(cart.filter(item => item.id !== id))

    const isInCart = (id) => cart.find( item => item.id === id)

    const clearCart = () => setCart([])

    return (
        <CartContext.Provider value={{ cart, setCart, addItem, removeItem, isInCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}