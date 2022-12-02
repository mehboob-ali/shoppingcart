import React from 'react'

const Cart = ({setIsShowCart}) => {
  return (
    <div className=' fixed inset-0 bg-[rgba(0,0,0,0.7)] border-2'
    onClick={()=>setIsShowCart(false)}>
        <div className=' bg-white w-[250px] h-full absolute right-0'>
        <h1>hello </h1>
        </div>
    </div>
  )
}

export default Cart