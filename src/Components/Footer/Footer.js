import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#566573', marginTop: '90px' }}>
            <Container>
                <Grid sx={{ color: '#E5E7E9', paddingY: '30px' }} container spacing={2}>
                    <Grid sx={{ textAlign: 'left' }} item xs={12} md={3}>
                        <Typography variant='h4'>CONTACT US</Typography>
                        <Typography variant='h6'>medical.info10@.com</Typography>
                        <Typography variant='h6'>+78887777</Typography>
                        <Typography variant='h6'>+43223410</Typography>
                    </Grid>
                    <Grid sx={{ textAlign: 'left' }} item xs={12} md={3}>
                        <Typography variant='h4'>USA</Typography>
                        <Typography variant='h6'>medical.info11@.com</Typography>
                        <Typography variant='h6'>Dr.Smith</Typography>
                        <Typography variant='h6'>+5555888</Typography>
                    </Grid>
                    <Grid sx={{ textAlign: 'left' }} item xs={12} md={3}>
                        <Typography variant='h4'>INDIA</Typography>
                        <Typography variant='h6'>medical.info12@.com</Typography>
                        <Typography variant='h6'>Dr.Rana</Typography>
                        <Typography variant='h6'>+954675888</Typography>
                    </Grid>
                    <Grid sx={{ textAlign: 'left' }} item xs={12} md={3}>
                        <Typography variant='h4'>CANADA</Typography>
                        <Typography variant='h6'>medical.info13@.com</Typography>
                        <Typography variant='h6'>Dr.Tamanna</Typography>
                        <Typography variant='h6'>+70045342</Typography>
                    </Grid>
                </Grid>
                <Typography sx={{ textAlign: 'center', color: '#E5E7E9', paddingBottom: '20px' }}>Copyright © 2022 Dhaka Medical Care.com</Typography>
            </Container>
        </Box>
    );
};

export default Footer;