import React from 'react'
import Checkout from '../pages/Checkout'
import './CheckoutModal.css';

const CheckoutModal = (props) => {
  return (
    <div className='modalSize'>
        <Checkout TA={props.totalAmount} TI={props.totalItem}/>
        <div className='buttonShape'>
        <button className="button-style2"onClick={props.onClose}>Go Back to the page</button>
        </div>
    </div>
  )
}

export default CheckoutModal