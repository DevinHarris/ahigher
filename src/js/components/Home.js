import React from 'react';
import  { Link } from 'react-router-dom';
import Layout from './Layout';
import Hero from './Hero';
import FeaturedItem from './FeaturedItem';
import MinHero from './MinHero';
import SignupBanner from './SignupBanner';
import SiteModal from './SiteModal';

class Home extends React.Component {

    componentDidMount() {
        
    }

    render() {
        return (
            <Layout>
                {/* <SiteModal isModalOpen={true} className="signup__modal" overlayClassName="signup__overlay">
                    <h1 className="signup__modal-heading">Sign up now for exclusive deals, discounts, and latest drop info.</h1>
                    <p className="signup__modal-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales magna a lectus luctus efficitur. Aenean vel dictum velit. Sed vulputate sodales porttitor. Sed ut aliquet mi. Suspendisse est lectus, congue eget turpis ut, tincidunt interdum nunc. Etiam pharetra iaculis varius. Proin et nisi malesuada, elementum eros lacinia, eleifend dolor. Cras a semper mauris, non placerat massa. Nullam tincidunt vel sem id gravida.</p>
                    <form>ss
                        <div className="signup__modal-container">
                            <input type="email" className="signup__modal-text" placeholder="Your email" required/>
                            <button className="signup__modal-btn">Sign up</button>
                        </div>
                    </form>
                </SiteModal> */}
                <Hero bgImg="../public/img/IMG_1959.jpg"
                    heroText="Breath of Life."
                    description="Shop the latest from our FW19 Collection."
                    link="/collections/breath-of-life"
                    linkText="See the new collection"
                    backgroundPos="0 22%"
                />
                <main className="main-content">
                    <div className="featured-release">
                        <div className="featured-release__heading">
                            <h2 className="featured-release__heading-text">The Latest: The Breath of Life Collection</h2>
                            <p className="featured-release__text">Shop the latest jackets from our fall / winter collection -- Breath of Life. Each jacket features 100% premium ripstop with an inner mesh interior.</p>
                        </div>

                        <div className="featured-release__items">
                            <FeaturedItem mediaSrc="../public/img/IMG_1908.mp4" name="Breath of Life: White / Blue Jacket" id="542352" isVideo />
                            <FeaturedItem mediaSrc="../public/img/IMG_1910.mp4" name="Breath of Life: Blue / Black Jacket" id="345867" isVideo />
                            <FeaturedItem mediaSrc="../public/img/IMG_1907.mp4" name="Breath of Life: Red / Black Jacket" id="975367" isVideo />
                            {/* <FeaturedItem mediaSrc="../public/img/IMG_1909.mp4" name="Breath of Life: Green / Purple Jacket" id="657456"  isVideo /> */}
                        </div>
                    </div>
                    
                    <Hero bgImg="../public/img/oly-3.jpg" //bg-8
                        heroText="The Olympics is coming."
                        description="Get a headstart and grab your olympics gear."
                        link="/collections/olympics"
                        linkText="Preview the upcoming collection"
                        backgroundPos="0 30%"
                        contentAlign="flex-start"
                    />

                    {/* <Hero bgImg="../public/img/bg-9.jpg" //bg-8
                        heroText="Be the underdog."
                        description="Do you. Be the best you."
                        link="/collections/new-wave"
                        linkText="Define underdog?"
                        contentAlign="flex-end"

                    />

                    <div>
                        <MinHero bgImg="../public/img/bg-2.jpg" contentAlign="flex-end"/>
                    </div> */}
                    {/* <div>
                        <SignupBanner />
                    </div> */}
                </main>
            </Layout>
        )
    }
}

export default Home;