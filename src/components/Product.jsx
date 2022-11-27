import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/reducers/cartSlice';
import { BrowserRouter as Router ,Link } from 'react-router-dom';
import NavBar from './NavBar';

function Product() {
    const [products,setProducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products').then(res=>res.json())
        .then(data=>setProducts(data));
      return () => {
        
      }
    }, [])
    
    const dispatch= useDispatch();

    const handleAddToCart=(e)=>{
        e.preventDefault();
        dispatch(addToCart(e.target.value));  
    }

  return (
    <div>
    <div>
        <NavBar></NavBar>
    </div>

    <div className=' px-4 sm:px-8 lg:px-36 p-2  grid grid-cols-1 gap-3 sm:grid-cols-2
         lg:grid-cols-3 lg:gap-4
    '>
        {
            products.map((product)=>(
        <div key={product.id} className=' p-2 flex-row grid grid-cols-2 text-teal-dark
                sm:grid-cols-1
            justify-center items-center bg-teal-light rounded-2xl'>
            
            <Link to="/ProductDetails">Go
            <img src={product.image} alt={product.title} className=' object-scale-down h-36 w-96 p-2
                lg:h-48 lg:w-96  '></img></Link>
            <span className=' p-4 text-lg sm:text-lg text-center'>
                {product.title}
            </span>
            <span className=' text-xl p-4 text-center font-bold'>
                $ {product.price}
            </span>
            <button className=' border-2 p-3 font-bold rounded-lg border-teal-dark hover:bg-teal-dark hover:text-teal-light hover:' 
                value={product.id}
                onClick={handleAddToCart}>
                Add to Cart
            </button>
        </div>
            )
            )
}

    </div>
    </div>
  )
}

export default Product