import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import mens_banner from './Components/Assets/banner_mens.png'
import womens_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'
import LatestCollections from './Pages/LatestCollections';


function App() {
  return (
    <BrowserRouter>
             <Navbar/>
             <Routes>
              <Route path='/' element={<Shop/>}/>
              <Route path='/mens' element={<ShopCategory banner={mens_banner} category="men"/>}/>
              <Route path='/womens' element={<ShopCategory banner={womens_banner} category="women"/>}/>
              <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid"/>}/>
             {/* <Route path="/product" element={<Product />} /> */}
             <Route path="/product/:productId" element={<Product />} />
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/login' element={<LoginSignup/>}/>
              <Route path='/latestcollections' element={<LatestCollections/>}/>
              </Routes>
             <Footer/>
    </BrowserRouter>
  );
}

export default App;
