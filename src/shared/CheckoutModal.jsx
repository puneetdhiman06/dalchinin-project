import React from 'react'
import Checkout from '../pages/Checkout'
import './CheckoutModal.css';

const CheckoutModal = (props) => {
  return (
    <div className='modalSize'>
        <Checkout TA={props.totalAmount} TI={props.totalItem}/>
        <div className='buttonShape'>
            <a href="/checkout"><button className="button-style2"onClick={props.onClose}>Go Back to the page</button></a>
        </div>
    </div>
  )
}

export default CheckoutModal