import React, { useState } from 'react';

const MainDesign = () => {
    const [fullScreen, setFullScreen] = useState(true);
    return (
        <>
            <div className='border-b-2 py-3 px-5 bg-white'>
                <button className='flex' onClick={() => { !fullScreen ? setFullScreen(true) : setFullScreen(false) }}>
                    <p className='px-2 border-r-2 border-black font-semibold'> Full Screen </p>
                    <svg className="ml-2 h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                </button>
            </div>
            <div className='px-20 mt-4'>
                <div className={fullScreen ? 'min-h-screen bg-white rounded-xl mb-4 py-4 px-4' : 'py-4 px-4 bg-white rounded-xl mb-4 '}>
                    <h1>Main design</h1>
                </div>
            </div>
        </>
    );
}

export default MainDesign;