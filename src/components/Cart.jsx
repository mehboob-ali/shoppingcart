import React, {  } from 'react';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import {  } from '../redux/reducers/cartSlice';

const Cart = ({ setIsShowCart }) => {

  const myCart=useSelector((state) => state.cart.cart);
  console.log(myCart)
  return (
    <div className=' fixed inset-0 bg-[rgba(0,0,0,0.7)] border-2'
      onClick={() => setIsShowCart(false)}>
      <div className=' bg-white w-[250px] lg:w-[350px] h-full absolute right-0 overflow-y-scroll'>
        
        {
          ! myCart.length>0 ? 
        
        <h1 className=''>lets add some items</h1>
        :
        myCart.map((item) => (
            <>
            <div key={item.id} className=' flex flex-col p-2 lg:p-4 lg:pb-2  shadow-md  '>
              <div className='flex justify-center items-center '>
                <img src={item.image} alt={item.title} className=' px-2 lg:pr-4 h-16 lg:h-20'></img>
                <p className=' '>{item.title}</p>
                <p className='p-2 font-bold'>
                  ${item.price}
                  </p>
                </div>
                <div className='flex items-start justify-center p-2'>
                 <button className=' text-teal-dark text-xl py-2 px-4' >
                  <AiOutlineMinusCircle></AiOutlineMinusCircle>
                </button>
                  <p className=' text-teal-dark text-xl p-1'>
                    {item.quantity}
                  </p>
                  <button className=' text-teal-dark text-xl py-2 px-4'>
                    <AiOutlinePlusCircle></AiOutlinePlusCircle>
                  </button>
                </div>
            </div>
            </>
            )
          )
        }

      </div>

    </div>
  )
}

export default Cart