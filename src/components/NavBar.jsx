import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai';

function NavBar() {
  return (
    <div className=' p-2 px-4 sm:py-3 sm:px-8 justify-center items-center  flex-row flow-root '>
        <h1 className=' text-2xl sm:text-3xl font-bold font-mono float-left  text-teal-dark '>Shopping Cart</h1>
          <AiOutlineShoppingCart className=' text-teal-dark h-10 w-10 sm:h-12 sm:w-12 float-right '></AiOutlineShoppingCart>
    </div>
  )
}

export default NavBar