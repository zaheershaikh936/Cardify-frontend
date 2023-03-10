import React from 'react';

const TopHeader = () => {
    return (
        <>
            <ul className='hidden sm:visible bg-stone-100 py-2 px-8 text-sm sm:flex space-x-4'>
                <li></li>
                <li className='hover:text-green-500'> Term & Condition </li>
                <li className='hover:text-green-500'> Contact us </li>
                <li className='hover:text-green-500'> Privacy policy </li>
                <li className='hover:text-green-500'> Become-a-Seller </li>
                <li className='hover:text-green-500'> Become-a-Freelancer </li>
            </ul>
        </>
    );
}

export default TopHeader