import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import { ProductConsumer } from './ProductsContext';
import SelectSize from './SelectSize';

class Product extends React.Component {

    componentDidMount() {
        
        const cartCont = document.querySelector('.cart-container');
        const addToCartBtn = document.querySelector('.add-to-cart-btn');
        
        addToCartBtn.addEventListener('click', () => {
            cartCont.classList.toggle('cart-visible');
        })

    }

    render() {

        const { match } = this.props;

        return (
            <ProductConsumer>
        {
           context => {
               const data = context.data.products;
                const selectedItem = data.all_products.find(item => {
                    return match.params.id === item.id
                })

                // console.log(data);

                // console.log(selectedItem);

               return (
                  <Layout>
                       <div className="product-page-container">
                            <div className="product__container">
                               <div className="product__col product__photos">
                                    <div className="product__images-container">
                                        
                                        {
                                            selectedItem.video ? <video autoPlay muted loop className="product__video">
                                                <source src={selectedItem.video} type="video/mp4"></source>
                                            </video> : null
                                        }
                                        {
                                            selectedItem.imgs.map((img, index) => (
                                                <img className={`product__image product__image--${index + 1}`} src={img} />
                                            ))
                                        }
                                    </div>
                               </div>
                               <div className="product__col product__info">
                                    <div className="product__info-container">
                                        <Link to={selectedItem.collection_url}>
                                            <span className="product__collection-tag">{selectedItem.collection_tag}</span>
                                        </Link>
                                        <h1 className="product__name">{selectedItem.name}</h1>
                                        <p className="product__price">{selectedItem.price}</p>
                                        <p className="product__description">{selectedItem.description}</p>
                                        <p className="product__availability">Availability: {selectedItem.availability}</p>
                                        <SelectSize sizes={selectedItem.sizes} />

                                        <div className="product__actions">
                                            <button className={`cart__action-btn add-to-cart-btn ${ selectedItem.availability === 'Sold Out' ? 'cart__action-btn--diabled' : `cart__action-btn--primary` }`}>
                                                {
                                                    selectedItem.availability === 'Sold Out' ? 'Sold Out' : 'Add to bag'
                                                }
                                            </button>
                                        </div>
                                    </div>
                               </div>
                            </div>
                       </div>

                  </Layout>
               )
           }
        }
    </ProductConsumer>
        )
    }
}

export default Product;