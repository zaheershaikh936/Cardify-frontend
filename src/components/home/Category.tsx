import React from 'react';
import { Link } from 'react-router-dom'

// !other import
import CategoryCard from '../../common/components/card/CommonCard';
import Title from '../../common/components/title/Title';

const Category = () => {
    return (
        <>
            <div className='px-8 sm:px-20 mt-6'>
                <Title title="CATEGORY'S" description='Three packages. Endless possibilities.' />
                <div className='grid grid-cols-2 md:grid md:grid-cols-6 gap-6'>
                    <Link to="/category/business_cart">
                        <CategoryCard img='https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001568444/MXP13105-Solution-1-ProductTile-RCBC-001?cb=c50c6063520adddb52b05209ec0b810d23c50f41' name='Business Card' />
                    </Link>
                    <Link to="/category/Flyers">
                        <CategoryCard img='https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001579264/MXP-16892-Flyers-product-tile-002?cb=60201e1439fcd511cf532887676eacc77fb8d6c8' name='Flyers' />
                    </Link>
                    <CategoryCard img='https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001579179/MXP-16892-custom-size-banners-product-tile-001?cb=09a70733a5b235c93b3eeb569ec6f70bcc78f652' name='Custom Size Vinyl Banners' />
                    <CategoryCard img='https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001579276/MXP-16892-product-tile-roll-labels-002?cb=0da6e4e0f2f5dd93f8f1c371d4cf5479a578dbca' name='Roll Labels' />
                    <CategoryCard img='https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001534485/MXP-9901-Presentation-Folders-Product-Tile-002?cb=2a2903a252499d6083942305322b6185c30c1264' name='Presentation Folders' />
                    <CategoryCard img='https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001579273/MXP-16892-Brochures-ProductTile-001?cb=5d97b1d57b50947187455f3372223a41cccba7f2' name='Brochures' />
                    <CategoryCard img='https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001568444/MXP13105-Solution-1-ProductTile-RCBC-001?cb=c50c6063520adddb52b05209ec0b810d23c50f41' name='Business Card' />
                    <CategoryCard img='https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001579264/MXP-16892-Flyers-product-tile-002?cb=60201e1439fcd511cf532887676eacc77fb8d6c8' name='Flyers' />
                    <CategoryCard img='https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001579179/MXP-16892-custom-size-banners-product-tile-001?cb=09a70733a5b235c93b3eeb569ec6f70bcc78f652' name='Custom Size Vinyl Banners' />
                    <CategoryCard img='https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001579276/MXP-16892-product-tile-roll-labels-002?cb=0da6e4e0f2f5dd93f8f1c371d4cf5479a578dbca' name='Roll Labels' />
                    <CategoryCard img='https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001534485/MXP-9901-Presentation-Folders-Product-Tile-002?cb=2a2903a252499d6083942305322b6185c30c1264' name='Presentation Folders' />
                    <CategoryCard img='https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001579273/MXP-16892-Brochures-ProductTile-001?cb=5d97b1d57b50947187455f3372223a41cccba7f2' name='Brochures' />
                </div>
            </div>
        </>
    )
}

export default Category