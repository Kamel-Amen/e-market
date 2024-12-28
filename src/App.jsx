/* eslint-disable react-hooks/exhaustive-deps */
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { calculateTotal, getProducts } from './features/cart/CartSlice';
import 'aos/dist/aos.css';
import './Style.css';
import AOS from 'aos';
import Options from './components/Options';
import Home from './components/Home';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Login from './components/Login';

function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    AOS.init();
    dispatch(calculateTotal());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (isLoading) {
    return (
      <div className='loader-holder d-flex justify-content-center align-items-center'>
        <div className='loader position-relative d-block'></div>
      </div>
    );
  }

  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/login' element={<Login />} />
      <Route path='/e-market' element={<Login />} />
      <Route path='/options' element={<Options />} />
      <Route path='/home' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/checkout' element={<Checkout />} />
    </Routes>
  );
}

export default App;
