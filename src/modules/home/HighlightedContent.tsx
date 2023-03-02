import React from 'react';

// !image import 
import { slider } from '../../assets/images/index'

// !component import
import SocialLink from './SocialLink';

const HighlightedContent = () => {
    return (
        <>
            <div className='container mx-auto mt-8'>
                <div className="grid grid-cols-2 gap-2">
                    <div>
                        <div className='px-20 py-20'>
                            <p className='text-6xl font-bold leading-normal'> It’s time <br />
                                to bring your ideas alive
                            </p>
                            <p className='mt-8'>
                                Voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia.
                            </p>
                            <button className='mt-8 bg-black w-48 text-white h-14 rounded-lg hover:text-black hover:bg-white hover:border-2 border-black'>
                                <p className='font-bold'>Contact with us</p>
                            </button>
                        </div>
                    </div>
                    <div>
                        <img src={slider} alt="HighlightedContent" className='px-10 py-10 ml-16' />
                        <SocialLink />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HighlightedContent;