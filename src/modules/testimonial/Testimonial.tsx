import React, { useState } from 'react';

// !other import
import Title from '../home/Title';
import TestimonialCard from './TestimonialCard';

// dummy data
import { testimoialData } from '../../data/testimonials';


const Testimonial = () => {
    const [activeSlider, setActiveSliderValue] = useState(1);

    function nextSlider(id: any) {
        if (id === testimoialData.length) {
            setActiveSliderValue(1);
        } else if (id < testimoialData.length) {
            setActiveSliderValue(activeSlider + 1);
        } else {
            setActiveSliderValue(testimoialData.length - 1);
        }
    }

    function preSlider(id: number) {
        console.log('click');

        if (id === 1) {
            setActiveSliderValue(testimoialData.length);
        } else if (id > 1) {
            setActiveSliderValue(activeSlider - 1);
        } else {
            setActiveSliderValue(testimoialData.length - 1);
        }

    }

    return (
        <>
            <div className='mt-8 border-t-2 border-black'>
                <div className='container mx-auto mt-8'>
                    <Title title={'TESTIMONIAL'} description={'Our user testimonial'} />
                    {testimoialData.map(({ id, img, name, contain }) => {
                        return (
                            <>
                                <div key={id} className={activeSlider === id ? 'flex justify-between item center' : 'hidden'}>
                                    <button onClick={() => { nextSlider(id + 1); }}><svg className="h-8 w-8 text-[#3d38ff] hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg></button>
                                    <TestimonialCard id={id} img={img} name={name} contain={contain} />
                                    <button onClick={() => { preSlider(id - 1); }}><svg className="h-8 w-8 text-[#3d38ff] hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg></button>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Testimonial;