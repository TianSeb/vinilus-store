import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from './components/Layout'
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import ItemListContainer from './components/ItemList/ItemListContainer';
import NavBar from './components/NavBar';
import About from './components/About';

function App() {
  return (
    <>
      <BrowserRouter>
          <NavBar/>
          <Layout>
            <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/categories/:catId' element={<ItemListContainer/>}/>
              <Route path='/vinilos/:vinylId' element={<ItemDetailContainer/>}/>
            </Routes>
          </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
