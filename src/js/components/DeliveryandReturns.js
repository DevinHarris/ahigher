import React from 'react';
import Layout from './Layout';
import { Helmet } from 'react-helmet';

const DeliveryandReturns = () => {
    return (
        <Layout>
            <Helmet>
                <title>{`Delivery and Returns | Ahigher`}</title>
            </Helmet>
            <div className="faq-page">
                <div className="delivery-page">
                <div className="delivery-cont">
                    <h1>Delivery and Shipping</h1>
                    <p>Ahigher ships from the following carriers: DHL Express, UPS, and USPS. All orders are packaged with care and shipping with the corresponding carrier to ensure you recieve your order both quickely and safely.</p>
                </div>
                <div className="return-cont">
                    <h1>Returns</h1>
                    <p>Ahigher accepts returns for defects for all of our products within 30 days of the customer recieving it. For return, delivery, or shipping inquiries feel free to email us at <a href="mailto:infoahigher@gmail.com">infoahigher@gmail.com</a></p>
                </div>
                </div>
                
            </div>
        </Layout>
    )
}

export default DeliveryandReturns;