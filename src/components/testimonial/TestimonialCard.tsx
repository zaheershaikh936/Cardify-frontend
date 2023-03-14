import React, { useState } from 'react';

// image import 
import { testimonals_icon } from '../../assets/images/index';

// Props type
type testimonialsType = {
    id: number,
    img: string,
    name: string,
    contain: string
}


const TestimonialCard = (props: testimonialsType) => {
    return (
        <>
            <div className='bg-slate-100 p-4 rounded-lg mt-2 slide-right' key={props.id}>
                <img src={testimonals_icon} alt="testimonals_icon" className='ml-4 testimonals_icon' />
                <center>
                    <img className='rounded-full w-40 h-40' src={props.img} alt="testimonials" />
                    <p className='mt-4 text-md font-semibold'> {props.name} </p>
                    <p className='mt-4 text-lg font-semibold'> {props.contain} </p>
                </center>
            </div>
        </>
    );
}

export default TestimonialCard;