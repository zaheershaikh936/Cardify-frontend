import React from 'react';
import './assets/css/style.css';
import { Routes, Route, Outlet, NavLink } from 'react-router-dom';

// !core import
import Header from './core/header/Header';
import Footer from './core/footer/Footer';

// !component import 
import Home from './modules/home/Home';
import CategoryPage from './modules/categorypage/CategoryPage';
import SubCategory from './modules/subcategory/SubCategory';



const App = () => {
  return (
    <>
        <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path='/category/:cat_name' element={<CategoryPage />} />
            <Route path='/subcategory/:sub_cat_name' element={<SubCategory />} />
          </Routes>
        <Footer />
    </>
  );
}

export default App;