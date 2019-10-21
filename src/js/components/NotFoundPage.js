import React from 'react';
import Layout from './Layout';

const NotFoundPage = () => (
    <Layout>
        <div className="not-found-page">
           <div className="not-found-page__container">
                <h1 className="not-found-page__header">Oh, No.</h1>
                <p className="not-found-page__text">We're sorry, but that page wasn't found.</p>
           </div>
        </div>
    </Layout>
)

export default NotFoundPage;