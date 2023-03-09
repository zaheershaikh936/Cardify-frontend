import React from 'react';

// !images
import { logo } from '../../assets/images/index';

const Header = () => {
    return (
        <>
            <header className='p-8'>
                <div className="grid grid-cols-2">
                    <div>
                        <img src={logo} alt="logo" loading='lazy' />
                    </div>
                    <div className='absolute right-20'>
                        <button className='lg:hidden border p-2 mobile_menu'>Show</button>
                        <ul className='lg:flex  md:hidden sm:hidden gap-6 font-semibold text-md'>
                            <li className='active-border'>Home</li>
                            <li>Product</li>
                            <li>Service</li>
                            <li>Customized</li>
                            <li className='inline-block'>Become-a-Seller</li>
                            <li>
                                <svg className="h-8 w-8 text-black hover:text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </li>
                            <li>
                                <svg className="h-8 w-8 text-black hover:text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <circle cx="11" cy="11" r="8" />  <line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;