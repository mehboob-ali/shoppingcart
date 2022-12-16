import './App.css';
import { useState, useEffect } from 'react';
import Product from './components/Product';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products').then(res => res.json())
      .then(data => setProducts(data));
    return () => {

    }
  }, [products.quantity])
  return (
    <div className=" bg-teal-med">
      <Provider store={store}>
        <BrowserRouter>
          <NavBar></NavBar>

          <Routes>
            <Route path='/productdetails/:id' element={<ProductDetails products={products} />} />
            <Route path='/' element={<Product products={products} />} />

          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;