import React from 'react';

type categoryCardType = {
    img: string,
    name: string
}
const CommonCard = (props: categoryCardType) => {
    return (
        <>
            <div className='category_hover'>
                <div className='rounded-xl bg-[#F8F8F8] [width:277px; height:277px] hover:shadow-lg'>
                    <img className='rounded-xl sm:[height:277px] sm:[width:100%]' src={props.img} alt={props.name} />
                </div>
                <p className='category_name mt-2 text-center text-sm sm:text-xl'>{props.name}</p>
            </div>
        </>
    );
}

export default CommonCard;