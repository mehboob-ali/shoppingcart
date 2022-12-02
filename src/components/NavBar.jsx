import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai';

function NavBar({setIsShowCart}) {
  return (
    <div className=' p-6 lg:px-16 lg:pt-4 px-4 sm:py-3 sm:px-8 justify-center items-center  flex-row flow-root '>
        <h1 className=' text-3xl sm:text-3xl font-bold font-mono float-left  text-teal-dark '>Shopping Cart</h1>
          <AiOutlineShoppingCart
          onClick={()=>setIsShowCart(true)}
          className=' text-teal-dark h-12 w-12 sm:h-12 sm:w-12 lg:h-16 lg:w-12 float-right '></AiOutlineShoppingCart>
    </div>
  )
}

export default NavBar