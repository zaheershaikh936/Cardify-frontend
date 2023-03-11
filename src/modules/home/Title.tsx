import React from 'react';

type title = {
    title: string
    description: string
}

const Title = (props: title) => {
    return (
        <>
            <div className='mt-2 mb-2'>
                <h6 className='coloum-heading text-center primart-color font-semibold'> {props.title} </h6>
                <p className='mt-2 mb-2 sm:mb-8 text-lg sm:text-3xl font-bold'> {props.description} </p>
            </div>
        </>
    );
}

export default Title