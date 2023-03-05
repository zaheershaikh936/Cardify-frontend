import React from 'react';

const Footer = () => {
    return (
        <>
            <div className='mt-8 bg-black text-white'>
                <div className='container mx-auto grid grid-cols-3 gap-4 mt-6'>
                    <div className='mt-4 text-black'>
                        <p className='text-normal text-white'> Contact Us </p>
                        <form action="">
                            <input type="text" name="name" className="mt-1 mb-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Name" />
                            <input type="email" name="email" className="mt-1 mb-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Email" />
                            <input type="text" name="subject" className="mt-1 mb-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 foceus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Subject" />
                            <textarea name="message" className="mt-1 mb-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1">
                                Your Message
                            </textarea>
                            <center>
                                <button type='button' className='text-white w-60 mt-1 h-10 border border-white rounded hover:bg-white hover:text-black'> Submit </button>
                            </center>
                        </form>
                    </div>
                    <div className='text-center mt-20'>start creating you customize</div>
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