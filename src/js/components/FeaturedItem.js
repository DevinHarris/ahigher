import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedItem = ({ mediaSrc, name, id, isVideo }) => {

    return (
        <div className="featured-release__item">
            <h3 className="featured-release__item__name">{name}</h3>

            {
                isVideo ? (
                    <video autoPlay loop muted playsinline className={isVideo ? 'featured-release__item__video' : ''}>
                        <source src={mediaSrc} type="video/mp4"></source>
                    </video>
                ) : <img src={mediaSrc} className="featured-release__item__photo" />
            }
           
            {/* <Link to={`/product/${id}`} className="featured-release__item__link">
                <h3 className="featured-release__item__name">{name}</h3>
                <img src={photo} className="featured-release__item__photo" />
            </Link> */}
        </div>
    )
}

export default FeaturedItem;