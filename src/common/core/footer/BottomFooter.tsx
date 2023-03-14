import React from 'react';

// image import
import { mastercard, visa, paypal } from '../../../assets/images/index';
const BottomFooter = () => {
    return (
        <>
            <div className='sm:px-60 sm:py-3 gap-4 justify-items-center [background-color:#151515] grid grid-cols-1 sm:grid-cols-3 text-white'>
                <div className=''>
                    <p className='text-slate-300'>Copyright 2023 Cardify</p>
                </div>
                <div className=''>
                    <ul className='flex space-x-4'>
                        <li><img src={mastercard} alt="mastercard" /></li>
                        <li><img src={visa} alt="visa" /></li>
                        <li><img src={paypal} alt="paypal" /></li>
                    </ul>
                </div>
                <div className=''>
                    <ul className='flex space-x-4 mb-4'>
                        <li><svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></li>
                        <li><svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg></li>
                        <li><svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default BottomFooter