import react from 'react';

// ! image import
import { customize } from '../../assets/images';

const Customized = () => {
    return (
        <>
            <div>
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-green-500 relative inline-block text-3xl mb-4 mt-4"> <span className="relative text-white"> Customized </span> </span>
                <img src={customize} alt="customize" />
                <ul className='text-left text-md list_custom'>
                    <li className='mt-1 mb-1'> Sodales netus enim nam malesuada </li>
                    <li className='mt-1 mb-1'> Sodales netus enim nam malesuada. </li>
                    <li className='mt-1 mb-1'> Mauris vivamus et ante aliquam velit praesent.</li>
                </ul>
            </div>
        </>
    )
}

export default Customized;