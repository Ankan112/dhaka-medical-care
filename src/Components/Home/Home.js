import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Gallery from '../Gallery/Gallery';
import Services from '../Services/Services';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Services></Services>
            <Banner></Banner>
            <Gallery></Gallery>
            <Footer></Footer>
        </div>
    );
};

export default Home;