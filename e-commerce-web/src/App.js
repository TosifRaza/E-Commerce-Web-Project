import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignin from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import { BrowserRouter,Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/Man' element={<ShopCategory  category="Man" />  } />
        <Route path='/Woman' element={<ShopCategory category="Man" />} />
        <Route path='/Kids' element={<ShopCategory category="Man" />} />
        <Route path='/product' element={<Product/>}>
          <Route path=':product_id' element={<product/>}/>
        </Route>
        <Route path='Login' element={<LoginSignin/>} />
        <Route path='Cart' element={<Cart/>} />
        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
