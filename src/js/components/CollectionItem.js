import React from 'react';
import { Link } from 'react-router-dom';
import SelectSize from './SelectSize';

const CollectionItem = ({ id, imgs, name, price, sizes }) => (
        <div className="collection__items-container">
            <Link to={`/product/${id}`} className="collection__items-link">
                <div className="collection-item">
                    <img className="collection-item__photo" src={imgs[0]} onMouseOver={e => (e.currentTarget.src = imgs[1])} onMouseOut={e => (e.currentTarget.src = imgs[0])} />
                    <div className="collection-item__sizes-container">
                        <h3 className="collection-item__sizes-heading">Add to bag</h3>
                        <SelectSize sizes={sizes} className="collection-item__sizes" />
                    </div>
                    
                </div>
                <div className="collection__item-info">
                    <h1 className="collection-item__name">{name}</h1>
                    <span className="collection-item__price">{price}</span>
                </div>
            </Link>
        </div>
)
    
export default CollectionItem;

