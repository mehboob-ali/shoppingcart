import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import { Link, useParams } from 'react-router-dom'
import { AiOutlinePlusCircle, AiOutlineMinusCircle, AiFillDelete } from 'react-icons/ai';
import { addToCartAsync, increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/reducers/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import Cart from './Cart';
import { BsFillArrowLeftSquareFill, BsCartFill } from 'react-icons/bs';
import { setBtnState, setIsShowCart } from '../redux/reducers/appSlice';
import Loading from './Loading';


const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState([{ quantity : 1}]);
  const isShowCart = (useSelector((state) => state.app.isShowCart))
  const myCart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const btnState = (useSelector((state) => state.app.btnState));
  const [quantity, setQuantity] = useState(1);  // quantity to be added to cart

  const handleAddToCart = async (e) => {
    e.preventDefault();
    const idExist = myCart.some(c => c.id === Number(e.target.value));
    if (!idExist) {
      dispatch(setBtnState(true));
      const id = Number(e.target.value)
      await dispatch(addToCartAsync({id : id, quantity : quantity}));
      dispatch(setBtnState(false));
      dispatch(setIsShowCart(true));
    }
    else {
      dispatch(setIsShowCart(true))
    }
  }

    const incrementQuantity = (id) => {
      dispatch(increaseQuantity(id))
    }

    const decrementQuantity = (id) => {
      dispatch(decreaseQuantity(id))
    }
    const deleteCart = (index) => {
      dispatch(removeFromCart(index))
    }


    useEffect(() => {

      fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(json => setSelectedProduct(json))
      return () => {

      }

    }, [id])


    return (

      <div className=' '>
        {btnState && <Loading />}

        {/* <div>
        <NavBar setIsShowCart={setIsShowCart}></NavBar>
      </div> */}

        <Link to={`/`}>
          <BsFillArrowLeftSquareFill className=' text-teal-dark mx-4 text-4xl m-2'> </BsFillArrowLeftSquareFill>
        </Link>
        <div className=' px-8 lg:px-36 sm:px-8 md:px-8 pb-8' >
          <div className='bg-teal-light px-4 p-2 sm:px-8 lg:px-8 
            grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 
            rounded-2xl '>
            <div className=' lg:col-span-1 justify-center items-center lg:items-center content-center flex'>
              <img className=' lg:h-auto  h-3/4 p-2  ' src={selectedProduct.image} alt='' ></img>
            </div>

            <div className='lg:p-12 text-teal-text flex flex-col items-center lg:col-span-2'>
              <p className=' text-2xl text-center lg:text-start '>{selectedProduct.title}</p>

              <div className=' grid grid-cols-1 py-6 px-2 items-center'>

                <p className=' text-2xl font-bold text-center  '>Price : $ {selectedProduct.price}</p>

                <div className='flex items-center justify-center text-teal-dark text-xl
                   py-4 px-2 '>
                  <button className='  '  >
                    {/* <AiOutlineMinusCircle onClick={() => decrementQuantity(selectedProduct.id)}></AiOutlineMinusCircle> */}
                    <AiOutlineMinusCircle onClick={()=>quantity>1 && setQuantity(quantity-1)}></AiOutlineMinusCircle>

                  </button>

                  <p className=' px-4 text-teal-dark '>
                    {Number(quantity)}
                  </p>
                  <button className=''>
                    {/* <AiOutlinePlusCircle onClick={() => incrementQuantity(selectedProduct.id)} value={selectedProduct.id}></AiOutlinePlusCircle> */}
                    <AiOutlinePlusCircle onClick={()=>setQuantity(quantity+1)}></AiOutlinePlusCircle>
                  </button>
                </div>

                <button className=' border-2  p-3 font-bold rounded-lg border-teal-dark
                        lg:text-xl lg:p-auto
                       bg-teal-dark text-teal-light m-2 '
                  value={selectedProduct.id}
                  onClick={handleAddToCart}
                  disabled={btnState}
                >
                  Add to Cart
                </button>

              </div>
              <p className=' text-2xl pb-2 ' >Product Description  </p>
              <p className=' text-xl p-4 '>{selectedProduct.description}</p>

            </div>

          </div>
        </div>
        {isShowCart && <Cart setIsShowCart={setIsShowCart} />}

      </div>
    )
  }

  export default ProductDetails