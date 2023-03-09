import React from 'react';
import gsap from 'gsap'
// !image import 
import { slider, animate_1, animate_2, animate_3 } from '../../assets/images/index';

// !component import
import SocialLink from './SocialLink';

const HighlightedContent = () => {
    return (
        <>
            <div className='container mx-auto mt-8'>
                <div className="grid grid-cols-2 gap-2">
                    <div>
                        <div className='px-20 py-20'>
                            <p className='text-6xl font-bold leading-normal text-slate-800'> It’s time <br />
                                to
                                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-green-500 relative inline-block"> <span className="relative text-white"> bring </span> </span> your ideas alive
                            </p>
                            <p className='mt-8 text-slate-400'>
                                Voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia.
                            </p>
                            <button className='mt-8 bg-slate-800 w-48 text-white h-14 rounded-lg hover:text-slate-800 hover:bg-white hover:border-2 border-slate-800'>
                                <p className='font-bold'>Contact with us</p>
                            </button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={animate_2} alt={animate_2} className='slide-br ml-16 animated-2' />
                            <img src={slider} alt="HighlightedContent" className='px-10 py-10 ml-16' />
                            <img src={animate_1} alt={animate_1} className='animated ml-16' />
                        </div>
                        <SocialLink />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HighlightedContent;