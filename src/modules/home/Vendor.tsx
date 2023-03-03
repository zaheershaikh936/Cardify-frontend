import React from 'react';
import CommonCard from '../card/CommonCard';
import Title from './Title';
import { sprate } from '../../assets/images/index';

const Vendor = () => {
    return (
        <>
            <div className='container mx-auto mt-8'>
                <Title title='VENDOR' description='Three packages. Endless possibilities.' />
                <div className='grid grid-cols-4 gap-4'>
                    <CommonCard />
                    <CommonCard />
                    <CommonCard />
                    <CommonCard />
                </div>
                <img className='mt-6' src={sprate} alt="sprate" />
            </div>
        </>
    );
}

export default Vendor