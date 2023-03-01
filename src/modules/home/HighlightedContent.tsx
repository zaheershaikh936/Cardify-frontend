import React from 'react';

// !image import 
import { slider } from '../../assets/images/index'

const HighlightedContent = () => {
    return (
        <>
            <hr />
            <div className='container mx-auto mt-8'>
                <div className="grid grid-cols-2 gap-2">
                    <div>1</div>
                    <div>
                        <img src={slider} alt="HighlightedContent" className='ml-10' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HighlightedContent;