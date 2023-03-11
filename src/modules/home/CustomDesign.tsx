import React from "react";

const CustomDesign = ()=>{
    return (
        <>
            <div className="bg-black text-white mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div className="py-8 px-8 sm:py-40 sm:px-40">
                        <h1 className="text-2xl sm:text-6xl font-semibold">Create an own
                            <span className="ml-2 sm:mr-2 sm:mt-3 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-green-500 relative inline-block"> <span className="relative text-white"> amazing </span> </span>
                             design.
                        </h1>
                        <p className="text-lg mt-6">
                            Get your free website with Vista x Wix – the best website builder in the business, that’ll help show customers what you do best.
                        </p>

                        <button className='justify-items-center mt-6 bg-white w-48 text-black h-14 rounded-full hover:bg-black hover:border-2 hover:border-white hover:text-white'>
                            <p className='font-bold'>Start for free</p>
                        </button>
                    </div>
                    <div className="hidden sm:list-item py-20">
                        <img className="[float:right]" src="https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_768/legacy_dam/en-us/S001548287/MXP10539-Wix-Hor3-marquee-mobile-STATIC?cb=4575369d59faa32d7e2126e7b1968c80f5932816" alt="alt" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default CustomDesign