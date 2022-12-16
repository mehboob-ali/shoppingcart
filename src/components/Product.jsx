import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { increaseQuantity, addToCartAsync } from '../redux/reducers/cartSlice';
import { setBtnState, setIsShowCart } from '../redux/reducers/appSlice';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import { useSelector } from 'react-redux';
import Loading from './Loading';

const Product = ({ products }) => {
    let myCart = (useSelector((state) => state.cart.cart));
    const btnState = (useSelector((state) => state.app.btnState));
    const isShowCart = (useSelector((state) => state.app.isShowCart));
    const dispatch = useDispatch();

    //// Add To cart if no item is present otherwise increase
    const handleAddToCart = async (e) => {
        e.preventDefault();
        const idExist = myCart.some(c => c.id === Number(e.target.value));
        if (!idExist) {
            dispatch(setBtnState(true));
            const id = Number(e.target.value)
            await dispatch(addToCartAsync({ id: id, quantity: 1 }));
            dispatch(setBtnState(false));
            dispatch(setIsShowCart(true));
        }
        dispatch(setIsShowCart(true));
    }


    return (
        <div>
            {btnState && <Loading />}
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

                            <Link to={`/ProductDetails/${product.id} `} className=' p-4 text-lg sm:text-lg text-center'>
                                <span>
                                    {product.title}
                                </span>
                            </Link>
                            <span className=' text-xl p-4 text-center font-bold'>
                                $ {product.price}
                            </span>
                            <button
                                className={` p-3 font-bold rounded-lg bg-teal-dark text-teal-light
                              hover:border-2 hover:border-teal-med hover:ring-2 `}
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