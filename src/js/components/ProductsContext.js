import React from 'react';

const ProductContext = React.createContext({
    cart: [],
    products: [],
    shopifyData: [],
    data: {}
});

export default ProductContext;

// export const ProductProvider = ProductContext.Provider;
// export const ProductConsumer = ProductContext.Consumer;