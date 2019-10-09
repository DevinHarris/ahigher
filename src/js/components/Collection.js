import React from 'react';
import Layout from './Layout';
import ProductContext from './ProductsContext';
import CollectionItems from './CollectionItems';

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
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut neque pulvinar, feugiat enim vel, interdum ipsum. Donec eget est nec arcu fringilla sagittis condimentum non ligula. Aliquam erat volutpat. In hac habitasse platea dictumst. In quis ante quis dui consectetur aliquam quis eget velit. Vivamus congue porta nisi, ac posuere erat mollis non. Duis molestie, leo eget imperdiet condimentum, leo nisl bibendum sapien, vitae ultrices nisi nibh in lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque sit amet massa quis turpis tincidunt luctus non in ex.
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
                                            selectedCollection.videos ? (
                                                <div>
                                                    <div className="collection__video-container collection__doc-video">
                                                        <video controls>
                                                            <source src={selectedCollection.videos[1]} type="video/mp4"></source>
                                                        </video>
                                                    </div>
                                                    <span className="collection__video-caption">Short documentary about the inspirations behind the upcoming collection.</span>
                                                 </div>
                                            ) : null
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