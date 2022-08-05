import React from 'react'
import './CartModal.css'

const CartModal = (props) => {
  return (<div className='modal__content'>
  <div >
   <h1>Items</h1> 
    <ul>
    {props.contentM.map( (currItem)=>{
          return <p key={currItem.id}>{currItem.name}</p>
        })}
    </ul>

    <div className='total' >
    <h1><span >Total Item(s)</span><span className='space44'>{props.TI}</span></h1>
    <h1><span >Total Amount</span><span className='space44'>{props.TA}</span></h1>
  </div>

  </div>
  <div ><h1>Qty</h1>
  <ul>
    {props.contentM.map( (currItem)=>{
          return <h1 key={currItem.id}>{currItem.quantity}</h1>
        })}
    </ul>
  </div>
  <div><h1>Amount</h1>
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