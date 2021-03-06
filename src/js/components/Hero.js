import React from 'react';
import { Link } from 'react-router-dom';

const Hero = ({ bgImg, heroText, link, linkText, description, contentAlign }) => (
    <div className="hero" style={{ backgroundImage: `url(${bgImg})`, justifyContent: contentAlign }}>
            <div className="hero__inner">
                <h1 className="hero__heading-text">{heroText}</h1>
                <p className="hero__description">{description}</p>
                <Link to={link} className="hero__link">{linkText}</Link>
            </div>
    </div>
)

export default Hero;