import React, { useContext } from 'react';
import Card from '../shared/Card';
import './ProductList.css';
import '../shared/Button.css';
import { CartContext } from '../pages/Homepage';

const ProductList = ({id,image,name,description,price,quantity}) => {

    const {increment,decrement} = useContext(CartContext);

  return (
    <div>
        <ul className='list-style'>
        <div className='content-list'>
          <Card>
                <div>
                    <img className='image-style' src={image} alt="paratha"/>
                </div>
                <div className='right-text'>
                    <h1 className='name'>{name}</h1><br/><br/>
                    <span className='desc'>{description}</span><br/><br/>
                    <h1 className='price'>{'₹'+ price}</h1>
                </div>
                {/* {!quantity?(<button className='button-style'>Add</button>):( */}
                <div className="input-group">
                    <div className="input-group-dec">
                        <button className="button-outline" type="button" onClick={()=>{decrement(id)}}>-</button>
                    </div>
                    <input type="text" className="form-control" value={quantity} onChange={()=>{}}/>
                    <div className="input-group-inc">
                        <button className="button-outline" type="button" onClick={()=>{increment(id)}}>+</button>
                    </div>
                </div>
           </Card>
        </div>
        </ul>
    </div>
  )
  
  
  
  
  
  
    // let [num, setNum]= useState(true);


    
//   return (
//     <div>
//         <ul className='list-style'>
//         <div className='content-list'>
//           <Card>
//                   <div>
//                       <img className='image-style' src={data.image} alt="paratha"/>
//                   </div>
//                   <div className='right-text'>
//                       <h1 className='name'>{data.name}</h1><br/><br/>
//                       <span className='desc'>{data.description}</span><br/><br/>
//                       <h1 className='price'>{data.price}</h1>
//                   </div>
                  
//                   {/* {btnTrigger&&<button onClick={btnHandler} className='button-style'>Add</button>}
//                   {!btnTrigger && <Button/>} */}
//                   {/* {num ?(
//                     <button onChnage={()=>{setNum(false)}} className='button-style'>Add</button>
//                   ): <Button/>} */}
//                   <Button/>
//            </Card>
//         </div>
//         </ul>
//     </div>
//   )
}

export default ProductList