import React,{useContext, useState} from 'react';
import ProductList from '../components/ProductList';
import Modal from '../shared/Modal';
// import LoginModal from '../components/LoginModal';

import { CartContext } from '../pages/Homepage';

import './Navbar.css';
import '../shared/Button.css';


const CardContext = () => {
  const [showModal,setShowModal]=useState(false);
  const cartModalHandler = ()=>{
    setShowModal(true);
  }
  const modalHandler2 = ()=>{
    setShowModal(false);
  }
//   const [showLoginModal,setLoginShowModal]=useState(false);

//   const logintModalHandler = ()=>{
//     setLoginShowModal(true);
//     console.log("show");
//  }
//  const loginModalHandler2 = ()=>{
//   setLoginShowModal(false);
// }

 

    const {item,totalItem,totalAmount} = useContext(CartContext);


  return <React.Fragment>
    {<Modal show={showModal} onCancel={modalHandler2} header={"Cart Details"} content={item} totalAmount={totalAmount}totalItem={totalItem}/>}
    <div>
    <div className='main-content'>
        {item.map( (currItem)=>{
          return <ProductList key={currItem.id}{...currItem}/>
        })}
    </div>
    {/* <LoginModal show={showLoginModal}  onCancel={loginModalHandler2} header={"Login"}footer={"hello"} /> */}
    
    <div className='footer'>
        <div className="container">
            <p>
            <button onClick={cartModalHandler} className='space spaceCard'>
                <span>{totalItem} item(s)</span><br/><br/>
                <span>Total : {'₹'+totalAmount}</span>
            </button>
            <button onClick={cartModalHandler} className='space'>Login</button>
            <a href='/checkout'><button className='space'>Continue</button></a>
            </p>
        </div>
    </div>
</div>
</React.Fragment>
}

export default CardContext