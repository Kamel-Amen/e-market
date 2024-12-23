/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Logo from '../../public/logo.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandsClapping,
  faRightToBracket,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ErrorIcon from '../../public/assets/images/gifs/error.gif';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      toast.success('You are logged in successfully !');
      navigate('/options');
    } else if (!email) {
      toast.error('Please fill your email !');
      return;
    } else if (!password) {
      toast.error('Please enter your password !');
      return;
    } else {
      toast.error('There is an error, please try again later !');
    }
  };

  return (
    <div className='login overflow-hidden'>
      <nav className='py-2 ps-5 overflow-hidden'>
        <header
          className='d-flex align-items-center gap-4 ms-3'
          data-aos='fade-right'
          data-aos-duration='2000'
        >
          <img src={Logo} alt='Logo' className='rounded' loading='lazy' />{' '}
          <span className='text-white fs-5 pt-1 ms-2'>E-MARKET</span>
        </header>
      </nav>

      <div className='d-flex justify-content-center align-items-center login-form'>
        <form
          className='bg-white rounded-3 p-4 d-flex justify-content-center flex-column'
          data-aos='zoom-in'
          data-aos-duration='750'
        >
          <h5
            className='text-secondary'
            data-aos='fade-down'
            data-aos-duration='1500'
          >
            Please enter your details
          </h5>
          <h1
            className='fw-bold mb-5 text-primary'
            data-aos='fade-right'
            data-aos-duration='2000'
          >
            Welcome back <FontAwesomeIcon icon={faHandsClapping} />
          </h1>

          <div className='input-group d-flex flex-column'>
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
              data-aos='fade-right'
              data-aos-duration='1500'
            />
          </div>

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
            data-aos='fade-right'
            data-aos-duration='1500'
          />

          <button
            type='submit'
            className='btn btn-primary w-25 mx-auto login-btn'
            onClick={handleFormSubmit}
          >
            Login <FontAwesomeIcon icon={faRightToBracket} className='ms-1' />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
