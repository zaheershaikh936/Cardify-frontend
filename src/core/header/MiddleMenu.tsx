import React from 'react';

// !images
import { logo } from '../../assets/images/index';

const MiddleMenu = () => {
    return (
        <>
            <nav className='py-6 px-8'>
                <div className="sm:grid sm:grid-cols-6 gap-4">
                    <div className='mt-2'>
                        <img className='w-ful' src={logo} alt="logo" loading='lazy' />
                    </div>
                    <div className='col-span-3'>
                        <input type="search" className='rounded-full w-full border-2 h-11' placeholder='      Search....' />
                    </div>
                    <div className='col-span-2'>
                        <div className='flex space-x-10 mt-2'>
                            <div className='overflow-auto flex space-x-2 hover:underline'>
                                <svg className="h-4 w-4 mt-1 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                <p> Get in touch </p>
                            </div>
                            <div className='overflow-auto flex space-x-2 hover:underline'>
                                <svg className="h-4 w-4 mt-1 text-black" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M16 5v4a1 1 0 0 0 1 1h4" />  <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2v-7l-5 -5h-11a2 2 0 0 0 -2 2z" /></svg>
                                <p> My Project </p>
                            </div>
                            <div className='overflow-auto flex space-x-2 hover:underline'>
                                <svg className="h-4 w-4 mt-1 text-black" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="7" r="4" />  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>
                                <p> Sing in </p>
                            </div>
                            <div className='overflow-auto flex space-x-2 hover:underline'>
                                <svg className="h-4 w-4 mt-1 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <circle cx="9" cy="21" r="1" />  <circle cx="20" cy="21" r="1" />  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
                                <p> Cart </p>

                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );

}

export default MiddleMenu