import React, { Children } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class SiteModal extends React.Component {

    state = {
        isModalOpen: this.props.isModalOpen,
        showAgain: true
    }

    handleCloseModal = () => {
        this.setState(prevState => ({
            isModalOpen: !prevState.isModalOpen,
            showAgain: false
        }))
    }

    render() {
        const { children, className, overlayClassName } = this.props;
        return (
           this.state.showAgain ? <Modal 
                appElement={document.querySelector('body')}
                className={className}
                overlayClassName={overlayClassName}
                isOpen={this.state.isModalOpen}
                shouldCloseOnEsc={true}
                shouldCloseOnOverlayClick={true}
            >
                <button onClick={this.handleCloseModal} className="modal__close-btn">
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                { children }
            </Modal> : null
        )
    }
}
export default SiteModal;