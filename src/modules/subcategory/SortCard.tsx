import React from "react";

type SortCard = {
    img: string,
    title: string,
    description: string,
}
const SortCard = (props:SortCard) => {
    return (
        <>
            <div className="bg-[#F8F8F8] rounded-xl">
                    <div className="">
                        <img className="hover:shadow-xl w-full rounded-xl" src={props.img} alt="alt" />
                    </div>
                    <div className="px-2 py-2 sm:px-4 sm:py-4">
                    <p className="mt-2 mb-2 text-3xl font-semibold">{props.title}</p>
                    <p className="mt-2 mb-2 sm:text-md">{props.description}</p>
                        <button className="rounded-full border-2 border-gray mt-2 mb-2 w-40 h-12 bg-white text-black"> Sort </button>
                    </div>
                </div>
        </>
    )
}

export default SortCard;