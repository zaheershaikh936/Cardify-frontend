import React, { useState } from 'react';
import { Link } from 'react-router-dom'
// !images
import { logo } from '../../../assets/images/index';

const MiddleMenu = () => {
    const [showMenu, setShowMenuValue] = useState(false)

    return (
        <>
            <nav className='py-6 px-8'>
                {/* desktop */}
                <div className="hidden md:visible sm:grid sm:grid-cols-6 gap-4">
                    <div className='mt-2'>
                        <Link to={'/'} >
                            <img className='w-ful' src={logo} alt="logo" loading='lazy' />
                        </Link>
                    </div>
                    <div className='col-span-3'>
                        <input type="search" className='rounded-full w-full border-2 h-11' placeholder='      Search....' />
                    </div>
                    <div className='col-span-2'>
                        <div className='flex space-x-10 mt-2 justify-center'>
                            <div className='overflow-auto flex space-x-2 hover:underline'>
                                <svg className="h-4 w-4 mt-1 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                <p> Get in touch </p>
                            </div>
                            <div className='overflow-auto flex space-x-2 hover:underline'>
                                <svg className="h-4 w-4 mt-1 text-black" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M16 5v4a1 1 0 0 0 1 1h4" />  <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2v-7l-5 -5h-11a2 2 0 0 0 -2 2z" /></svg>
                                <Link to='/design'>
                                    <p> Create a design </p>
                                </Link>
                            </div>
                            <div className='overflow-auto flex space-x-2 hover:underline'>
                                <svg className="h-4 w-4 mt-1 text-black" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="7" r="4" />  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>
                                <Link to='/auth/login'>
                                    <p> Sing in </p>
                                </Link>
                            </div>
                            <div className='overflow-auto flex space-x-2 hover:underline'>
                                <svg className="h-4 w-4 mt-1 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <circle cx="9" cy="21" r="1" />  <circle cx="20" cy="21" r="1" />  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
                                <p> Cart </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* mobile */}
                <div className='md:hidden grid grid-cols-3'>
                    <div className='flex space-x-4'>
                        <button onClick={() => { if (showMenu === false) { setShowMenuValue(true) } else { setShowMenuValue(false) } }} >
                            <svg className="h-4 w-4 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <line x1="3" y1="12" x2="21" y2="12" />  <line x1="3" y1="6" x2="21" y2="6" />  <line x1="3" y1="18" x2="21" y2="18" /></svg>
                        </button>

                        <button>
                            <svg className="h-4 w-4 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <circle cx="11" cy="11" r="8" />  <line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                        </button>
                    </div>
                    <div>
                        <center>
                            <img className='mt-1' src={logo} alt="logo" loading='lazy' />
                        </center>
                    </div>

                    <div className='flex space-x-4 '>
                        <button>
                            <svg className="ml-4 h-4 w-4 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                        </button>
                        <button>
                            <svg className="h-4 w-4 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <circle cx="9" cy="21" r="1" />  <circle cx="20" cy="21" r="1" />  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
                        </button>
                    </div>
                    <div className={!showMenu ? 'hidden md:block md:w-auto bg-white' : 'bg-white md:block md:w-auto'}>
                        <ul className='text-sm mt-4 mb-4 [width:100vh]'>
                            <li className='m-1 hover:border-2 hover:border-green-500'> Bussiness Cards</li>
                            <li className='m-1 hover:border-2 hover:border-green-500'>Postcards & Print Advertising</li>
                            <li className='m-1 hover:border-2 hover:border-green-500'>Signs, Banners & Posters</li>
                            <li className='m-1 hover:border-2 hover:border-green-500'>Labels, Stickers & Packaging</li>
                            <li className='m-1 hover:border-2 hover:border-green-500'>Home & Gifts</li>
                            <li className='m-1 hover:border-2 hover:border-green-500'>Invitations & Stationery</li>
                            <li className='m-1 hover:border-2 hover:border-green-500'>Clothing & Bags</li>
                            <li className='m-1 hover:border-2 hover:border-green-500'>Promotional Products</li>
                            <li className='m-1 hover:border-2 hover:border-green-500'>Websites by Vista x Wix</li>
                            <li className='m-1 hover:border-2 hover:border-green-500'>Design & Logo</li>
                            <li className='m-1 hover:border-2 hover:border-green-500'>New Arrivals</li>
                            <hr />
                            <li className='m-1 hover:border-2 hover:border-green-500'> Term & Condition </li>
                            <li className='m-1 hover:border-2 hover:border-green-500'> Contact us </li>
                            <li className='m-1 hover:border-2 hover:border-green-500'> Privacy policy </li>
                            <li className='m-1 hover:border-2 hover:border-green-500'> Become-a-Seller </li>
                            <li className='m-1 hover:border-2 hover:border-green-500'> Become-a-Freelancer </li>
                            <hr />
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );

}

export default MiddleMenu