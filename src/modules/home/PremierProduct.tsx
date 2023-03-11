import react from 'react';

// !other import
import CommonCard from '../card/CommonCard';
import { sprate } from '../../assets/images/index'
import Title from './Title';

const PremierProduct = () => {
    return (
        <>
            <div className='border-t-2 border-black'>
                <div className='container mx-auto mt-8'>

                    <div className='grid grid-cols-4 gap-4'>
                        <CommonCard />
                        <CommonCard />
                        <CommonCard />
                        <CommonCard />
                    </div>
                    <img className='mt-6' src={sprate} alt="sprate" />
                </div>
            </div>
        </>
    );
}

export default PremierProduct;