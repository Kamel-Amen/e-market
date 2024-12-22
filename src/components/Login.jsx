/* eslint-disable no-unused-vars */
// import React from 'react'
import { useState } from 'react';
import Logo from '../../public/logo.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandsClapping,
  faRightToBracket,
} from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='login'>
      <nav className='py-2 ps-5 overflow-hidden'>
        <header className='d-flex align-items-center gap-4 ms-3'>
          <img src={Logo} alt='Logo' className='rounded' loading='lazy' />{' '}
          <span className='text-white fs-5 pt-1 ms-2'>E-MARKET</span>
        </header>
      </nav>

      <div className='d-flex justify-content-center align-items-center login-form'>
        <form
          action='/options'
          className='bg-white rounded-3 p-4 d-flex justify-content-center flex-column'
        >
          <h5 className='text-secondary'>Please enter your details</h5>
          <h1 className='fw-bold mb-5 text-primary'>
            Welcome back <FontAwesomeIcon icon={faHandsClapping} />
          </h1>

          <label htmlFor='email' className='mb-1'>
            Email <span className='text-danger'>*</span>
          </label>
          <input
            type='email'
            name='email'
            id='email'
            className='mb-4 border border-secondary rounded-3 py-1 px-3'
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor='password' className='mb-1'>
            Password <span className='text-danger'>*</span>
          </label>
          <input
            type='password'
            name='password'
            id='password'
            className='mb-5 border border-secondary rounded-3 py-1 px-3'
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type='submit'
            className='btn btn-primary w-25 mx-auto login-btn'
          >
            Login <FontAwesomeIcon icon={faRightToBracket} className='ms-1' />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
