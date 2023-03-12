import React from 'react';

const CommonCard = () => {
    return (
        <>
            <div id='show' className="max-w-xs bg-white rounded-lg shadow-xl hover:shadow-lg">
                <a href="#">
                    <img className="rounded-t-lg" src="https://www.dlxprint.com/img/standard_business_cards_printing_dubai.webp" alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-1xl font-semibold tracking-tight text-slate-800 ">STANDARD BUSINESS CARDS</h5>
                    </a>
                    <p className='mb-3 font-normal text-slate-400'>Smooth white card</p>
                    <hr />
                    <div className='flex space-x-4 mt-2 mb-2'>
                        <div className='text-slate-400 center-icon'>
                            <svg className="h-6 w-6 " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />  <line x1="1" y1="10" x2="23" y2="10" /></svg>
                            <p className='text-xs tracking-tight'>
                                Smooth card
                            </p>
                        </div>
                        <div className='text-slate-400 center-icon'>
                            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <polygon points="13 19 22 12 13 5 13 19" />  <polygon points="2 19 11 12 2 5 2 19" /></svg>
                            <p className='text-xs tracking-tight'>
                                Fast deliver
                            </p>
                        </div>
                        <div className='text-slate-400 center-icon'>
                            <svg className="h-6 w-6" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <rect x="4" y="4" width="16" height="16" rx="2" />  <path d="M9 12l2 2l4 -4" /></svg>
                            <p className='text-xs tracking-tight'>
                                Good quality
                            </p>
                        </div>
                        <div className='text-slate-400 center-icon'>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" /></svg>
                            <p className='text-xs tracking-tight'>
                                100 quantity
                            </p>
                        </div>
                    </div>
                    <hr />
                    <p className="mt-1 mb-1 text-sm text-slate-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <div className='hide flex bg-white gap-2 margin-top-card'>
                        <button className='mt-8 bg-slate-800 w-20 text-white h-10 rounded-lg hover:text-black hover:bg-white hover:border-2 border-black'>
                            <p className='font-bold'> Buy </p>
                        </button>
                        <button className='flex mt-8 bg-slate-800 w-20 text-white h-10 rounded-lg hover:text-black hover:bg-white hover:border-2 border-black'>
                            <svg className="ml-1 mt-2 h-6 w-6" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" /></svg>
                            <p className='ml-2 mt-2 text-md font-bold tracking-tight'>
                                Save
                            </p>
                        </button>
                        <p className='ml-6 tracking-tight font-bold text-slate-400 items-center mt-10'>$99.00</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CommonCard;