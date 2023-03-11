import React from 'react';

type categoryCardType = {
    img: string,
    name: string
}
const CategoryCard = (props: categoryCardType) => {
    return (
        <>
            <div className='category_hover'>
                <div className='rounded-xl bg-gray-200 hover:shadow-lg'>
                    <img className='rounded-xl' src={props.img} alt={props.name} />
                </div>
                <p className='category_name mt-2 text-center text-lg sm:text-xl'>{props.name}</p>
            </div>
        </>
    );
}

export default CategoryCard;