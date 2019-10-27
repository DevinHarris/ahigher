import React from 'react';
import { Link } from 'react-router-dom';
import ProductContext from './ProductsContext';

class Cart extends React.Component {

    state = {
        shopifyCheckout: {},
        checkoutItems: [

        ]
    }

    componentDidMount() {
        const { client, cart } = this.context;

        const cartEl = document.querySelector('.cart');
        const removeBtns = document.querySelectorAll('.cart__remove-btn');


        cartEl.addEventListener('submit', (e) => {
            e.preventDefault();
        })

       // creating a cart

       client.checkout.create().then(cartData => {

           this.setState({
               shopifyCheckout: cartData
           })

          
           if (cart.length) {

                let checkoutItems = [...this.state.checkoutItems];
                let checkoutData = cart.map(item => {
                    return {
                        variantId: item.variantId,
                        quantity: item.quantity
                    }
                })
                console.log(checkoutData);
                checkoutItems.push(checkoutData);

                let lineItemsToAdd = [...checkoutData]
           


           client.checkout.addLineItems(cartData.id, lineItemsToAdd).then(checkout => {
                console.log(checkout);
                this.context.totalPrice = `$${checkout.totalPrice} USD`
            });



            // removeBtns.forEach(btn => {
            //     btn.addEventListener('click', (e) => {
            //         let lineItemsToRemove = [];
            //         let cartId = cartData.id;
            //         lineItemsToRemove.push(e.target.value);
            //         console.log(cartId, lineItemsToRemove);
    
            //         client.checkout.removeLineItems(cartId, lineItemsToRemove).then((checkout, err) => {
            //             console.log(checkout.lineItems);
            //         }).catch(err => console.log(err));
            //     })
            // })
        }           
       })

      
    //    client.checkout.addLineItems(this.state.shopifyCheckout.id, lineItemsToAdd).then(checkout => {
    //         console.log(checkout)
    //     });

    }
    

    handleRemoveItem = (itemId) => {
        // const { cart } = this.context;
        // let checkoutState = this.state.checkoutItems;
        // console.log('From handleRemoveItem', cart);

        // const filteredCart = checkoutState.filter(item => {
        //     return itemId !== item.variantId
        // })


        // this.setState({
        //     checkoutItems: filteredCart
        // })

        this.props.handleRemoveProduct(itemId);

    }

    render() {
        return (
            <ProductContext.Consumer>
            {
                context => (
                    <div className="cart-container">
                        <div className="cart">
                            <div className="cart__heading cart__border">
                                <Link to="/cart" className="cart__heading-link">
                                    <h1 className="cart__heading-text">Your Bag</h1>
                                </Link>
                            </div>
                            
                            {
                                context.cart.length ? (
                                    <div className="cart__inner">
                                        <div className="cart__items  cart__border">
                                            {
                                                context.cart.map((item, index) => (
                                                    <div className="cart__item" key={index}>
                                                        <Link to={item.url}>
                                                            <img src={item.img} alt="Cart Image" className="cart__item-image" />
                                                        </Link>
                                                        
                                                        <div className="cart__data">
                                                            <Link to={item.url}>
                                                                <h3 className="cart__item-name">{item.name}</h3>
                                                            </Link>
                                                            <p className="cart__item-size">{item.size}</p>
                                                            <p className="cart__item-price">{item.price}</p>
                                                            {/* <button className="cart__remove-btn" value={item.variantId} onClick={(e) => {this.handleRemoveItem(e.target.value)}}>Remove</button> */}
                                                        </div>
                                                        
                                                    </div>
                                                ))
                                            }
                                        </div>
                
                                        <div className="cart__info cart__border">
                                            <h3 className="cart__info-heading">Total</h3>
                                            <span className="cart__info-total">{context.totalPrice}</span>
                                        </div>
                                    </div>
                                ) : (
                                    <h1 className="cart__empty">Your shopping bag is currently empty. Feel free to take a look around our shop to find great deals and exclusive items!</h1>
                                )
                            }
                                
                            <div className="cart__action">
                                {
                                    context.cart.length ? <a href={this.state.shopifyCheckout.webUrl} target="_blank" className="cart__action-btn cart__action-btn--primary">Checkout</a> : null
                                }
    
                                <button className="cart__action-btn cart__action-btn--secondary cart__close-btn">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </ProductContext.Consumer>
        )
    }

}

Cart.contextType = ProductContext;

export default Cart;