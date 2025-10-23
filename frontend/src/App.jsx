import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Home/Cart/Cart.jsx';
import PlaceOrder from './pages/Home/PlaceOrder/PlaceOrder.jsx';
import Footer from './components/Footer/Footer.jsx';

//import Header from './components/Header/Header';

const App = () => {
  return (
    <>
    <div className='app'>
      <Navbar/>
      {/* <Header/> */}
     
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<PlaceOrder/>} />
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App;
