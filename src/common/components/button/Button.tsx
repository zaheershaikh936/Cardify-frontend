import React from 'react'
const Button = (props: any) => {
    return (
        <>
            <button className={props.variant}>
                <p className='font-bold'>Contact with us</p>
            </button>
        </>
    )
}

export default Button 