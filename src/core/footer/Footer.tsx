import React from 'react';
import { customize } from '../../assets/images/index' 
const Footer = () => {
    return (
        <>
            <div className='mt-8 bg-black text-white'>
                <div className='container mx-auto grid grid-cols-3 gap-16 mt-6'>
                    <div className='mt-4 text-black'>
                        <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-green-500 relative inline-block text-3xl mb-4"> <span className="relative text-white"> Contact Us </span> </span>
                        <form action="">
                            <input type="text" name="name" className="mt-1 mb-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Name" />
                            <input type="email" name="email" className="mt-1 mb-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Email" />
                            <input type="text" name="subject" className="mt-1 mb-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Subject" />
                            <textarea name="message" className="mt-1 mb-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1">
                                Your Message
                            </textarea>
                            <center>
                                <button type='button' className='text-white w-60 mt-1 h-10 border border-white rounded hover:text-white hover:bg-[#6AC760]'> Submit </button>
                            </center>
                        </form>
                    </div>
                    <div className=''>
                        <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-green-500 relative inline-block text-3xl mb-4 mt-4"> <span className="relative text-white"> Customized </span> </span>
                        <center><img src={customize} alt="customize" /></center>
                        <ul className='text-left text-md list_custom'>
                            <li> Sodales netus enim nam malesuada </li>
                            <li>Sodales netus enim nam malesuada. </li>
                            <li>Mauris vivamus et ante aliquam velit praesent.</li>
                        </ul>
                    </div>
                    <div>

                    </div>
                    <br /><br />
                    <br /><br />
                    <br /><br />
                    <br /><br />
                </div>
            </div>
        </>
    ); 
}

export default Footer;