import React from 'react';
import Layout from './Layout';
import { Helmet } from 'react-helmet';

const CheckOrderStatus = ({ orderNumber }) => (
    <Layout>
        <Helmet>
            <title>{`Check your order status | Ahigher`}</title>
        </Helmet>
        <div className="order-status__page">
            <h1>Check Order Status</h1>
            <form className="form">
                <div className="form__group">
                    <input className="form__input" placeholder="Order Number" />
                </div>
            </form>
        </div>
    </Layout>
)

export default CheckOrderStatus;