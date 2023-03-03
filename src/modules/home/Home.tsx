import React from 'react';

// ! other component
import HighlightedContent from './HighlightedContent';
import PremierProduct from './PremierProduct';
import Vendor from './Vendor';
import Creators from './Creators';
import FreeProduct from './FreeProduct';

const Home = () => {
    return (
        <>
            <HighlightedContent />
            <PremierProduct />
            <Vendor />
            <Creators />
            <FreeProduct />
        </>
    )
}

export default Home;