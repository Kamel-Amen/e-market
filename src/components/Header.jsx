/* eslint-disable react/prop-types */
//import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '/public/logo.gif';
import { faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const state = useSelector((store) => store.cart);

  return (
    // <nav className='navbar navbar-expand-lg bg-body-tertiary shadow fixed-top'>
    // </nav>
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <div className='container-fluid'>
        <NavLink className='navbar-brand' to='/home'>
          <img
            src={logo}
            alt='logo'
            width='40'
            height='40'
            className='rounded'
            loading='lazy'
          />{' '}
          E-MARKET
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarText'
          aria-controls='navbarText'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarText'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <NavLink
                className='nav-link active'
                aria-current='page'
                to='/home'
              >
                PRODUCTS
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className='nav-link active'
                aria-current='page'
                to='/options'
              >
                OPTIONS
              </NavLink>
            </li>
          </ul>
          <div className='buttons'>
            <div>
              <NavLink to='/cart' className='btn position-relative me-2'>
                <FontAwesomeIcon className='icon' icon={faCartShopping} />
                <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
                  {state.cartItems.length}
                </span>
              </NavLink>
              <a href='#' className='btn'>
                <FontAwesomeIcon className='icon' icon={faSearch} />
              </a>
              <NavLink to='/' className='btn btn-sm btn-danger'>
                Logout
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
