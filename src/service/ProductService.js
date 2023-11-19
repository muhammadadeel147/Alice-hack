export const ProductService = {
    getProductsData() {
        return [
            {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch NFT',
        description: 'NFT Description for Bamboo Watch',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Collectibles',
        quantity: 1,
        inventoryStatus: 'INSTOCK',
        rating: 5,
    },
    {
        id: '1001',
        code: 'nvklal433',
        name: 'Black Watch NFT',
        description: 'NFT Description for Black Watch',
        image: 'black-watch.jpg',
        price: 72,
        category: 'Collectibles',
        quantity: 1,
        inventoryStatus: 'INSTOCK',
        rating: 4,
    },
    {
        id: '1002',
        code: 'zz21cz3c1',
        name: 'Blue Band NFT',
        description: 'NFT Description for Blue Band',
        image: 'blue-band.jpg',
        price: 79,
        category: 'Collectibles',
        quantity: 1,
        inventoryStatus: 'INSTOCK',
        rating: 3,
    },
    {
        id: '1003',
        code: '244wgerg2',
        name: 'Blue T-Shirt NFT',
        description: 'NFT Description for Blue T-Shirt',
        image: 'blue-t-shirt.jpg',
        price: 29,
        category: 'Collectibles',
        quantity: 1,
        inventoryStatus: 'INSTOCK',
        rating: 5,
    },
    {
        id: '1004',
        code: 'h456wer53',
        name: 'Bracelet NFT',
        description: 'NFT Description for Bracelet',
        image: 'bracelet.jpg',
        price: 15,
        category: 'Collectibles',
        quantity: 1,
        inventoryStatus: 'INSTOCK',
        rating: 4,
    },
  
]
    },
    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 6));
    },

   };

