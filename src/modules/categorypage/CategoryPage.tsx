import React from 'react';
import { useParams } from 'react-router-dom';
//! other import
import Carousel from './Carousel';
import SubCategory from './SubCategory';


const CategoryPage = () => {
    const { cat_name } = useParams()
    return (
        <>
            <Carousel category={cat_name} />
            <SubCategory category={cat_name} />
        </>
    );
}

export default CategoryPage;