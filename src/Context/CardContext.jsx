import React,{useContext, useState} from 'react';
import ProductList from '../components/ProductList';
import Modal from '../shared/Modal';

import { CartContext } from '../pages/Homepage';

import './Navbar.css';
import '../shared/Button.css';
import CheckoutModal from '../shared/CheckoutModal';


const CardContext = () => {
  const [showModal,setShowModal]=useState(false);
  const cartModalHandler = ()=>{
    setShowModal(true);
  }
  const modalHandler2 = ()=>{
    setShowModal(false);
  }


  const [showCheckoutModal,setShowCheckoutModal]=useState(false);

    const {item,totalItem,totalAmount} = useContext(CartContext);

  return <React.Fragment>
    <Modal show={showModal} onCancel={modalHandler2} header={"Cart Details"} content={item} totalAmount={totalAmount}totalItem={totalItem}/>
    {showCheckoutModal && <CheckoutModal onClose={()=>setShowCheckoutModal(false)} totalAmount={totalAmount}totalItem={totalItem}/>}
    <div>
    <div className='main-content'>
        {item.map( (currItem)=>{
          return <ProductList key={currItem.id}{...currItem}/>
        })}
    </div>
    <div className='footer'>
        <div className="container">
            <p className='pTag'>
            {!showCheckoutModal &&<button onClick={cartModalHandler} className='space spaceCard'>
                <span>{totalItem} item(s)</span><br/><br/>
                <span>Total : {'₹'+totalAmount}</span>
            </button>}
            <a href='/login'><button className='space'>Login</button></a>
            <button className='space' onClick={()=>{setShowCheckoutModal(true)}}>{showCheckoutModal?'Pay':'Continue'}</button>
            </p>
        </div>
    </div>
</div>
</React.Fragment>
}

export default CardContext