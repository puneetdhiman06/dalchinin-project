import React from 'react';
import './Checkout.css';
import '../Context/Navbar.css';

const Checkout = (props) => {
  return <React.Fragment>
    <div className='checkout'>
      <span><a className='linkA' href="/">Back</a></span>
      <h1 className="heading">Chechout</h1>
    </div>
   <div className='listForCheckout'>
    </div>

    <div className='footer'>
        <div className="container">
            <p>
            <button className='space'>Select Payment</button>
            <button className='space'><a className='linkA' href="/">Back To Home Page</a></button> 
            </p>
        </div>
    </div>
  </React.Fragment>
}

export default Checkout;