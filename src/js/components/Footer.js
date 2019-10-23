import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
    <footer className="footer">
        <div>
            <h1 className="nav__logo footer__logo">
                <a href="/">Ahigher</a>
            </h1>

            <div className="footer__link-container">
                <div className="footer__link-col">
                    <h3 className="footer__link-heading">Help</h3>
                    <ul className="footer__links">
                        <li className="footer__link">
                            <Link to="/faq">FAQs</Link>
                        </li>
                        <li className="footer__link">
                            <Link to="/delivery">Delivery and Returns</Link>
                        </li>
                        <li className="footer__link">
                            <Link to="/size-guides">Size Guides</Link>
                        </li>
                        <li className="footer__link">
                            <Link to="/your-order">Check Order Status</Link>
                        </li>
                    </ul>
                </div>

                <div className="footer__link-col">
                    <h3 className="footer__link-heading">Collections</h3>
                    <ul className="footer__links">
                        <li className="footer__link">
                            <Link to="/collections/breath-of-life">Breath of Life</Link>
                        </li>
                        {/* <li className="footer__link">
                            <Link to="/collections/olympics">2020 Olynpics (Preview)</Link>
                        </li> */}
                    </ul>
                </div>

                <div className="footer__link-col">
                    <h3 className="footer__link-heading">Pages</h3>
                    <ul className="footer__links">
                        <li className="footer__link">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="footer__link">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>

                

                <div className="footer__link-col">
                    <h3 className="footer__link-heading">Social</h3>
                    <ul className="footer__links">
                        <li className="footer__link social__links">
                           <a href="https://instagram.com/ahigher_clothing" target="_blank">
                               <FontAwesomeIcon icon={faInstagram} />
                           </a>
                        </li>
                        {/* <li className="footer__link social__links">
                           <a href="https://www.twitter.com" target="_blank">
                               <FontAwesomeIcon icon={faTwitter} />
                           </a>
                        </li> */}
                        <li className="footer__link social__links">
                           <a href="https://www.facebook.com/AhigherClothing/" target="_blank">
                               <FontAwesomeIcon icon={faFacebookF} />
                           </a>
                        </li>
                        {/* <li className="footer__link social__links">
                           <a href="https://www.youtube.com" target="_blank">
                               <FontAwesomeIcon icon={faYoutube} />
                           </a>
                        </li> */}
                    </ul>
                </div>

                {/* <div className="footer__link-col">
                    <h3 className="footer__link-heading">Sign Up for news and updates</h3>
                    <div className="footer__signup-form-container">
                        <form className="footer__signup-form">
                            <input type="email" placeholder="Email" className="footer__signup-form__input" />
                        </form>
                    </div>
                </div> */}

                
            </div>
        </div>
    </footer>
)

export default Footer;