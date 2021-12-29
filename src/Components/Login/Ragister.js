import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../Footer/Footer';
import login from '../../img/login.jpg'

const Ragister = () => {
    return (
        <>
            <Navigation></Navigation>
            <Container sx={{ marginTop: '50px' }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <img src={login} style={{ width: '100%', marginTop: '20px' }} alt="" />
                    </Grid>
                    <Grid item sx={{ textAlign: 'left' }} xs={12} md={6}>
                        <Typography sx={{ marginTop: '110px' }} variant='h3'>Ragister</Typography>
                        <form >
                            <TextField
                                sx={{ width: '60%', marginY: '20px' }}
                                type='name'
                                label="Your Name"
                                variant="standard" /><br />
                            <TextField
                                sx={{ width: '60%', marginBottom: '20px' }}
                                type='email'
                                label="Your Email"
                                variant="standard" /><br />
                            <TextField
                                sx={{ width: '60%', marginBottom: '20px' }}
                                type='password'
                                label="Your Password"
                                variant="standard" /><br />
                            <TextField
                                sx={{ width: '60%', marginBottom: '20px' }}
                                label="Re-type Your Password"
                                type='password'
                                variant="standard" />
                            <Typography>Alreay Ragistered? Please<NavLink to='/login' style={{ textDecoration: 'none' }}><Button>Login</Button></NavLink></Typography>
                            <Button variant="contained">Ragister</Button>
                        </form>
                    </Grid>
                </Grid>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Ragister;