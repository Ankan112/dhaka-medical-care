import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import './Banner.css'
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AirlineSeatFlatAngledIcon from '@mui/icons-material/AirlineSeatFlatAngled';
const Banner = () => {
    return (
        <Box className='banner' >
            <Grid container spacing={2}>
                <Grid sx={{ color: 'white', marginTop: '140px', paddingBottom: '140px' }} item xs={6} md={3}>
                    <MedicalServicesIcon sx={{ fontSize: '40px' }}></MedicalServicesIcon>
                    <Typography variant='h2'>24</Typography>
                    <Typography variant='h5'>Health Sections</Typography>
                </Grid>
                <Grid sx={{ color: 'white', marginTop: '140px', paddingBottom: '140px' }} item xs={6} md={3}>
                    <AirlineSeatFlatAngledIcon sx={{ fontSize: '40px' }}></AirlineSeatFlatAngledIcon>
                    <Typography variant='h2'>166</Typography>
                    <Typography variant='h5'>Different Services</Typography>
                </Grid>
                <Grid sx={{ color: 'white', marginTop: '140px', paddingBottom: '140px' }} item xs={6} md={3}>
                    <BloodtypeIcon sx={{ fontSize: '40px' }}></BloodtypeIcon>
                    <Typography variant='h2'>420</Typography>
                    <Typography variant='h5'>Blood Donations</Typography>
                </Grid>
                <Grid sx={{ color: 'white', marginTop: '140px', paddingBottom: '140px' }} item xs={6} md={3}>
                    <InsertEmoticonIcon sx={{ fontSize: '40px' }}></InsertEmoticonIcon>
                    <Typography variant='h2'>50k+</Typography>
                    <Typography variant='h5'>Satisfied Patients</Typography>
                </Grid>

            </Grid>
        </Box>
    );
};

export default Banner;