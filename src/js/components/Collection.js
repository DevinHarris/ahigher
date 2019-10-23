import React from 'react';
import Layout from './Layout';
import ProductContext from './ProductsContext';
import CollectionItems from './CollectionItems';
import { Helmet } from 'react-helmet';
const Collection = ({ match }) => {
    


    return (
        <ProductContext.Consumer>
            {
                context => {

                    const data = context.data.products.collections;
                    const selectedCollection = data.find(collection => {
                        return match.params.id === collection.slug;
                    })

                    console.log(selectedCollection);
                   return (
                    <Layout>
                        <Helmet>
                            <title>{`${selectedCollection.page_title}. | A collection by Ahigher.`}</title>
                        </Helmet>
                        <div className="collection-container">
                                <h1 className="collection__name">{selectedCollection.page_title}</h1>
                                <div className="collection__video-container">
                                    <video autoPlay muted loop>
                                        <source src={selectedCollection.videos[0]} type="video/mp4"></source>
                                    </video>
                                    <span className="collection__video-caption">Models are wearing selected picks from the collection.</span>
                                </div>
                                <div className="collection__text">
                                    <p>
                                        { selectedCollection.collection_text }
                                    </p>
                                </div>
                                <div className="collection__photos">

                                    {
                                        selectedCollection.imgs.map(img => (
                                            <div className="collection__photo-container">
                                                <img src={img} alt="End Racism Photo" className="collection__photo"/>
                                            </div>
                                        ))
                                    }
                                    
                                </div>

                                
                                        {
                                            // selectedCollection.videos ? (
                                            //     <div>
                                            //         <div className="collection__video-container collection__doc-video">
                                            //             <video controls>
                                            //                 <source src={selectedCollection.videos[1]} type="video/mp4"></source>
                                            //             </video>
                                            //         </div>
                                            //         <span className="collection__video-caption">Short documentary about the inspirations behind the upcoming collection.</span>
                                            //      </div>
                                            // ) : null
                                        }
                        
                                <div className="collection__items-page">
                                    <h1 className="collection__items-name">Shop the collection.</h1>
                                    <CollectionItems items={context.shopifyData} />
                                </div>
                            </div>
                        </Layout>
                   )
                }
            }
        </ProductContext.Consumer>
    )
}

export default Collection;