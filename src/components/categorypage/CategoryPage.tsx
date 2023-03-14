import React from 'react';
import { useParams } from 'react-router-dom';
//! other import
import Carousel from '../../components/categorypage/Carousel';
import SubCategory from '../../modules/Category';


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