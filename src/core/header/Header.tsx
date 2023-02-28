import React from 'react';

// !images
import { logo } from '../../assets/images/index';

const Header = () => {
    return (
        <>
            <header className='p-10'>
                <div className="grid grid-cols-2">
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className='absolute right-20'>
                        <ul className='flex gap-8 font-bold text-xl'>
                            <li className='active-border'>Home</li>
                            <li>Product</li>
                            <li>Service</li>
                            <li>Customized</li>
                            <li>Become a Seller</li>
                            <li>Profile</li>
                            <li>
                                <svg className="h-8 w-8 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="11" cy="11" r="8" />  <line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;