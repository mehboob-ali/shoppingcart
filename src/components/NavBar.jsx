import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { setIsShowCart } from '../redux/reducers/appSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function NavBar() {
  const dispatch = useDispatch();
  const myCart= (useSelector((state)=>state.cart.cart))
  console.log("**********************",myCart)

  return (
    <div>
    <div className=' p-6 lg:px-16 lg:pt-4 px-4 sm:py-3 sm:px-8 justify-center items-center bg-teal-med  flex-row flow-root '>
       <Link to={`/`}>
        <h1 className=' p-2 text-3xl sm:text-3xl font-bold font-mono float-left  text-teal-dark '>Shopping Cart</h1>
        </Link>
        <div>   
          <AiOutlineShoppingCart
          onClick={()=>dispatch(setIsShowCart(true))}
          className=' text-teal-light h-12 w-12 sm:h-12 sm:w-12 lg:h-16 lg:w-14 float-right
           p-2 border-1 bg-teal-dark rounded-2xl  '>
          </AiOutlineShoppingCart>
        </div>
        <div className='   p-3 rounded-full flex justify-center items-center w-4 h-4 border-teal-dark border-2  float-right bg-teal-light'>
          <span className='text-md'>{ myCart.length}</span>
        </div>
          
    </div>
    </div>
  )
}

export default NavBar