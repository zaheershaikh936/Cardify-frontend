import React from 'react';

// !other import
import Title from '../home/Title';
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
    return (
        <>
            <div className='mt-8 border-t-2 border-black'>
                <div className='container mx-auto mt-8'>
                    <Title title={'TESTIMONIAL'} description={'Our user testimonial'} />
                    <div className='grid grid-cols-4 gap-4'>
                        <TestimonialCard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial;