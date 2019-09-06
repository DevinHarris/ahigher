import React from 'react';
import Layout from './Layout';
import { ProductConsumer } from './ProductsContext';
import CollectionItems from './CollectionItems';

const Shop = () => (
    <ProductConsumer>
        {
            context => (
                <Layout>
                    <div className="shop-page__container">
                        {/* <aside className="shop-page__sidebar">
                            <h1>Sidebar</h1>
                        </aside> */}
                        <div className="shop-page__main">
                            <div className="shop-page__main-heading-container">
                                <h1 className="shop-page__main-title">Our entire range</h1>
                                <p className="shop-page__main-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at volutpat diam, a fringilla sem. Etiam vitae nisi ac dui dignissim elementum. Maecenas eget placerat ex. Etiam dictum elementum nisl et eleifend. Donec urna mi, mattis quis volutpat pretium, mollis eu nibh. Morbi at urna nec libero imperdiet tincidunt hendrerit ac nisi. Aliquam ullamcorper dapibus odio eget luctus. Etiam dignissim tristique sem, sed volutpat risus tempus quis. Donec feugiat dolor ligula, consequat iaculis dui lobortis vel. Praesent feugiat dignissim urna quis consectetur.</p>
                            </div>
                            <div className="shop-page__products-container">
                                 <CollectionItems items={context.data.products.all_products} />
                            </div>
                        </div>
                    </div>
                </Layout>
            )
        }
    </ProductConsumer>
)

export default Shop;