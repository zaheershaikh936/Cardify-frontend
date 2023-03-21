import React from 'react';

enum variant {
    common
}
type IButton = {
    variant: variant
}
const Button = (props: IButton) => {
    return (
        <>
            <button className={props.variant}>
                <p className='font-bold'>Contact with us</p>
            </button>
        </>
    )
}

export { Button, variant }