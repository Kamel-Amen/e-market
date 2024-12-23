/* eslint-disable no-unused-vars */
//import React from 'react';
import Welcome from './Welcome';
import Header from './Header';
import Products from './Products';
import Arrivals from './Arrivals';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const { state: { email, password } = {} } = useLocation();

  return (
    <>
      <Header userEmail={email} />
      <Welcome />
      <Products />
      <Arrivals />
      <Footer />
    </>
  );
};

export default Home;
