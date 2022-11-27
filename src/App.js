import './App.css';
import NavBar from './components/NavBar';
import Product from './components/Product';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter, Routes,Route,Link } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
function App() {
  return (
    <div className=" bg-teal-med">
    <Provider store={store}>
       <BrowserRouter>
      <Routes>
        <Route path='/productdetails' element={<ProductDetails />} />
        <Route path='/' element={<Product />} />

    </Routes>
    </BrowserRouter>
    </Provider>
    </div>
  );
}

export default App;