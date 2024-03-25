/* eslint-disable react-hooks/exhaustive-deps */
import './Style.css';
import { Route, Routes } from 'react-router-dom';
import Options from './components/Options';
import Home from './components/Home';
import Cart from './components/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { calculateTotal } from './features/cart/CartSlice';

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  // useEffect(() => {
  //   dispatch(getProducts());
  // }, []);

  // if (isLoading) {
  //   return (
  //     <div className='loading'>
  //       <h1>Loading...</h1>
  //     </div>
  //   );
  // }

  return (
    <Routes>
      <Route path='/' element={<Options />} />
      <Route path='/e-market' element={<Options />} />
      <Route path='/home' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
  );
}

export default App;
