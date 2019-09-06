import React from 'react';
import { Link } from 'react-router-dom';

const MinHero = ({ bgImg, contentAlign }) => (

    <div className="min-hero" style={{ backgroundImage: `url(${bgImg})`, justifyContent: contentAlign }}>
        <div className="min-hero__inner">
            <h2 className="min-hero__heading">20% off your next order</h2>
            <Link to="/shop" className="btn">Shop Now</Link>
        </div>
    </div>
)

export default MinHero;