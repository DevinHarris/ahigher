import React from 'react';
import Layout from './Layout';
import { ProductConsumer } from './ProductsContext';

const SearchPage = (props) => {
    console.log(props);
    return (
        <Layout>
            <h1>Search Page</h1>
        </Layout>
    )
}

export default SearchPage;