import React from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from './ProductsContext';

class Cart extends React.Component {

    componentDidMount() {
        const cartEl = document.querySelector('.cart');


        cartEl.addEventListener('submit', (e) => {
            e.preventDefault();
        })

    }

    render() {
        return (
            <ProductConsumer>
            {
                context => (
                    <div className="cart-container">
                        <form className="cart">
                            <div className="cart__heading cart__border">
                                <Link to="/cart" className="cart__heading-link">
                                    <h1 className="cart__heading-text">Your Bag</h1>
                                </Link>
                            </div>
                            <div className="cart__items  cart__border">
                                {
                                    context.cart.map(item => (
                                        <div className="cart__item">
                                            <Link to={item.url}>
                                                <img src={item.img} alt="Cart Image" className="cart__item-image" />
                                            </Link>
                                            
                                            <div className="cart__data">
                                                <Link to={item.url}>
                                                    <h3 className="cart__item-name">{item.name}</h3>
                                                </Link>
                                                <p className="cart__item-size">{item.size}</p>
                                                <p className="cart__item-price">{item.price}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
    
                            <div className="cart__info cart__border">
                                <h3 className="cart__info-heading">Total</h3>
                                <span className="cart__info-total">$310.00 USD</span>
                            </div>
    
                            <div className="cart__action">
                                <Link to="/checkout" className="cart__action-btn cart__action-btn--primary">
                                    Checkout
                                </Link>
    
                                <button className="cart__action-btn cart__action-btn--secondary cart__close-btn">
                                    Close
                                </button>
                            </div>
                        </form>
                    </div>
                )
            }
        </ProductConsumer>
        )
    }

}

export default Cart;