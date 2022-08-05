import React from 'react';
import './Checkout.css';
import '../Context/Navbar.css';

const Checkout = (props) => {
  return <React.Fragment>
    <div className='checkout'>
      <h1 className="heading">Chechout</h1>
      <h3 className='h2Tag'>Pay ₹{props.TA || '0'} for {props.TI || '0'} item(s)</h3>
    </div>
  </React.Fragment>
}

export default Checkout;