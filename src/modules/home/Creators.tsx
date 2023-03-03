import React from 'react';
import { sprate } from '../../assets/images';
import CommonCard from '../card/CommonCard';
import Title from './Title';

const Creators = () => {
    return (
        <>
            <div className='container mx-auto mt-8'>
                <Title title='CREATORS' description='Three packages. Endless possibilities.' />
                <div className='grid grid-cols-4 gap-4'>
                    <CommonCard />
                    <CommonCard />
                    <CommonCard />
                    <CommonCard />
                </div>
                <img className='mt-6' src={sprate} alt="sprate" />
            </div>
        </>
    )
}

export default Creators;