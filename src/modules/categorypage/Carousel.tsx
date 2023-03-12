import React from "react";


type Params = {
    category: string | undefined
}
const Carousel = (props:Params) => {
    return (
        <>
            <div className="w-full text-white mt-4 grid grid-cols-1 sm:grid-cols-2 [background-image:url(https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,q_auto:good,w_1700/legacy_dam/en-us/S001334362/MXMM194-Category-Page-Marquee-Finalcopy-001?cb=5e2f723ad08f4274c3a639b861852694843fa16c)]">
                <div className="py-8 px-8 sm:py-40 sm:px-40">
                    <p className="text-2xl sm:text-5xl font-bold">{ props.category}</p>
                    <p className="mt-2 text-sm sm:text-lg">Customizable designs, papers, shapes & more. Find the right card for you.</p>
                    <div className="flex space-x-4">
                        <button className="mt-4 bg-white text-black w-32 h-10 rounded-full"> Click </button>
                        <button className="mt-4 bg-white text-black w-32 h-10 rounded-full"> Click </button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Carousel;