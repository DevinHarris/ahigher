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
        const { variantsData, className, eventHandler } = this.props;

        return (
                <div className={`select-size__container ${className ? className : ''}`}>
                    {
                        variantsData && variantsData.map(variant => (
                            variant.available ? <button className="select-size__btn" key={variant.id} onClick={eventHandler} value={variant.id}>{variant.title}</button> : <button disabled className="select-size__btn select-size__btn--disabled" key={variant.id}>{variant.title}</button>
                        ))
                    }
                </div>
            )
    }

}

export default SelectSize;