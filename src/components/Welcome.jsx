import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import homeCover from '/public/assets/images/home/img6.jpg';
import { faHandPeace } from '@fortawesome/free-solid-svg-icons';

const Welcome = () => {
  return (
    <section
      className='welcome position-relative w-100 overflow-hidden'
      id='welcome'
    >
      <img
        loading='lazy'
        src={homeCover}
        alt='cover'
        className='w-100 h-100 welcome-cover'
        data-aos='zoom-out'
      />
      <div className='welcome-content position-absolute top-50 start-50 text-center'>
        <h1 data-aos='fade-left' data-aos-duration='1250'>
          WELCOME TO E-MARKET <FontAwesomeIcon icon={faHandPeace} />
        </h1>
        <h6
          className='w-75 mx-auto my-3'
          data-aos='fade-left'
          data-aos-duration='1500'
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          optio, repellendus voluptatum eaque itaque molestiae dolores tenetur
          totam rem voluptates?
        </h6>
        <div className='welcome-buttons text-center mt-3'>
          <a
            href='#'
            className='btn btn-lg btn-outline-dark me-4'
            data-aos='fade-down'
            data-aos-duration='1250'
          >
            SHOP NOW
          </a>
          <a
            href='#'
            className='btn btn-lg btn-outline-dark'
            data-aos='fade-down'
            data-aos-duration='1500'
          >
            NEW ARRIVALS
          </a>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
