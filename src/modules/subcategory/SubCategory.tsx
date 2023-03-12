import React from "react";
import { useParams } from 'react-router-dom';


// ! other import 
import SortCard from './SortCard';
import Title from "../home/Title";

const SubCategory = () => {
    const { sub_cat_name } = useParams();
    return (
        <>
            <div className="py-8 px-8 sm:py-20 sm:px-20">
                <Title title={sub_cat_name} description='From standard to specialty papers, find the right look for your card.' />
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <SortCard img="https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,q_70,w_auto:50:550/legacy_dam/en-us/S001389017/BCMX386-GBB-standard-002_en-us?cb=9ac888a84e9d97ccc6f0869c3d94d374821f792b" title="Standard" description="Traditional 14pt paper stock cards, available in matte, glossy and more." />
                    <SortCard img="https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,q_70,w_auto:50:550/legacy_dam/en-us/S001388800/BCMX386-GBB-premium-002_en-us?cb=787ede3e0f51177e2e261a78ee709e406a136ba1" title="Premium" description="Higher-quality paper stocks, with eye-catching textures and shapes." />
                    <SortCard img="https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,q_70,w_auto:50:550/legacy_dam/en-us/S001528710/MXP10525-GBB-specialty-001?cb=3cc3994ffae777ad439512ea964bb5b9dbabd3c5" title="Specialty" description="Unique options including plastic, embossed gloss and more." />
                </div>
            </div>
        </>
    )
}

export default SubCategory;
