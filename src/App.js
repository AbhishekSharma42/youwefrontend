import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from './pages/ContactUs';
import NavBar from './components/Header/NavBar';
import Index from './pages/Index';
import AppContext from './Utils/Context';
import ProductDetailCard from './pages/ProductDetailCard';
import PageNotFound from './pages/PageNotFound';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import CustomDesign from './pages/CustomDesign';
import Galary from './pages/Galary';
import Protective from './Protective';
import Catageries from './pages/Catageries';
import ProductByCategory from './pages/ProductByCategory';
import Login from './pages/Auth/Login';
import SingUp from './pages/Auth/SingUp';


export default function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <NavBar />
        <Routes>

          {/* User can access with out login  */}
          
          <Route path="" element={<Index />} />
          <Route path="contact" element={<ContactUs />} />
          {/* <Route path="LogIn" element={<Login />} /> */}
          <Route path="SingUp" element={<SingUp/>}/>
          <Route path="/product/:str" element={<ProductDetailCard />} />
          <Route path="product-category/:str" element={<ProductByCategory/>} />
          <Route path="catagres" element={<Catageries />} />
          <Route path="catagres/:str" element={<Catageries />} />
          <Route path="cart" element={<Cart />} />
          <Route path='customize' element={<CustomDesign />} />
          <Route path='Galary' element={<Galary />} />
          <Route path="*" element={<PageNotFound />} />

          {/* user can access after Login Login Required */}
          <Route path='My-Order' element={<Protective comp={Galary} />} />
          <Route path='LogIn' element={<Protective comp={Login} />} />

        </Routes>
        <Footer />
      </AppContext>
    </BrowserRouter>
  );
}
