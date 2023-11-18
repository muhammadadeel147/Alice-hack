import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { SelectButton } from 'primereact/selectbutton';
import img from "../Assets/7.png"
import img1 from "../Assets/8.png"
import img2 from "../Assets/3.png"
import img3 from "../Assets/4.png"
import img4 from "../Assets/5.png"
import img5 from "../Assets/6.png"
export default function DataProduct() {
    const [products, setProducts] = useState([]);
    const [selectedOption, setSelectedOption] = useState('latest'); // Default option is 'latest'

    useEffect(() => {
        const productData = [
            {
                name: 'Product 1',
                price: 20.0,
                category: 'Electronics',
                rating: 4,
                inventoryStatus: 'INSTOCK',
                image: img,
            },
            {
                name: 'Product 1',
                price: 20.0,
                category: 'Electronics',
                rating: 4,
                inventoryStatus: 'INSTOCK',
                image: img1,
            },   {
                name: 'Product 1',
                price: 20.0,
                category: 'Electronics',
                rating: 4,
                inventoryStatus: 'INSTOCK',
                image: img2,
            },   {
                name: 'Product 1',
                price: 20.0,
                category: 'Electronics',
                rating: 4,
                inventoryStatus: 'INSTOCK',
                image: img3,
            },   {
                name: 'Product 1',
                price: 20.0,
                category: 'Electronics',
                rating: 4,
                inventoryStatus: 'INSTOCK',
                image: img4,
            },   {
                name: 'Product 1',
                price: 20.0,
                category: 'Electronics',
                rating: 4,
                inventoryStatus: 'INSTOCK',
                image: img5,
            },
        ];

        setProducts(productData);
    }, []);

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const priceBodyTemplate = (product) => {
        return formatCurrency(product.price);
    };

    const ratingBodyTemplate = (product) => {
        return <Rating value={product.rating} readOnly cancel={false} />;
    };

    const statusBodyTemplate = (product) => {
        return <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>;
    };

    const imageBodyTemplate = (product) => {
        return <img src={product.image} alt={product.name} className="product-image" />;
    };

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

    const header = (
        <div className="flex flex-wrap align-items-center justify-content-between gap-2">
            <SelectButton
                value={selectedOption}
                options={[{ label: 'Latest', value: 'latest' }, { label: 'Trending', value: 'trending' }]}
                onChange={(e) => setSelectedOption(e.value)}
            />
            <span className="text-xl text-900 font-bold">Products</span>
            <Button icon="pi pi-refresh" rounded raised />
        </div>
    );

    const footer = `In total there are ${products ? products.length : 0} products.`;

    return (
        <div className="card p-8" style={{ backgroundColor: "#E4E5FD" }}>
            <DataTable value={products} header={header} footer={footer} tableStyle={{ minWidth: '60rem' }}>
                <Column field="name" header="Name"></Column>
                <Column field="image" header="Image" body={imageBodyTemplate}></Column>
                <Column field="price" header="Price" body={priceBodyTemplate}></Column>
                <Column field="category" header="Category"></Column>
                <Column field="rating" header="Reviews" body={ratingBodyTemplate}></Column>
                <Column header="Status" body={statusBodyTemplate}></Column>
            </DataTable>
        </div>
    );
}
