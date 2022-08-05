import React from 'react'
import './CartModal.css'

const CartModal = (props) => {
  return (<div className='modal__content'>
  <div className="item space3">
   <h1>Items</h1> 
    <ul>
    {props.contentM.map( (currItem)=>{
          return <p key={currItem.id}>{currItem.name}</p>
        })}
    </ul>

    <div className='total'>
    <h1><span className='space3'>Total Item(s)</span><span>{props.TI}</span></h1>
    <h1><span className='space3'>Total Amount</span><span>{props.TA}</span></h1>
  </div>

  </div>
  <div className="qty space3"><h1>Qty</h1>
  <ul>
    {props.contentM.map( (currItem)=>{
          return <h6 key={currItem.id}>{currItem.quantity}</h6>
        })}
    </ul>
  </div>
  <div className="Amount space3"><h1>Amount</h1>
  <ul>
    {props.contentM.map( (currItem)=>{
          return <p key={currItem.id}>{currItem.price}</p>
        })}
    </ul>

  </div>

  </div>
  )
}

export default CartModal