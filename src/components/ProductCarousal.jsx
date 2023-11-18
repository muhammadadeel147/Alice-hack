import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
import img from "../Assets/2.PNG";
import img1 from "../Assets/NFT12.jpg";
import img2 from "../Assets/NFT4.jpg";
import img3 from "../Assets/NFT3.jpg";
import img4 from "../Assets/NFT2.jpg";
import img5 from "../Assets/NFT1.jpg";

export default function ProductCarousal() {
    const [products, setProducts] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    useEffect(() => {
        // Define product data directly within the component
        const productData = [
            {
                name: 'Product 1',
                price: 20.0,
                image: img3,
                inventoryStatus: 'INSTOCK',
            },
            {
                name: 'Product 2',
                price: 25.0,
                image: img1,
                inventoryStatus: 'LOWSTOCK',
            },
            {
                name: 'Product 1',
                price: 20.0,
                image: img2,
                inventoryStatus: 'INSTOCK',
            },
            {
                name: 'Product 2',
                price: 25.0,
                image: img3,
                inventoryStatus: 'LOWSTOCK',
            },
            {
                name: 'Product 1',
                price: 20.0,
                image: img4,
                inventoryStatus: 'INSTOCK',
            },
            {
                name: 'Product 2',
                price: 25.0,
                image: img5,
                inventoryStatus: 'LOWSTOCK',
            },
            // Add more products as needed
        ];

        setProducts(productData.slice(0, 9));
    }, []);

    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

    const productTemplate = (product) => {
        return (
            <div>
                
            <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
                <div className="mb-3">
                    <img src={product.image} alt={product.name} className="w-6 shadow-2" />
                </div>
                <div>
                    <h4 className="mb-1">{product.name}</h4>
                    <h6 className="mt-0 mb-3">${product.price}</h6>
                    <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>
                    <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                        <Button icon="pi pi-search" className="p-button p-button-rounded" />
                        <Button icon="pi pi-star-fill" className="p-button-success p-button-rounded" />
                    </div>
                </div>
            </div>
            </div>
        );
    };

    return (
        <div className="card">
            <h2 className="text-center mb-4">Some of our NFTs</h2>
            <Carousel
                value={products}
                numVisible={3}
                numScroll={3}
                responsiveOptions={responsiveOptions}
                className="custom-carousel"
                circular
                autoplay
                autoplayInterval={3000} // Adjust the interval as needed
                itemTemplate={productTemplate}
            />
        </div>
    );
}
