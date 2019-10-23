import React from 'react';
import Layout from './Layout';
import { Helmet } from 'react-helmet';

const FAQ = () => {
    return (
        <Layout>
            <Helmet>
                <title>{`Frequently Asked Questions | Ahigher`}</title>
            </Helmet>
            <div className="faq-page">
                <div className="faq-page__question-container">
                    <h1 className="faq-page__question">What does Ahigher mean?</h1>
                    <p className="faq-page__answer">Ahigher means never giving up and always elevating yourself in life to go higher than you once were.</p>
                </div>
                <div className="faq-page__question-container">
                    <h1 className="faq-page__question">What's the best way to contact you?</h1>
                    <p className="faq-page__answer">The best way to contact us is through our email: <a href="mailto:infoahigher@gmail.com">infoahigher@gmail.com</a></p>
                </div>
                <div className="faq-page__question-container">
                    <h1 className="faq-page__question">Do you have any retail stores?</h1>
                    <p className="faq-page__answer">Not at the moment, but there are plans for some in the future.</p>
                </div>
            </div>
        </Layout>
    )
}

export default FAQ;