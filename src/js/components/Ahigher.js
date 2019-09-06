import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Product from './Product';
import Collection from './Collection';
import Shop from './Shop';
import SearchPage from './SearchPage';
import Checkout from './Checkout';
import CheckOrderStatus from './CheckOrderStatus';

import data from '../data.json';
import { ProductProvider } from './ProductsContext';

class Ahigher extends React.Component {
    state = {
        cart: [
            {
                name: "End Racism Tee - Blue",
                size: "M",
                price: "$20.00",
                img: '../public/img/er-1.jpg',
                url: '/product/542352'
            },

            {
                name: "End Racism Pants - Black",
                size: "M",
                price: "$25.00",
                img: '../public/img/er-3.jpg',
                url: '/product/975367'
            },

            {
                name: "End Racism Hat",
                size: "One Size - Fitted",
                price: "$15.00",
                img: '../public/img/er-collection-page-hat-3.jpg',
                url: '/product/345867'
            },

            {
                name: "End Racism Jacket",
                size: "L",
                price: "$250.00",
                img: '../public/img/er-collection-page-jacket-3.jpg',
                url: '/product/657456'
            }
        ],
        data,
        handleSearchChange: this.handleSearchChange,
        searchTerm: ''
    }

    handleSearchChange = (searchTerm) => {
        this.setState({
            searchTerm
        })
    }

    render() {
        return (
            <ProductProvider value={this.state}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/collections/:id" component={Collection} />
                        <Route path="/shop" component={Shop} />
                        <Route path="/product/:id" component={Product} />
                        <Route path="/search" component={SearchPage} />
                        <Route path="/checkout" component={Checkout} />
                        <Route path="/your-order" component={CheckOrderStatus}/>
                    </Switch>
                </BrowserRouter>
            </ProductProvider>
        )
    }
}

export default Ahigher;