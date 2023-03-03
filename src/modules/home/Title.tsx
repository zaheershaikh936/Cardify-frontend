import React from 'react';

type title = {
    title: string
    description: string
}

const Title = (props: title) => {
    return (
        <>
            <center>
                <h6 className='coloum-heading text-center primart-color font-semibold'> {props.title} </h6>
                <p className='mt-2 mb-6 text-3xl font-bold'> {props.description} </p>
            </center>
        </>
    );
}

export default Title