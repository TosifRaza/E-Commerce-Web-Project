import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignin from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer/Footer';
import men_banner from "./Components/Assets/Frontend_Assets/banner_mens.png"
import woman_banner from "./Components/Assets/Frontend_Assets/banner_women.png"
import kid_banner from "./Components/Assets/Frontend_Assets/banner_kids.png"
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>  
          <Routes>
            <Route path='/' element={<Shop/>} />
            <Route path='/Man' element={<ShopCategory banner={men_banner} category="man" />  } />
            <Route path='/Woman' element={<ShopCategory banner={woman_banner} category="women" />} />
            <Route path='/Kids' element={<ShopCategory  banner={kid_banner} category="kid" />} />
            <Route path='/product' element={<Product/>}>
              <Route path=':product_id' element={<product/>}/>
            </Route>
            <Route path='Login' element={<LoginSignin/>} />
            <Route path='Cart' element={<Cart/>} />
          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
