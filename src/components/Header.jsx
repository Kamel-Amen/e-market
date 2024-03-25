//import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '/public/logo.gif';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';
import { faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const state = useSelector((store) => store.cart);

  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary shadow fixed-top'>
      <div className='container-fluid'>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse flex-grow-0'
          id='navbarSupportedContent'
        >
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <NavLink
                className='nav-link active'
                aria-current='page'
                to='/home'
              >
                <FontAwesomeIcon icon={faProductHunt} className='me-1' />
                PRODUCTS
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink className='navbar-brand' to='/home'>
          <img
            src={logo}
            alt='logo'
            width='40'
            height='40'
            className='rounded'
          />{' '}
          E-MARKET
        </NavLink>
        <div className='buttons'>
          <NavLink to='/cart' className='btn position-relative me-2'>
            <FontAwesomeIcon className='icon' icon={faCartShopping} />
            <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
              {state.cartItems.length}
            </span>
          </NavLink>
          <a href='#' className='btn'>
            <FontAwesomeIcon className='icon' icon={faSearch} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
