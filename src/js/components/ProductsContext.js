import React from 'react';

const ProductContext = React.createContext({
    cart: [],
    products: [],
    data: {}
});

export const ProductProvider = ProductContext.Provider;
export const ProductConsumer = ProductContext.Consumer;