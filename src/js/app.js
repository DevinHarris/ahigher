import React from 'react';
import ReactDOM from 'react-dom';
import Client from 'shopify-buy';
import Ahigher from './components/Ahigher';
import '../styles/main.scss';

const client = Client.buildClient({
    domain: 'ahigher-test.myshopify.com',
    storefrontAccessToken: '049a5a005df8fec56191d29d41831d08'
})

ReactDOM.render(<Ahigher client={client} />, document.querySelector('.app'));