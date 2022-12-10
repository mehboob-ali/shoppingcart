import React, { } from 'react';
import { AiOutlinePlusCircle, AiOutlineMinusCircle, AiFillDelete } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/reducers/cartSlice';
import { setIsShowCart } from '../redux/reducers/appSlice';

const Cart = () => {

  const myCart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const incrementQuantity = (id) => {
    dispatch(increaseQuantity(id))
  }

  const decrementQuantity = (id) => {
    dispatch(decreaseQuantity(id))
  }
  const deleteCart = (index) => {
    dispatch(removeFromCart(index))
  }


  return (
    <div className=' fixed inset-0 bg-[rgba(0,0,0,0.7)] border-2'
      onClick={() =>dispatch(setIsShowCart(false))}
    >
      <div className=' bg-white w-[250px] lg:w-[350px] h-full absolute right-0 overflow-y-scroll'
        onClick={(e) => e.stopPropagation()}>
        {
          !myCart.length > 0 ?

            <h1 className=''>lets add some items</h1>
            :
            myCart.map((item, index) => (
              <>
                <div key={item.id} className=' flex flex-col p-2 lg:p-4 lg:pb-2  shadow-md  '>

                  <div className='flex  items-center '>
                    <img src={item.image} alt={item.title} className=' px-2 lg:pr-4 h-16 lg:h-20'></img>
                    <p className=' '>{item.title}</p>

                  </div>


                  <div className='flex items-center justify-center text-teal-dark text-xl
                   py-2 px-2'>

                    <div className='flex'>
                      <button className='  '  >
                        <AiOutlineMinusCircle onClick={()=>decrementQuantity(item.id)}></AiOutlineMinusCircle>
                      </button>

                      <p className=' px-4 '>
                        {item.quantity}
                      </p>

                      <button className=''>
                        <AiOutlinePlusCircle onClick={() => incrementQuantity(item.id)} value={item.id}></AiOutlinePlusCircle>
                      </button>
                    </div>

                    <div className=' pl-16'>
                      <button className=' text-red-600 text-3xl'>
                        <AiFillDelete onClick={()=>deleteCart(index)} className=''></AiFillDelete>
                      </button>
                    </div>
                  </div>

                  <div className='flex items-center justify-center text-teal-dark text-xl px-2'>
                    <p className='p-2 font-bold'>
                      ${item.price}
                    </p>
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