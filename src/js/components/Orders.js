import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from './Layout';

const Orders = () => (
    <Layout>
        <Helmet>
            <title>{`Orders | Ahigher`}</title>
        </Helmet>
        <div className="faq-page">
        <div className="orders-page">
            <div className="order-page__cont">
                <h1>Orders</h1>
                <p className="order-page__desc">All orders will be processed and shipped within 1-3 business days.</p>
            </div>
        </div>
    </div>
    </Layout>
    
)

export default Orders;