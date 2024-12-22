import coverLeft from '/public/assets/images/options/img4.jpg';
import coverRight from '/public/assets/images/options/img3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faShirt } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Options = () => {
  return (
    <div className='options overflow-hidden text-center w-100 ' id='options'>
      <header className='options-header text-white fs-1 mt-2 position-absolute w-100'>
        E-MA <span className='text-dark'>RKET</span>
      </header>
      <div className='content'>
        <section className='left options-section m-0 p-0 d-inline-flex justify-content-center align-items-center'>
          <NavLink
            className='options-btn position-absolute btn btn-lg btn-light'
            to='/home'
            id='electronics'
          >
            <FontAwesomeIcon icon={faLaptop} className='me-3 FontAwesomeIcon' />
            ELECTRONICS
          </NavLink>
          <img
            src={coverLeft}
            alt='cover'
            className='options-img w-100 h-100'
            loading='lazy'
          />
        </section>
        <section className='right options-section m-0 p-0 d-inline-flex justify-content-center align-items-center'>
          <NavLink
            className='options-btn position-absolute btn btn-lg btn-dark'
            to='/home'
          >
            <FontAwesomeIcon icon={faShirt} className='me-3 FontAwesomeIcon' />
            CLOTHES
          </NavLink>
          <img
            src={coverRight}
            alt='cover'
            className='options-img w-100 h-100'
            loading='lazy'
          />
        </section>
      </div>
    </div>
  );
};

export default Options;
