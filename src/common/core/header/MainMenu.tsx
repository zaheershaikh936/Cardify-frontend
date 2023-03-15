import React from 'react';

const MainMenu = () => {
    return (
        <>
            <nav className='hidden sm:list-item px-8 py-2  text-sm'>
                <ul className='flex space-x-8 justify-center'>
                    <li className='hover:underline'>Business Cards</li>
                    <li className='hover:underline'>Postcards & Print Advertising</li>
                    <li className='hover:underline'>Signs, Banners & Posters</li>
                    <li className='hover:underline'>Labels, Stickers & Packaging</li>
                    <li className='hover:underline'>Home & Gifts</li>
                    <li className='hover:underline'>Invitations & Stationery</li>
                    <li className='hover:underline'>Clothing & Bags</li>
                    <li className='hover:underline'>Promotional Products</li>
                    <li className='hover:underline'>Websites by Vista x Wix</li>
                    <li className='hover:underline'>Design & Logo</li>
                    <li className='hover:underline'>New Arrivals</li>
                </ul>
            </nav>
        </>
    );
}

export default MainMenu;