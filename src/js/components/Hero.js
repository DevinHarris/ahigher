import React from 'react';
import { Link } from 'react-router-dom';

const Hero = ({ bgImg, heroText, link, linkText, description, contentAlign, backgroundPos }) => (
    <div className="hero" style={{ backgroundImage: `url(${bgImg})`, justifyContent: contentAlign, backgroundPosition: backgroundPos }}>
            <div className="hero__inner">
                <h1 className="hero__heading-text">{heroText}</h1>
                <p className="hero__description">{description}</p>
                {
                    link ? <Link to={link} className="hero__link">{linkText}</Link> : null

                }
            </div>
    </div>
)

export default Hero;