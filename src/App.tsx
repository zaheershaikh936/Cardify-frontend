import React from 'react';
import './assets/css/style.css';
import { Routes, Route, Outlet, NavLink } from 'react-router-dom';

// !core import
import Header from './common/core/header/Header';
import Footer from './common/core/footer/Footer';

// !component import 
import Home from './modules/Home';
import CategoryPage from './components/categorypage/CategoryPage';
import SubCategory from './components/subcategory/SubCategory';
import Design from './modules/Design';
import Login from './components/auth/Login';



const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/category/:cat_name' element={<CategoryPage />} />
        <Route path='/subcategory/:sub_cat_name' element={<SubCategory />} />
        <Route path='/design' element={<Design />} />
        <Route path='/auth/login' element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;