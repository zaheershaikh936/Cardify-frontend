import React from 'react';

// !image import
import { customize } from '../../../assets/images/index';

// Other import
import ContactForm from './ContactForm';
import QuickLinks from './QuickLinks';
import SocialLink from './SocialLink'
import BottomFooter from './BottomFooter'


const Footer = () => {
    return (
        <>
            <div className='mt-8 bg-black text-white'>
                <div className='py-8 px-8 sm:container sm:mx-auto grid grid-cols-1 sm:grid-cols-4 justify-items-center sm:gap-10 mt-6'>
                    <ContactForm />
                    <QuickLinks />
                    <SocialLink />
                </div>
                <BottomFooter />
            </div>
        </>
    );
}

export default Footer;