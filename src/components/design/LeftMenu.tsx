import React from 'react';

const LeftMenu = () => {
    return (
        <>
            <div className='text-white'>
                {/* [background-color:#151515] */}
                <ul>
                    <li className='mb-4'>
                        <button className='mt-4 w-full text-black hover:text-slate-400'>
                            <center>
                                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <polyline points="4 7 4 4 20 4 20 7" />  <line x1="9" y1="20" x2="15" y2="20" />  <line x1="12" y1="4" x2="12" y2="20" /></svg>
                                <p className='text-xs'>Text</p>
                            </center>
                        </button>
                    </li>
                    <li className='mt-4 mb-4'>
                        <button className='w-full text-black hover:text-slate-400'>
                            <center>
                                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /></svg>
                                <p className='mt-1 text-xs'>Border</p>
                            </center>
                        </button>
                    </li>
                    <li className='mt-4 mb-4'>
                        <button className='w-full text-black hover:text-slate-400'>
                            <center>
                                <svg className="h-6 w-6" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="4" y1="12" x2="20" y2="12" />  <line x1="12" y1="4" x2="12" y2="20" />  <g stroke-dasharray=".001 4">  <line x1="4" y1="4" x2="20" y2="4" />  <line x1="4" y1="20" x2="4" y2="4" />  <line x1="20" y1="20" x2="4" y2="20" />  <line x1="20" y1="4" x2="20" y2="20" />  </g></svg>
                                <p className='mt-1 text-xs'>Shadow</p>
                            </center>
                        </button>
                    </li>
                    <li className='mt-4 mb-4'>
                        <button className='w-full text-black hover:text-slate-400'>
                            <center>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" d="m6.5 4.25.75-.75a2.121 2.121 0 0 1 3 3L6.5 10.25 2.75 6.5a2.121 2.121 0 0 1 3-3l.75.75zm7 6 4-7.5 4 7.5h-8zm-10.75 3.5h7.5v7.5h-7.5v-7.5zm14.75-.25a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path></svg>
                                <p className='text-xs'>Shapes</p>
                            </center>
                        </button>
                    </li>
                    <li className='mt-4 mb-4'>
                        <button className='w-full text-black hover:text-slate-400'>
                            <center>
                                <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M15 7v-4h-12v12.01h4" stroke-dasharray=".001 4" />  <path d="M19 11v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />  <path d="M13 13l9 3l-4 2l-2 4l-3 -9" /></svg>
                                <p className='mt-1 text-xs'>Opacity</p>
                            </center>
                        </button>
                    </li>
                    <li className='mt-4 mb-4'>
                        <button className='w-full text-black hover:text-slate-400'>
                            <center>
                                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
                                <p className='mt-1 text-xs'>Copy</p>
                            </center>
                        </button>
                    </li>
                    <li className='mt-4 mb-4'>
                        <button className='w-full text-black hover:text-slate-400'>
                            <center>
                                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />  <line x1="18" y1="9" x2="12" y2="15" />  <line x1="12" y1="9" x2="18" y2="15" /></svg>
                                <p className='mt-1 text-xs'>Delete</p>
                            </center>
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default LeftMenu;