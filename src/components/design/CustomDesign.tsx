import React from 'react';

// ! other import 
import LeftMenu from './LeftMenu';

const CustomDesign = () => {
    return (
        <>
            <div>
                <div className='[float:left] min-w-[5%] max-w-auto  w-auto'>
                    <LeftMenu />
                </div>
            </div>
        </>
    )
}

export default CustomDesign;