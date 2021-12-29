import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import './TopBanner.css'
import img from '../../img/2.jpg'
import Navigation from '../../Shared/Navigation/Navigation';
const TopBanner = () => {
    return (
        <div className='topBanner'>
            <Navigation></Navigation>
            <Container>
                <Grid sx={{ paddingBottom: '90px' }} container spacing={2}>
                    <Grid sx={{ textAlign: 'left' }} item xs={12} md={6}>

                        <Typography sx={{ color: 'white', marginTop: '90px' }} variant="h3">
                            Dhaka Medical Care
                        </Typography>
                        <Typography sx={{ color: '#E5E8E8', marginTop: '20px', fontSize: '18px' }}>
                            Dhaka Medical Care focus on patient education to prevent disease and provide treatment options for the same procedures offered in general and (some) specialty practices. It is a clinic houses all dental equipment and tools in one place and is staffed by dentists, dental specialists, dental assistants, and dental hygienists. Low-cost or free treatments are often performed.
                        </Typography>
                        <Button sx={{ marginTop: '40px' }} variant="contained">Learn More</Button>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '100%', marginTop: '90px' }} src={img} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default TopBanner;