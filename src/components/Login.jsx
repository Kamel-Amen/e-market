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

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      toast.success('You are logged in successfully !');
      navigate('/home', { state: { email: email, password: password } });
    } else if (!email) {
      toast.error('Please fill your email !');
      setEmailError(true);
      setPasswordError(false);
      return;
    } else if (!password) {
      toast.error('Please enter your password !');
      setPasswordError(true);
      setEmailError(false);
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
              name='email'
              type='email'
              id='email'
              className={
                'mb-4 rounded-3 py-1 px-3' +
                (emailError
                  ? ' border border-danger shake-input'
                  : ' border border-secondary')
              }
              onChange={(e) => setEmail(e.target.value)}
              placeholder='example@email.com'
              required
            />
          </div>

          <div className='input-group d-flex flex-column'>
            <label htmlFor='password' className='mb-1'>
              Password <span className='text-danger'>*</span>
            </label>
            <input
              type='password'
              name='password'
              id='password'
              className={
                'mb-5 rounded-3 py-1 px-3' +
                (passwordError
                  ? ' border border-danger shake-input'
                  : ' border border-secondary')
              }
              onChange={(e) => setPassword(e.target.value)}
              placeholder='******'
              required
            />
          </div>

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
