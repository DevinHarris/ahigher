import React from 'react';
import Layout from './Layout';
import ProductContext from './ProductsContext';
import CollectionItems from './CollectionItems';
import { Helmet } from 'react-helmet';

const Shop = () => (
    <ProductContext.Consumer>
        {
            context => {
                console.log('ShopifyData', context.shopifyData);

                return (
                    <Layout>
                        <Helmet>
                            <title>{`Shop`}</title>
                        </Helmet>
                        <div className="shop-page__container">
                            {/* <aside className="shop-page__sidebar">
                                <h1>Sidebar</h1>
                            </aside> */}
                            <div className="shop-page__main">
                                <div className="shop-page__main-heading-container">
                                    <h1 className="shop-page__main-title">Our entire range</h1>
                                    <p className="shop-page__main-description">Each one of our products is crafted with premium materials, attention to detail, and inspiration which can be felt when wearing one of our exclusive pieces.</p>
                                </div>
                                <div className="shop-page__products-container">
                                    <CollectionItems items={context.shopifyData} />
                                </div>
                            </div>
                        </div>
                    </Layout>
                )
            }
        }
    </ProductContext.Consumer>
)

export default Shop;