import React, { useState } from 'react';
import { Galleria } from 'primereact/galleria';
import './Gallery.css';
import img from "../Assets/2.PNG";
import img1 from "../Assets/NFT12.jpg";
import img2 from "../Assets/NFT4.jpg";
import img3 from "../Assets/NFT3.jpg";
import img4 from "../Assets/NFT2.jpg";
import img5 from "../Assets/NFT1.jpg";
export default function Gallery() {
    const [images, setImages] = useState([
        { itemImageSrc:img5, thumbnailImageSrc: img5, alt: 'Image 1' },
        { itemImageSrc: img4, thumbnailImageSrc: img4, alt: 'Image 2' },
        { itemImageSrc:img2, thumbnailImageSrc: img2, alt: 'Image 1' },
        { itemImageSrc: img3, thumbnailImageSrc: img3, alt: 'Image 2' },
        { itemImageSrc:img4, thumbnailImageSrc: img4, alt: 'Image 1' },
        { itemImageSrc: img5, thumbnailImageSrc: img5, alt: 'Image 2' },
        // Add more image data as needed
    ]);

    const responsiveOptions = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', height: 'auto' }} />;
    };

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ maxWidth: '100%', height: 'auto' }} />;
    };

    return (
        <div className="gallery-info-container">
            <div className="gallery">
                <Galleria
                    value={images}
                    responsiveOptions={responsiveOptions}
                    numVisible={5}
                    style={{ maxWidth: '100%', width: '50%' }}
                    item={itemTemplate}
                    thumbnail={thumbnailTemplate}
                />
            </div>
           
        </div>
    );
}