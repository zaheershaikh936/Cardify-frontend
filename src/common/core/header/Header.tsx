import React from 'react';

// other import 
import TopHeader from './TopHeader';
import MainMenu from './MainMenu';
import MiddleMenu from './MiddleMenu'

const Header = () => {
    return (
        <>
            <header>
                {/* className='bg-white sticky top-0' */}
                <TopHeader />
                <MiddleMenu />
                <MainMenu />
            </header>
        </>
    );
}

export default Header;