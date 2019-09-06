import React from 'react';
import { withRouter } from 'react-router-dom'
import { ProductConsumer } from './ProductsContext';

const SearchBar = () => (
    // state = {
    //     searchTerm: ''
    // }

    // handleOnChange = (e) => {
    //     this.setState({
    //         searchTerm: e.target.value
    //     })
    // }

    // handleOnFocus = () => {
    //     this.props.history.push('/search');
    // }

    <ProductConsumer>
        {
            context => (
                <div className="search-container">
                    <form method="GET" action="#" className="search">
                        <div className="search-input__container">
                            <input type="text" className="search__input" placeholder="Search..." />
                        </div>
                    </form>
                </div>
            )
        }
    </ProductConsumer>
        
)

export default withRouter(SearchBar);