import React from 'react';

class SelectSize extends React.Component {

    state = {
        selected: false
    }

    componentDidMount() {
        const selectBtns = document.querySelectorAll('.select-size__btn');

        selectBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.target.classList.toggle('select-size__btn--selected');
            })
        })
    }

    // handleHandleSizeSelect = () => {
    //     this.setState(prevState => ({
    //         selected: !prevState
    //     }))
    // }

    render() {
        const { sizes, className } = this.props;

        return (
                <div className={`select-size__container ${className ? className : ''}`}>
                    {
                        sizes.map(size => (
                            <button className="select-size__btn" key={size}>{size}</button>
                        ))
                    }
                </div>
            )
    }

}

export default SelectSize;