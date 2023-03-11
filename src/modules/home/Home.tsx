import React from 'react';

// ! other component
import HighlightedContent from './HighlightedContent';
import Category from './Category'
import Testimonial from '../testimonial/Testimonial'

import PremierProduct from './PremierProduct';
import Vendor from './Vendor';
import Creators from './Creators';
import FreeProduct from './FreeProduct';
const Home = () => {
    return (
        <>
            <HighlightedContent />
            <Category />
            {/* <PremierProduct /> */}
            {/* <Vendor />*/}
            {/* <Creators />*/}
            {/* <FreeProduct /> */}
            <Testimonial />
        </>
    )
}

export default Home;