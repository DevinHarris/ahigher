import React from 'react';
import { withRouter } from 'react-router-dom'
import ProductContext from './ProductsContext';

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

    <ProductContext.Consumer>
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
    </ProductContext.Consumer>
        
)

export default withRouter(SearchBar);