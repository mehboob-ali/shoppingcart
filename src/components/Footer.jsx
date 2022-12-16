import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai'
const Footer = () => {
  return (
    <div className=' pt-4 bg-teal-dark h-36'>
      <div className=' flex justify-center items-center'>
        <AiFillInstagram className=' text-pink-300 text-4xl'></AiFillInstagram>
        <AiFillFacebook className=' text-blue-300 text-4xl'></AiFillFacebook>
        <AiFillTwitterSquare className=' text-blue-300 text-4xl'></AiFillTwitterSquare>
      </div>
      <div>
        <p className=' flex justify-center items-center text-teal-light text-lg p-2 '>All Rights Reserved, 2022</p>
      </div>
    </div>
  )
}

export default Footer