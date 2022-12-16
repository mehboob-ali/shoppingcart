import React from 'react'
import { useSelector } from 'react-redux';
const Loading = () => {
  const btnState = (useSelector((state) => state.app.btnState));

  return (
    <div>
      {btnState &&
        <div className=' flex fixed inset-0 bg-[rgba(0,0,0,0.7)] justify-center items-center content-center
            font-bold text-white border-2'>
          <svg fill='none' className="w-28 h-28 animate-spin text-center" viewBox="0 0 32 32" xmlns='http://www.w3.org/2000/svg'>
            <path clipRule='evenodd'
              d='M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z'
              fill='currentColor' fillRule='evenodd' />
          </svg>
          <div>Loading ...</div>
        </div>

      }
    </div>
  )
}

export default Loading