import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetail/ItemDetailContainer';
import ItemListContainer from '../components/ItemList/ItemListContainer';
import NavBar from '../layout/navbar/NavBar';
import About from '../pages/About';
import NotFound404 from '../pages/NotFound404';
import Home from '../pages/Home'
import ItemLayout from '../pages/ItemLayout'

const AppRouter = () => {
  return (
    <BrowserRouter>
          <NavBar/>
            <Routes>
              <Route path='/' element={<Home props={<ItemListContainer/>}/>} />
              <Route path='/vinilus-store' element={<Home props={<ItemListContainer/>}/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/categories/:catId' element={<Home props={<ItemListContainer/>}/>}/>
              <Route path='/vinilos/:vinylId' element={<ItemLayout props={<ItemDetailContainer/>}/>}/>
              <Route path='*' element={<NotFound404/>}/>
            </Routes>
      </BrowserRouter>
  )
}

export default AppRouter