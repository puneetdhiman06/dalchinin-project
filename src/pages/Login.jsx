import React from 'react';
import './Checkout.css';
import '../Context/Navbar.css';
import './Login.css'
import '../shared/Button.css'
import { Card } from 'react-bootstrap';

const Checkout = () => {
  return <div className='main'>
    <div className='checkout'>
      <h1 className="heading">Login</h1>
    </div>

   <div className='formBox'>
    <Card>
          <input className="inputTag"placeholder='Phone Number'/>
          <button className='button-style button-style33'>Submit</button>
          <a href="/"><button className='button-style2'>I will do it later</button></a> 
    </Card>
  
   </div>

    <div className='footer'>
        <div className="container">
            <p>
            <button className='space'>Select Payment</button>
            <button className='space'><a className='linkA' href="/">Back To Home Page</a></button> 
            </p>
        </div>
    </div>
  </div>
}

export default Checkout;