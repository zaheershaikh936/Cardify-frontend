import React from 'react';

const Login = () => {
    return (
        <>
            <div className='sm:container sm:mx-auto sm:px-96 px:8'>
                <ul>
                    <center>
                        <li className='mt-4'>
                            <button className='text-slate-600 hover:underline border-2 border-slate-400 rounded-full sm:w-3/4 sm:h-12 flex justify-center space-x-4'>
                                <img className='mt-1 ml-1 w-4 sm:mt-3 sm:w-6' src="https://login-ui.login.vpsvc.com/login-screen/0.4.168/static/media/google.f9a3cace.svg" alt="google_image" />
                                <p className='p-1 sm:mt-3 text-xs font-semibold sm:text-sm'> Continue with Google </p>
                            </button>
                        </li>

                        <li className='mt-4'>
                            <button className='text-slate-600 hover:underline border-2 border-slate-400 rounded-full sm:w-3/4 sm:h-12 flex justify-center space-x-4'>
                                <img className='mt-1 ml-1 w-4 sm:mt-3 sm:w-6' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANbSURBVHgBxZdbSFRBGMf/M2fX22ZolKkUaIZGRlRqVkR5Q3oI6qEeghKJjOgtQl2CdLUiL0Qh9CREPQc9dXlJEwQ1zRIsAtE0C3fV8JKt7sUz05zjurm67u7JXf3BwpyZb+b7zzffzoVAAzmmwRirPbIIjGSDkGMAjwdIhKt5HhyfCWg/J+yV3ql/1/Yg9ru/MQkCIKvUfBI6els4zhM9AuqzAH0qwVnVUZMwhP8RoM7YFn0PYNexFghtYIxWdNdumQ5YQFa5OR1EeimKSQgOQxLk3OXR8Cog0zh2EJw0E8JjEEQ4MMI5O9VdG9+7qoAso2UXIH0Q5rEIDWMiEtmLkfAQkF32cwejYa3QGPbURB0K90cgKU6CIXxhyFkHx/C4jCfNVszYuGcHggFnuDWzx5Q8pVtaL9OwKqLR+ZV8A64WRHlv3AM8b58TAmTPeo6UMNumW6JU5o5ARuloCpVIPzRwOTcK1woNPm3O1k1gZFL21sSYzFPp4pckoRIaUEJ97mgk1gClOnpTXYIjRnOSDHJJS++MFD22RtMV9cO/ZLR+dag5oDAzx3yMwi+oAmRIOdBIWqJ+RZ15kqH48ST+LE+6Vf0jRp0C5/wMgsDrT7bAnbtQBYgDJAlBgGnz/U8ACN+HDWIxi3TYINR9IMs45jd4Fec34/ShcGihzyzjYsOETxtXEjI7QsDotOzXRhVACf2BENBvnvdrowpgoG0IAf2j/iOgJh9h8nsRhiJfht3fHFBPdBep8XpxCkoeNn0jMvosTvf3gMV/BNQkPGCajNHZHBZx3Qs4y0oKDCjJ9zwFG5tm0fjWCg38VpegxxQ7JTLxDdafF+7ThDPpDtYZcTOqcgvort/2kXM8wnrBebVyLfM4T+cj9VUizwYRYojw0VUTZ1LKHgKUXCB6li+KYwgRIuuHKJHFA4fwFQIUOu/GD4ILA5Cgb06Kc+hY3tK3AfVm2FWb8EXC/Am1Q7DgvJeKh4k6wSXQ1ewVlZLdvpdwUoe1eZ4Vi149Hhl32Nsbkfrq2v5w51xn7bZy8XdJFgM9E1VOBOyXTHHG62mEM63r/vbKIROxeTML6B7gUl583Dh1ww5HIeE8V6JIF3W7xU880aHsuRZDOMRuyjpkRpqio6wtLeLh4W/svyXmMvVTnFBBAAAAAElFTkSuQmCC" alt="google_image" />
                                <p className='p-1 sm:mt-3 text-xs font-semibold sm:text-sm'> Continue with Facebook </p>
                            </button>
                        </li>

                        <li className='mt-4'>
                            <button className='text-slate-600 hover:underline border-2 border-slate-400 rounded-full sm:w-3/4 sm:h-12 flex justify-center space-x-4'>
                                <img className='mt-1 ml-1 w-4 sm:mt-3 sm:w-6' src="https://login-ui.login.vpsvc.com/login-screen/0.4.168/static/media/Apple.e35bd91f.svg" alt="google_image" />
                                <p className='p-1 sm:mt-3 text-xs font-semibold sm:text-sm'> Continue with Google </p>
                            </button>
                        </li>
                    </center>
                </ul>
                <div>
                    <p className='sm:mt-4 sm:text-center or_label'>
                        <span className='or_label_text'> OR </span>
                    </p>
                    <div>
                        <form action="">
                            <center>
                                <input type="text" className='border-b-2 placeholder-slate-600 border-slate-600 w-3/4 h-6 sm:h-10 sm:p-1 sm:mt-2' placeholder='Email' />
                                <input type="password" className='mt-3 border-b-2 placeholder-slate-600 border-slate-600 w-3/4 h-6 sm:h-10 sm:p-1 sm:mt-6 ' placeholder='Password' />
                            </center>
                            <div className='sm:ml-14 text-xs px-8'>
                                <p className='underline mt-2'>Forgot password?</p>
                                <p className='mt-2 text-xs'>
                                    By signing in, you have read and agree to our Vista General Terms and Conditions. For more details on how we use the information we collect about you, please read our Vista Privacy and Cookie Policy.
                                </p>
                            </div>
                            <center className='mt-4 sm:mt-6'>
                                <button className='text-slate-600 hover:underline border-2 border-slate-400 rounded-full w-3/4 h-8 sm:h-12 flex justify-center space-x-4'>
                                    <p className='mt-2 sm:mt-3 font-semibold text-xs sm:text-sm'> Sing in </p>
                                </button>

                                <p className='text-xs mt-2 font-semibold text-slate-600'>Or</p>

                                <button className='mt-2 text-slate-600 hover:underline border-2 border-slate-400 rounded-full w-3/4 mt-3 h-8 sm:h-12 flex justify-center space-x-4'>
                                    <p className='mt-2 sm:mt-3 font-semibold text-xs sm:text-sm'> Create an account </p>
                                </button>

                            </center>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;