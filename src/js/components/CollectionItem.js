import React from 'react';
import { Link } from 'react-router-dom';
import ProductContext from './ProductsContext';
import SelectSize from './SelectSize';

const CollectionItem = ({ id, handle, images, title, options, variants }) => {
        
        return (
            <ProductContext.Consumer>
                {
                    context => (
                        <div className="collection__items-container" key={id}>
                            <Link to={`/product/${handle}`} className="collection__items-link">
                                <div className="collection-item">
                                    <img className="collection-item__photo" src={images[0].src} onMouseOver={e => (e.currentTarget.src = images[1].src)} onMouseOut={e => (e.currentTarget.src = images[0].src)} />
                                    <div className="collection-item__sizes-container">
                                        <h3 className="collection-item__sizes-heading">Add to bag</h3>
                                        <SelectSize variantsData={variants} className="collection-item__sizes" />
                                    </div>
                                    
                                </div>
                                <div className="collection__item-info">
                                    <h1 className="collection-item__name">{title}</h1>
                                    <span className="collection-item__price">{`$${variants[0].price} ${variants[0].priceV2.currencyCode}`}</span>
                                </div>
                            </Link>
                        </div>
                    )
                }
            </ProductContext.Consumer>
        )
}
    
export default CollectionItem;

