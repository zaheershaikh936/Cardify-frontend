import React from 'react';

const QuickLinks = () => {
    return (
        <>
            <div className='mb-4'>
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-green-500 relative inline-block text-3xl mb-4 mt-4">
                    <span className="relative text-white"> Quick Link </span>
                </span>
                <ul className='mt-4'>
                    <li className='mt-1 mb-1 hover:text-green-500 hover:underline'>Term & Condition</li>
                    <li className='mt-1 mb-1 hover:text-green-500 hover:underline'>Contact us</li>
                    <li className='mt-1 mb-1 hover:text-green-500 hover:underline'>Privacy policy</li>
                    <li className='mt-1 mb-1 hover:text-green-500 hover:underline'>Become-a-Seller</li>
                    <li className='mt-1 mb-1 hover:text-green-500 hover:underline'>Become-a-Freelancer  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</li>
                </ul>
            </div>
        </>
    )
}

export default QuickLinks