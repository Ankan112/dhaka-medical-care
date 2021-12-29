import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';

const NavService = () => {
    return (
        <div style={{ marginTop: '90px' }}>
            <Navigation></Navigation>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default NavService;