import React, { createContext, useEffect, useReducer} from 'react'
import {reducer} from '../Context/Reducer';

import CardContext from '../Context/CardContext';
import {data} from '../data';

export const CartContext = createContext();

const initialState={
  item:data,
  totalAmount:0,
  totalItem:0,
}

const Homepage = () => {
  const [state,dispatch]=useReducer(reducer,initialState);

  const increment = (id)=>{
    return dispatch({
      type: 'INCREMENT',
      payload:id
    })
   }; 
   const decrement = (id)=>{
    return dispatch({
      type: 'DECREMENT',
      payload:id
    })
   }; 
   useEffect(()=>{ dispatch({type:"GET_TOTAL"}); },[state.item]);

  return <CartContext.Provider value={{...state,increment,decrement}}>
        <CardContext/>
    </CartContext.Provider>
}

export default Homepage;