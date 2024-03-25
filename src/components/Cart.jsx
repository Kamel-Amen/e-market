import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import CartItem from './CartItem';
import { clearCart } from '../features/cart/CartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems, total } = useSelector((store) => store.cart);

  if (cartItems.length <= 0) {
    return (
      <>
        <Header />
        <section className='cart text-center my-0 mx-auto'>
          <header>
            <h2 className='text-uppercase'>
              your cart{' '}
              <FontAwesomeIcon icon={faCartArrowDown} className='text-danger' />
            </h2>
            <h4 className='empty-cart'>is currently empty !!</h4>
          </header>
        </section>
      </>
    );
  }

  return (
    <>
      <Header />
      <section className='cart text-center my-0 mx-auto'>
        <header>
          <h2 className='text-uppercase'>
            your cart
            <FontAwesomeIcon
              icon={faCartArrowDown}
              className='text-primary ms-2'
            />
          </h2>
        </header>
        <div>
          {cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
        </div>
        <footer>
          <hr className='hr' />
          <div className='cart-total'>
            <h4 className='text-capitalize d-flex justify-content-between'>
              total <span>${total}</span>
            </h4>
          </div>
          <button
            className='btn clear-btn text-uppercase'
            onClick={() => dispatch(clearCart())}
          >
            clear cart
          </button>
        </footer>
      </section>
    </>
  );
};

export default Cart;
