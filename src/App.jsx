/* eslint-disable react-hooks/exhaustive-deps */
import './Style.css';
import Options from './components/Options';
import Home from './components/Home';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { calculateTotal, getProducts } from './features/cart/CartSlice';

function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
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
      <Route path='/' element={<Options />} />
      <Route path='/e-market' element={<Options />} />
      <Route path='/home' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/checkout' element={<Checkout />} />
    </Routes>
  );
}

export default App;
