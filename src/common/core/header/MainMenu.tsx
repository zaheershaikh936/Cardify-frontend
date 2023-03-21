import React from 'react';
import List from '../../components/list/List'

// !data import
import { mainHeaderData } from '../../../data/headerData';

const MainMenu = () => {
    return (
        <>
            <nav className='hidden sm:list-item px-8 py-2  text-sm'>
                <List ul_className='flex space-x-8 justify-center' li_className='hover:underline' data={mainHeaderData} />
            </nav>
        </>
    );
}

export default MainMenu;