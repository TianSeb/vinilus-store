import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import ItemListContainer from './components/ItemList/ItemListContainer';
import NavBar from './components/NavBar';


function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/category/:year' element={<ItemListContainer/>}/>
      <Route path='/vinilos/:vinylId' element={<ItemDetailContainer/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
