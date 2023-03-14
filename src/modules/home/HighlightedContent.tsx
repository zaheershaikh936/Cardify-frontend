import React from 'react';

// !image import 
import { slider } from '../../assets/images/index';

// !component import
import SocialLink from './SocialLink';

const HighlightedContent = () => {
    return (
        <>
            <div className='container mx-auto mt-8'>
                <div className="grid grid-cols-1 sm:grid sm:grid-cols-2 gap-2">
                    <div>
                        <div className='px-8 sm:px-38 sm:py-40'>
                            <p className='text-2xl sm:text-6xl font-bold leading-normal text-slate-800'> Branding that <br /><span className="mt-2 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-green-500 relative inline-block"> <span className="relative text-white"> inspires </span> </span></p>
                            <p className='mt-8 text-slate-400'>
                                Bring your brand to life through your logo and all your marketing just like the family business behind the restaurant, Monarch.
                            </p>
                            <div className='flex space-x-4'>
                                <button className='mt-8 bg-slate-800 w-48 text-white h-14 rounded-full hover:text-slate-800 hover:bg-white hover:border-2 border-slate-800'>
                                    <p className='font-bold'>Contact with us</p>
                                </button>

                                <button className='mt-8 bg-slate-800 w-48 text-white h-14 rounded-full hover:text-slate-800 hover:bg-white hover:border-2 border-slate-800'>
                                    <p className='font-bold'>Contact with us</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img className='hidden sm:list-item sm:px-10 sm:py-10 sm:ml-16' src={slider} alt="HighlightedContent" />
                        </div>
                        <SocialLink />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HighlightedContent;