import {BrowserRouter, Routes , Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainLayout from './pages/MainLayout';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';
import Posts from './pages/Posts';
import Error from './pages/Error';

import './App.css'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />} >

            <Route index element={<Home />}/>
            <Route path='about' element={<About />} />
            <Route path='products' element={<Products />} />
            <Route path='products/:productId' element={<SingleProduct />} />
            <Route path='posts' element={<Posts />} />
            <Route path='*' element={<Error />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
