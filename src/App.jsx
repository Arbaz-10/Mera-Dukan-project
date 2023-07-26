import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import OurStore from './pages/OurStore'
import Blog from './pages/Blog'
import CompareProduct from './pages/CompareProduct'
import Wishlist from './pages/Wishlist'
import Login from './pages/Login'
import Forgetpass from './pages/Forgetpass'
import SignUp from './pages/SignUp'
import ResetPassword from './pages/ResetPassword'
import SingleBlog from './pages/SingleBlog'
import PrivacyPolicy from './pages/PrivacyPolicy'
import RefundPolicy from './pages/RefundPolicy'
import ShippingPolicy from './pages/ShippingPolicy'
import TermsAndCondition from './pages/TermsAndCondition'
import SingleProduct from './pages/SingleProduct'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='product' element={<OurStore/>}/>
            <Route path='product/:id' element={<SingleProduct/>}/>
            <Route path='blogs' element={<Blog/>}/>
            <Route path='blog/:id' element={<SingleBlog/>}/>
            <Route path='cart' element={<Cart/>}/>
            <Route path='checkout' element={<Checkout/>}/>
            <Route path='compare-products' element={<CompareProduct/>}/>
            <Route path='Wishlist' element={<Wishlist/>}/>
            <Route path='Login' element={<Login/>}/>
            <Route path='forget-password' element={<Forgetpass/>}/>
            <Route path='signup' element={<SignUp/>} />
            <Route path='reset-password' element={<ResetPassword/>} />
            <Route path='privacy-policy' element={<PrivacyPolicy/>} />
            <Route path='refund-policy' element={<RefundPolicy/>} />
            <Route path='shipping-policy' element={<ShippingPolicy/>} />
            <Route path='termandconditions' element={<TermsAndCondition/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
