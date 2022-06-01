import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from '../pages/About'
import CartList from '../components/Cart/CartList'
import Checkout from '../components/Cart/Checkout'
import ItemDetailContainer from '../components/ItemDetail/ItemDetailContainer'
import ItemListContainer from '../components/ItemList/ItemListContainer'
import NavBar from '../layout/navbar/NavBar'
import NotFound404 from '../pages/NotFound404'

const AppRouter = () => {
  return (
    <BrowserRouter>
          <NavBar/>
            <Routes>
            <Route exact path='/' element={<ItemListContainer/>} />
              <Route path='/vinilos/:vinylId' element={<ItemDetailContainer/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/categories/:catId' element={<ItemListContainer/>}/>
              <Route path='/cart' element={<CartList/>}/>
              <Route path="/checkout" element={<Checkout/>}/>
              <Route path='*' element={<NotFound404/>}/>
            </Routes>
      </BrowserRouter>
  )
}

export default AppRouter