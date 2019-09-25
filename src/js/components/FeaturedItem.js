import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedItem = ({ photo, name, id }) => {

    return (
        <div className="featured-release__item">
            <h3 className="featured-release__item__name">{name}</h3>
            <img src={photo} className="featured-release__item__photo" />
            {/* <Link to={`/product/${id}`} className="featured-release__item__link">
                <h3 className="featured-release__item__name">{name}</h3>
                <img src={photo} className="featured-release__item__photo" />
            </Link> */}
        </div>
    )
}

export default FeaturedItem;