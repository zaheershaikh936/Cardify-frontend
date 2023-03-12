import React from "react";
import { Link } from 'react-router-dom'


// ! other import
import Title from "../home/Title";
import SubCategoryCard from '../card/CommonCard'

type SubCategory = {
    category: string | undefined
}

const SubCategory = (props: SubCategory) => {
    return (
        <>
            <div className="sm:px-20 sm:py-20">
                <Title title={props.category} description="Description sub Category business card" />
                <div className=" grid grid-cols-2 gap-4 sm:grid-cols-6">
                    <Link to="/subcategory/Durable_Business_Cards">
                        <SubCategoryCard img='https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,q_auto:good,w_900/legacy_dam/en-ie/S001476432/MXP1484-bc-durable-overview-001?cb=e922fff3063fb856982e1ac725b719335fed3895' name='Durable Business Cards' />
                    </Link>
                    <Link to="/subcategory/NFC Chip">
                        <SubCategoryCard img='https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,q_70,w_auto:50:550/legacy_dam/en-us/S001513142/MXP3003-BC-CAT-T5-nfc-001?cb=08c5b0f9f26a175907b22191bb7c16acc379cc84' name='NFC Chip' />
                    </Link>
                    <SubCategoryCard img='https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,q_70,w_auto:50:550/legacy_dam/en-us/S001426175/MXP194-BC-CAT-T5-qr-001?cb=df9e0f8d41268dd66c0ecd725a328ade489132f0' name='QR Code Business Cards' />
                    <SubCategoryCard img='https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,q_70,w_auto:50:550/legacy_dam/en-us/S001373865/BCMX353-BC-CAT-T5-plastic-001?cb=6c377ed8b777912f21ffdc66ce8b7a8ed0763022' name='Plastic' />
                    <SubCategoryCard img='https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,q_70,w_auto:50:550/legacy_dam/en-us/S001441308/MXP22-bc-options-paintededge?cb=7e63788e4691f7befe8ace2a471a401c0e329bca' name='Painted Edge' />
                    <SubCategoryCard img='https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,q_70,w_auto:50:550/legacy_dam/en-us/S001371775/BCMX355-BC-CAT-T5-magnet-001?cb=470e150eb538e3b694bbba7a0208d6e9cfa22fdb' name='Magnetic Business Cards' />
                    <SubCategoryCard img='https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,q_70,w_auto:50:550/legacy_dam/en-us/S001370028/BCMX356-BC-CAT-T5-stickers-001?cb=fe0204a8415b158e679f93db4ed55e1799c53c1a' name='Business Card Stickers' />
                    <SubCategoryCard img='https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001579264/MXP-16892-Flyers-product-tile-002?cb=60201e1439fcd511cf532887676eacc77fb8d6c8' name='Flyers' />
                    <SubCategoryCard img='https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001579179/MXP-16892-custom-size-banners-product-tile-001?cb=09a70733a5b235c93b3eeb569ec6f70bcc78f652' name='Custom Size Vinyl Banners' />
                    <SubCategoryCard img='https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001579276/MXP-16892-product-tile-roll-labels-002?cb=0da6e4e0f2f5dd93f8f1c371d4cf5479a578dbca' name='Roll Labels' />
                    <SubCategoryCard img='https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001534485/MXP-9901-Presentation-Folders-Product-Tile-002?cb=2a2903a252499d6083942305322b6185c30c1264' name='Presentation Folders' />
                    <SubCategoryCard img='https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001579273/MXP-16892-Brochures-ProductTile-001?cb=5d97b1d57b50947187455f3372223a41cccba7f2' name='Brochures' />
                </div>
            </div>
        </>
    )
}

export default SubCategory; 