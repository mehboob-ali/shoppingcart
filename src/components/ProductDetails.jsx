import React, {useState, useEffect} from 'react'
import NavBar from './NavBar'
import { useParams } from 'react-router-dom'
import Product from './Product';

const ProductDetails = ({products})=> {
  const {id} = useParams();
  console.log(" helllllll yeahhhhhhhhh  " ,id);
  const [cartItem, setCartItem] = useState([]);
  
  useEffect(()=>{

    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res=>res.json())
    .then(json=>setCartItem(json))
    return () => {
      
    }

  },[id])

    console.log("finallllllllly",cartItem)

  return (
    <div>
        <div>
            <NavBar></NavBar>
        </div>
        
        <div className=' px-8 lg:px-36 sm:px-8 md:px-8 pb-8' >
        <div className='bg-teal-light px-4 p-2 sm:px-8 lg:px-36 
        grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 
        rounded-2xl '>


        <div className=' justify-center items-center lg:items-center content-center flex'>
          <img className=' lg:h-3/4 h-3/4 p-2  ' src={cartItem.image} alt='' ></img>
        </div>
        
        <div className='lg:p-12 text-teal-text flex flex-col items-center'>
          <p className=' text-2xl text-center '>{cartItem.title}</p>
          
          <div className=' grid grid-cols-2 py-6 px-2 items-center'>
          <p className=' text-2xl font-bold  '>Price : $ {cartItem.price}</p>
            <button className=' border-2  p-3 font-bold rounded-lg border-teal-dark
                        lg:text-xl lg:p-4
                        hover:bg-teal-dark hover:text-teal-light m-2 '>
              Add to Cart 
            </button>
          </div>
          <p className=' text-2xl pb-2 ' >Product Description : </p>
          <p className=' text-xl p-4 '>{cartItem.description}</p>

        </div>
        
        </div>
      </div>

    </div>
  )
}

export default ProductDetails