//import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const { cartItems, total } = useSelector((store) => store.cart);

  const items = cartItems.map((item) => {
    return (
      <li
        className='list-group-item d-flex justify-content-between lh-sm'
        key={item.id}
      >
        <div>
          <h6 className='my-0'>{item.title}</h6>
        </div>
        <span className='text-body-secondary'>${item.price}</span>
      </li>
    );
  });

  return (
    <>
      <Header />
      <div className='container checkout'>
        <main>
          <div className='py-5 text-center'>
            <h2 className='checkout-header text-primary fw-bold'>
              Checkout form
              <FontAwesomeIcon icon={faCreditCard} className='ms-3' />
            </h2>
          </div>

          <div className='row g-5'>
            <div className='col-md-5 col-lg-4 order-md-last'>
              <h4 className='d-flex justify-content-between align-items-center mb-3'>
                <span className='text-primary'>Your cart</span>
                <span className='badge bg-primary rounded-pill'>
                  {cartItems.length}
                </span>
              </h4>
              <ul className='list-group mb-3'>
                {items}
                <li className='list-group-item d-flex justify-content-between'>
                  <span>Total (USD)</span>
                  <strong>${total}</strong>
                </li>
              </ul>
            </div>
            <div className='col-md-7 col-lg-8'>
              <h4 className='mb-3'>Billing address</h4>
              <form className='needs-validation' noValidate>
                <div className='row g-3'>
                  <div className='col-sm-6'>
                    <label htmlFor='firstName' className='form-label'>
                      First name
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='firstName'
                      placeholder=''
                      required
                    />
                    <div className='invalid-feedback'>
                      Valid first name is required.
                    </div>
                  </div>

                  <div className='col-sm-6'>
                    <label htmlFor='lastName' className='form-label'>
                      Last name
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='lastName'
                      placeholder=''
                      required
                    />
                    <div className='invalid-feedback'>
                      Valid last name is required.
                    </div>
                  </div>

                  <div className='col-12'>
                    <label htmlFor='username' className='form-label'>
                      Username
                    </label>
                    <div className='input-group has-validation'>
                      <span className='input-group-text'>@</span>
                      <input
                        type='text'
                        className='form-control'
                        id='username'
                        placeholder='Username'
                        required
                      />
                      <div className='invalid-feedback'>
                        Your username is required.
                      </div>
                    </div>
                  </div>

                  <div className='col-12'>
                    <label htmlFor='email' className='form-label'>
                      Email{' '}
                      <span className='text-body-secondary'>(Optional)</span>
                    </label>
                    <input
                      type='email'
                      className='form-control'
                      id='email'
                      placeholder='you@example.com'
                    />
                    <div className='invalid-feedback'>
                      Please enter a valid email address htmlFor shipping
                      updates.
                    </div>
                  </div>

                  <div className='col-12'>
                    <label htmlFor='address' className='form-label'>
                      Address
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='address'
                      placeholder='1234 Main St'
                      required
                    />
                    <div className='invalid-feedback'>
                      Please enter your shipping address.
                    </div>
                  </div>

                  <div className='col-12'>
                    <label htmlFor='address2' className='form-label'>
                      Address 2{' '}
                      <span className='text-body-secondary'>(Optional)</span>
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='address2'
                      placeholder='Apartment or suite'
                    />
                  </div>

                  <div className='col-md-5'>
                    <label htmlFor='country' className='form-label'>
                      Country
                    </label>
                    <select className='form-select' id='country' required>
                      <option>Choose...</option>
                      <option>Egypt</option>
                    </select>
                    <div className='invalid-feedback'>
                      Please select a valid country.
                    </div>
                  </div>

                  <div className='col-md-4'>
                    <label htmlFor='state' className='form-label'>
                      State
                    </label>
                    <select className='form-select' id='state' required>
                      <option>Choose...</option>
                      <option>Cairo</option>
                    </select>
                    <div className='invalid-feedback'>
                      Please provide a valid state.
                    </div>
                  </div>

                  <div className='col-md-3'>
                    <label htmlFor='zip' className='form-label'>
                      Zip
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='zip'
                      placeholder=''
                      required
                    />
                    <div className='invalid-feedback'>Zip code required.</div>
                  </div>
                </div>

                <hr className='my-4' />

                <div className='form-check'>
                  <input
                    type='checkbox'
                    className='form-check-input'
                    id='same-address'
                  />
                  <label className='form-check-label' htmlFor='same-address'>
                    Shipping address is the same as my billing address
                  </label>
                </div>

                <div className='form-check'>
                  <input
                    type='checkbox'
                    className='form-check-input'
                    id='save-info'
                  />
                  <label className='form-check-label' htmlFor='save-info'>
                    Save this information htmlFor next time
                  </label>
                </div>

                <hr className='my-4' />

                <h4 className='mb-3'>Payment</h4>

                <div className='my-3'>
                  <div className='form-check'>
                    <input
                      id='credit'
                      name='paymentMethod'
                      type='radio'
                      className='form-check-input'
                      required
                    />
                    <label className='form-check-label' htmlFor='credit'>
                      Credit card
                    </label>
                  </div>
                  <div className='form-check'>
                    <input
                      id='debit'
                      name='paymentMethod'
                      type='radio'
                      className='form-check-input'
                      required
                    />
                    <label className='form-check-label' htmlFor='debit'>
                      Debit card
                    </label>
                  </div>
                  <div className='form-check'>
                    <input
                      id='paypal'
                      name='paymentMethod'
                      type='radio'
                      className='form-check-input'
                      required
                    />
                    <label className='form-check-label' htmlFor='paypal'>
                      PayPal
                    </label>
                  </div>
                </div>

                <div className='row gy-3'>
                  <div className='col-md-6'>
                    <label htmlFor='cc-name' className='form-label'>
                      Name on card
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='cc-name'
                      placeholder=''
                      required
                    />
                    <small className='text-body-secondary'>
                      Full name as displayed on card
                    </small>
                    <div className='invalid-feedback'>
                      Name on card is required
                    </div>
                  </div>

                  <div className='col-md-6'>
                    <label htmlFor='cc-number' className='form-label'>
                      Credit card number
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='cc-number'
                      placeholder=''
                      required
                    />
                    <div className='invalid-feedback'>
                      Credit card number is required
                    </div>
                  </div>

                  <div className='col-md-3'>
                    <label htmlFor='cc-expiration' className='form-label'>
                      Expiration
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='cc-expiration'
                      placeholder=''
                      required
                    />
                    <div className='invalid-feedback'>
                      Expiration date required
                    </div>
                  </div>

                  <div className='col-md-3'>
                    <label htmlFor='cc-cvv' className='form-label'>
                      CVV
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='cc-cvv'
                      placeholder=''
                      required
                    />
                    <div className='invalid-feedback'>
                      Security code required
                    </div>
                  </div>
                </div>

                <hr className='my-4' />

                <NavLink
                  to='/options'
                  className='w-100 btn btn-primary btn-lg'
                  type='submit'
                >
                  Continue to checkout
                </NavLink>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Checkout;
