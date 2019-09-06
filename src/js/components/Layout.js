import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Cart from './Cart';

const Layout = ({ children }) => (

    <div className="container">
        <Cart />
        <Header />
        <div className="layout__container">
            { children }
        </div>
        <Footer />
    </div>

)

export default Layout;