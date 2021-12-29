import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import about from '../../img/about-us.jpg'
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../Footer/Footer';
const AboutUs = () => {
    return (
        <>
            <Navigation></Navigation>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <img src={about} style={{ width: '100%', marginTop: '20px' }} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography sx={{ textAlign: 'left', marginTop: '110px' }} variant='h3'>About Our Clinic</Typography>
                        <Typography variant='h6' sx={{ textAlign: 'left', marginTop: '20px', minWidth: '300px' }}>
                            We are the best dental treatment provider in our society. We treat our clint as our family memeber. Our goal is make our customer happy . We alwas provide service as low price as we can . No other hospital can give this type of service in this cost. "Brush your teeth every day and take low sogur food and keep smiling..."
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default AboutUs;