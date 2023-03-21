import React from 'react';
import List from '../../components/list/List';
import { topHeaderData } from '../../../data/headerData';

const TopHeader = () => {
    return (
        <>
            <List ul_className='hidden sm:visible bg-stone-100 py-2 px-8 text-sm sm:flex space-x-4' li_className='hover:text-green-500' data={topHeaderData} />
        </>
    );
}

export default TopHeader