import React from 'react';

// !image import
import { customize } from '../../assets/images/index';

// Other import
import ContactForm from './ContactForm';
import Customized from './Customized';
import SocialLink from './SocialLink'

const Footer = () => {
    return (
        <>
            <div className='mt-8 bg-black text-white'>
                <div className='container mx-auto grid grid-cols-3 gap-16 mt-6'>
                    <ContactForm />
                    <Customized />
                    <SocialLink />
                </div>
            </div>
        </>
    );
}

export default Footer;