import React from 'react';

// ! other component
import HighlightedContent from './HighlightedContent';
import PremierProduct from './PremierProduct';
import Vendor from './Vendor';
import Creators from './Creators';
import FreeProduct from './FreeProduct';
import Testimonial from '../testimonial/Testimonial'
const Home = () => {
    return (
        <>
            <HighlightedContent />
            <PremierProduct />
            <Vendor />
            <Creators />
            <FreeProduct />
            <Testimonial />            
        </>
    )
}

export default Home;