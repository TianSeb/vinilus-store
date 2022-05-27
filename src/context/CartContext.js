import { useState, createContext, useContext } from 'react'

export const CartContext = createContext({})

export const useCartContext = () => useContext(CartContext) 

export const CartProvider = ({defaultValue = [], children}) => {
    const [cart, setCart] = useState(defaultValue)
    
    const addItem = (item) => {

        if (isInCart(item.id)) {
          return  
        } else {
          setCart([...cart, item])
        }
    }
  
    const isInCart = (id) => cart.find( item => item.id === id)

    const removeItem = (item) => {
        if(item){
            const newCart = cart.filter(i => i.id !== item.id)
            setCart(newCart)
        }
        else {
            setCart([])
        }
    } 

    const totalAmountCart = cart.reduce((acc,item) => acc + (item.amount * item.price),0)

    const increaseQuantity = (item) => {
      const newCart = cart.map(i => {
          if ((i.id === item.id) && (i.amount < item.stock)) {
              return { ...i, amount: i.amount + 1 };
          }
          return i;
      });
      setCart(newCart);
     };

    const decreaseQuantity = (item) => {
        if(item.amount === 1) {
            removeItem(item)
        }
        else {
            const newCart = cart.map(i => {
                if ((i.id === item.id) && (i.amount > 1)) {
                    return { ...i, amount: i.amount - 1 };
                }
                return i;
            });
            setCart(newCart);
        }
     };

    return (
        <CartContext.Provider value={{ cart, setCart, addItem, isInCart, totalAmountCart, increaseQuantity, decreaseQuantity, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}