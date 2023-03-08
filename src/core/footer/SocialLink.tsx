import React from 'react';

const SocialLink = () => {
    return (
        <>
            <div>
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-green-500 relative inline-block text-3xl mb-4 mt-4"> <span className="relative text-white"> Social Link </span> </span>
                <ul className='mt-4'>
                    <li className='mt-1 mb-1 hover:text-green-500 hover:underline'>Home</li>
                    <li className='mt-1 mb-1 hover:text-green-500 hover:underline'>Product</li>
                    <li className='mt-1 mb-1 hover:text-green-500 hover:underline'>Service</li>
                    <li className='mt-1 mb-1 hover:text-green-500 hover:underline'>Become-a-Seller</li>

                </ul>
            </div>
        </>
    )
}

export default SocialLink