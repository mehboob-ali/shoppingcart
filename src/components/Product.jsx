import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { increaseQuantity, addToCartAsync  } from '../redux/reducers/cartSlice';
import { setBtnState, setIsShowCart } from '../redux/reducers/appSlice';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import Cart from './Cart';
import { useSelector } from 'react-redux';
    
const Product = ({ products}) => {
let myCart = (useSelector((state) => state.cart.cart));
const btnState =(useSelector((state)=>state.app.btnState));
const isShowCart = (useSelector((state)=> state.app.isShowCart));
const dispatch = useDispatch();

//// Add To cart if no item is present otherwise increase
    const handleAddToCart = async(e) => {
        e.preventDefault();
        const idExist = myCart.some(c => c.id === Number(e.target.value));
        if (!idExist) {
            dispatch(setBtnState(true));
             await dispatch(addToCartAsync(e.target.value));
             dispatch(setBtnState(false));
             dispatch(setIsShowCart(true));
        }
        
        // else {
        //     await dispatch(increaseQuantity(e.target.value))
        //     dispatch(setIsShowCart(true));

        // }
        dispatch(setIsShowCart(true));

    }

    return (
        <div>
            	{ btnState&&
                <div className=' flex fixed inset-0 bg-[rgba(0,0,0,0.7)] justify-center items-center content-center
                    font-bold text-white border-2'>
                    <svg  fill='none' className="w-28 h-28 animate-spin text-center" viewBox="0 0 32 32" xmlns='http://www.w3.org/2000/svg'>
					<path clipRule='evenodd'
						d='M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z'
						fill='currentColor' fillRule='evenodd' />
				</svg>
		<div>Loading ...</div>
        </div>

}

		 
            {/* <div>
                <NavBar setIsShowCart={setIsShowCart}></NavBar>
            </div> */}

            <div className=' px-4 sm:px-8 lg:px-36 p-2  grid grid-cols-1 gap-3 sm:grid-cols-2
                            lg:grid-cols-3 lg:gap-4
                        '>
                {
                    products.map((product) => (
                        <div key={product.id} className=' p-2 flex-row grid grid-cols-2 text-teal-dark
                                        sm:grid-cols-1
                                    justify-center items-center bg-teal-light rounded-2xl'>

                            <Link to={`/ProductDetails/${product.id} `}>
                                <img src={product.image} alt={product.title} className=' object-scale-down h-36 w-96 p-2
                                     lg:h-48 lg:w-96  '>
                                </img>
                            </Link>
                            <span className=' p-4 text-lg sm:text-lg text-center'>
                                {product.title}
                            </span>
                            <span className=' text-xl p-4 text-center font-bold'>
                                $ {product.price}
                            </span>

                        
                            <button 
                            className={`border-2 p-3 font-bold rounded-lg 
                            ${btnState ? ' bg-gray-600 text-gray-300 line-through'
                              : ' border-teal-dark hover:bg-teal-dark hover:text-teal-light'}`}
                                value={product.id}
                                disabled={btnState} 
                                onClick={handleAddToCart}>
                                Add to Cart
                            </button>

                        </div>
                    )
                    )
                }
                {isShowCart && <Cart setIsShowCart={setIsShowCart} />}


            </div>
        </div>
    )
}

export default Product