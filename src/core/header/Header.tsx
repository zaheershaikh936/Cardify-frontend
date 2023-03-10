import React from 'react';

// other import 
import TopHeader from './TopHeader';
import MainMenu from './MainMenu';
import MiddleMenu from './MiddleMenu'

const Header = () => {
    return (
        <>
            <header>
                <TopHeader />
                <MiddleMenu />
                {/* <MainMenu /> */}
            </header>
        </>
    );
}

export default Header;