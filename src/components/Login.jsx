// import React from 'react'
import Logo from '../../public/logo.gif';

const Login = () => {
  return (
    <div className='login'>
      <nav className='py-2 ps-5 overflow-hidden'>
        <header className='d-flex align-items-center gap-4 ms-3'>
          <img src={Logo} alt='Logo' className='rounded' loading='lazy' />{' '}
          <span className='text-white fs-5 pt-1 ms-2'>E-MARKET</span>
        </header>
      </nav>

      <div className='d-flex justify-content-center align-items-center login-form'>
        <form action='/options'>
          <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
