import React from 'react';

// ! other component
import HighlightedContent from './HighlightedContent';
import PremierProduct from './PremierProduct';
import Vendor from './Vendor';
import Creators from './Creators';

const Home = () => {
    return (
        <>
            <HighlightedContent />
            <PremierProduct />
            <Vendor />
            <Creators />
        </>
    )
}

export default Home;