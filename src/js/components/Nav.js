import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import ProductsContext from './ProductsContext';

// import SearchBar from './SearchBar';
import ProductContext from './ProductsContext';

class Nav extends React.Component {

    componentDidMount() {
        // const searchIcon = document.querySelector('.search-icon');
        // const searchEl = document.querySelector('.search-container');

        const cartIcon = document.querySelector('.cart__icon');
        const cartClostBtn = document.querySelector('.cart__close-btn');
        const cartEl = document.querySelector('.cart-container');


        // searchIcon.addEventListener('click', () => {
        //     searchEl.classList.toggle('searchbar-visible');
        // })

        cartIcon.addEventListener('click', () => {
            cartEl.classList.toggle('cart-visible');
        })

        cartClostBtn.addEventListener('click', () => {
            cartEl.classList.toggle('cart-visible');
        })


    }
    
    render() {
        return (
           <ProductContext.Consumer>
                {
                    context => (
                        <nav className="nav">
                            <ul className="nav__links">
                                {/* <li className="nav__link-item">
                                    <Link to="/collections/men" className="nav__link">Men</Link>
                                </li>
                                <li className="nav__link-item">
                                    <Link to="/collections/women" className="nav__link">Women</Link>
                                </li> */}
                                <li className="nav__link-item">
                                    <Link to="/shop" className="nav__link">Shop</Link>
                                </li>
                                {/* <li className="nav__link-item">
                                    <Link to="/collections" className="nav__link">Collections</Link>
                                </li> */}
                            </ul>
                            <h1 className="nav__logo">
                                <Link to="/">Ahigher</Link>
                            </h1>
                            <ul className="nav__links">
                                {/* <li className="nav__link-item">
                                    <button className="nav__action nav__action--btn search-icon">
                                        <FontAwesomeIcon icon={faSearch} />
                                    </button>
                                </li> */}
                                <li className="nav__link-item">
                                    <Link to="#" className="nav__action cart__icon">
                                        <FontAwesomeIcon icon={faShoppingBag}/>
                                        { context.cart.length ? <span className="cart__count">{context.cart.length}</span> : null }
                                    </Link>
                                </li>
                            </ul>
                            
                            {/* <SearchBar /> */}
                        </nav>
                    )
                }
           </ProductContext.Consumer>
        )
    }
}

export default Nav;