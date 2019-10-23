import React from 'react';
import { Link } from 'react-router-dom';
import Client from 'shopify-buy';
import Layout from './Layout';
import ProductContext from './ProductsContext';
import SelectSize from './SelectSize';
import { Helmet } from 'react-helmet';

class Product extends React.Component {

    state = {
        product: {},
        currVariantId: '',
        currSize: ''
    }

    componentDidMount() {

        this.props.client.product.fetchByHandle(this.props.match.params.id).then(product => {
            this.setState({
                product
            })
         })
    }

    /*
        add variant ids to items for checkout,
        create checkout from Cart
    */

    handleAddToCart = (e) => {
        const { title, images, variants } = this.state.product;
        const cartCont = document.querySelector('.cart-container');
        const addToCartBtn = document.querySelector('.add-to-cart-btn');
        
        addToCartBtn.addEventListener('click', () => {
            cartCont.classList.toggle('cart-visible');
        })

        this.props.handleAddProduct({
            name: title,
            size: this.state.currSize,
            price: `$${variants[0].price} ${variants[0].priceV2.currencyCode}`,
            img: images[0].src,
            url: '/product/345867',
            variantId: this.state.currVariantId,
            quantity: 1
        })
    }

    handleClick = (e) => {
        this.setState({
            currVariantId: e.target.value,
            currSize: e.target.innerText
        })

        console.log(e.target.value);
    }

    render() {

        // const { match, handleProductChange } = this.props;
        const { availableForSale, description, images, id, handle, variants, price, title } = this.state.product;

        // console.log(match);
        // console.log(this.state.product)

        return (
                  <Layout>
                      <Helmet>
                          <title>{`${title} | A piece by Ahigher.`}</title>
                      </Helmet>
                      <div className="product-page-container">
                            <div className="product__container">
                               <div className="product__col product__photos">
                                    <div className="product__images-container">
                                        
                                        {
                                            // selectedItem.video ? <video autoPlay muted loop className="product__video">
                                            //     <source src={selectedItem.video} type="video/mp4"></source>
                                            // </video> : null
                                        }
                                        {
                                            images && images.map((img, index) => (
                                                <img className={`product__image product__image--${index + 1}`} src={img.src} key={index + 1} />
                                            ))
                                        }
                                    </div>
                               </div>
                               <div className="product__col product__info">
                                    <div className="product__info-container">
                                        {/* <Link to={selectedItem.collection_url}>
                                            <span className="product__collection-tag">{selectedItem.collection_tag}</span>
                                        </Link> */}
                                        <h1 className="product__name">{title}</h1>
                                        <p className="product__price">${`${variants && variants[0].price} ${variants && variants[0].priceV2.currencyCode}`}</p>
                                        <p className="product__description">{description}</p>
                                        <p className="product__availability">Availability: {availableForSale ? 'IN STOCK' : 'SOLD OUT'}</p>
                                        <SelectSize variantsData={variants} eventHandler={this.handleClick} />

                                        <div className="product__actions">
                                           { availableForSale ? <button 
                                                                    className='cart__action-btn add-to-cart-btn cart__action-btn--primary' 
                                                                    onClick={this.handleAddToCart}>Add to Bag</button> : 
                                                <button disabled className='cart__action-btn add-to-cart-btn cart__action-btn--disabled'>Sold Out</button>
                                            }
                                        </div>
                                    </div>
                               </div>
                            </div>
                       </div>
                  </Layout>
               )
           }
    }

export default Product;