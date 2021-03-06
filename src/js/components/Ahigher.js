import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Client from 'shopify-buy';
import Home from './Home';
import Product from './Product';
import Collection from './Collection';
import Shop from './Shop';
import SearchPage from './SearchPage';
import Checkout from './Checkout';
import CheckOrderStatus from './CheckOrderStatus';
import NotFoundPage from './NotFoundPage';

import data from '../data.json';
import ProductContext from './ProductsContext';

class Ahigher extends React.Component {
    state = {
        cart: [],
        totalPrice: 0,
        data,
        shopifyData: [],
        handleSearchChange: this.handleSearchChange,
        searchTerm: '',
        currentProduct: {},
        client: this.props.client
    }

    componentDidMount() {
        

        this.state.client.product.fetchAll().then(products => {
            
            this.setState({
                shopifyData: products
            })
        })

        // this.setState({
        //     cart: JSON.parse(localStorage.getItem('cart')) || []
        // })
    }

    // componentWillUnmount() {
    //         localStorage.setItem('cart', JSON.stringify(this.state.cart));
    // }

    handleSearchChange = (searchTerm) => {
        this.setState({
            searchTerm
        })
    }

    handleProductChange = (product) => {
        this.setState({
            currentProduct: product
        })
    }

    handleAddProduct = (product) => {
        let cart = [...this.state.cart];
        cart.push(product);

        this.setState({
            cart
        })

    }

    handleRemoveProduct = (productId) => {
        let cart = [...this.state.cart];
        let filteredCartData = cart.filter(item => item.id === productId);

        this.setState({
            cart: filteredCartData
        })
    }

    render() {
        return (
            <ProductContext.Provider value={this.state}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/collections/:id" component={Collection} />
                        <Route path="/shop" component={Shop} />
                        <Route path="/product/:id" component={(props) => <Product {...props} handleProductChange={this.handleProductChange} handleAddProduct={this.handleAddProduct} client={this.state.client} /> } />
                        <Route path="/search" component={SearchPage} />
                        <Route path="/checkout" component={Checkout} />
                        <Route path="/your-order" component={CheckOrderStatus}/>
                        <Route component={NotFoundPage} />
                    </Switch>
                </BrowserRouter>
            </ProductContext.Provider>
        )
    }
}

export default Ahigher;