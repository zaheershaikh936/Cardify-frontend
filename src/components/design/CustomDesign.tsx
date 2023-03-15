import React from 'react';

// ! other import 
import LeftMenu from './LeftMenu';
import MainDesign from './MainDesign';

const CustomDesign = () => {
    return (
        <>
            <div className='flex border-t-2'>
                <div className='w-[5%] flex-none border-r-2'>
                    <LeftMenu />
                </div>
                <div className='flex-1 min-w-0 overflow-auto bg-gray-200'>

                    <div>
                        <MainDesign />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomDesign;