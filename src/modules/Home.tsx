import React from 'react';

// ! other component
import HighlightedContent from '../components/home/HighlightedContent';
import Category from '../components/home/Category'
import Testimonial from '../components/testimonial/Testimonial'

import PremierProduct from '../components/home/PremierProduct';
import Vendor from '../components/home/Vendor';
import Creators from '../components/home/Creators';
import FreeProduct from '../components/home/FreeProduct';
import CustomDesign from "../components/home/CustomDesign";
const Home = () => {
    return (
        <>
            <HighlightedContent />
            <hr />
            <Category />
            <PremierProduct />
            <Vendor />
            <Creators />
            <FreeProduct />
            <CustomDesign />
            <Testimonial />
        </>
    )
}

export default Home;