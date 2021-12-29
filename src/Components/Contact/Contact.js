import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../Footer/Footer';
import contact from '../../img/contact-us.jpg'
import { Box } from '@mui/system';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
const Contact = () => {
    return (
        <>
            <Navigation></Navigation>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <img src={contact} style={{ width: '100%', marginTop: '20px' }} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography sx={{ textAlign: 'left', marginTop: '80px' }} variant='h3'>Contact Us</Typography>
                        <Box variant='h6' sx={{ textAlign: 'left', marginTop: '20px', minWidth: '300px' }}>
                            <Typography variant='h6'><EmailIcon sx={{ fontSize: '18px', marginTop: '15px' }} />     medical.info10@.com (Bangladesh)</Typography>
                            <Typography variant='h6'><EmailIcon sx={{ fontSize: '18px', marginTop: '15px' }} />     medical.info11@.com(USA)</Typography>
                            <Typography variant='h6'><EmailIcon sx={{ fontSize: '18px', marginTop: '15px' }} />     medical.info12@.com(India)</Typography>
                            <Typography variant='h6'><EmailIcon sx={{ fontSize: '18px', marginTop: '15px' }} />     medical.info13@.com(Canada)</Typography>
                            <Typography variant='h6'><LocalPhoneIcon sx={{ fontSize: '18px', marginTop: '15px' }} />     +43223410(Bangladesh)</Typography>
                            <Typography variant='h6'><LocalPhoneIcon sx={{ fontSize: '18px', marginTop: '15px' }} />     +5555888(USA)</Typography>
                            <Typography variant='h6'><LocalPhoneIcon sx={{ fontSize: '18px', marginTop: '15px' }} />     +954675888(India)</Typography>
                            <Typography variant='h6'><LocalPhoneIcon sx={{ fontSize: '18px', marginTop: '15px' }} />     +70045342(Canada)</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Contact;