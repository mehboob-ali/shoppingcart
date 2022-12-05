import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { increaseQuantity, addToCartAsync } from '../redux/reducers/cartSlice';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import Cart from './Cart';
import { useSelector } from 'react-redux';
const Product = ({ products }) => {
    const [isShowCart, setIsShowCart] = useState(false)
    let myCart = (useSelector((state) => state.cart.cart));
    const [btnState, setBtnState] = useState(false)
    // console.log("my cart is", myCart)

//  console.log("checking //// " , typeof(myCart[0].quantity))
    //     const checkIdExist=(cid)=>{


    //     if(idExist){
    //           return console.log('Exist!!!', idExist)
    //     }
    //     else{
    //     console.log("doesnt exist", idExist) 
    //     }
    // }

    const dispatch = useDispatch();

    const handleAddToCart = async(e) => {
        e.preventDefault();
        const idExist = myCart.some(c => c.id === Number(e.target.value));
        if (!idExist) {
                console.log("doesnt exist", idExist)
            setBtnState(true)
             await dispatch(addToCartAsync(e.target.value));
            setBtnState(false);
        }
        else {
            // console.log("before dispatch")
            await dispatch(increaseQuantity(e.target.value))
            // return console.log('Exist!!! after dispatch', idExist)

        }

    }

    return (
        <div>
            <div>
                <NavBar setIsShowCart={setIsShowCart}></NavBar>
            </div>

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