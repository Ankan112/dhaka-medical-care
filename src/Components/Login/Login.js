import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import login from '../../img/login.jpg'
import Footer from '../Footer/Footer';
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <Navigation></Navigation>
            <Container sx={{ marginTop: '50px' }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <img src={login} style={{ width: '100%', marginTop: '20px' }} alt="" />
                    </Grid>
                    <Grid item sx={{ textAlign: 'left' }} xs={12} md={6}>
                        <Typography sx={{ marginTop: '110px' }} variant='h3'>Log In</Typography>
                        <form >
                            <TextField
                                sx={{ width: '60%', marginY: '20px' }}
                                type='email'
                                label="Your Email"
                                variant="standard" /><br />
                            <TextField
                                sx={{ width: '60%', marginBottom: '20px' }}
                                label="Your Password"
                                type='password'
                                variant="standard" />
                            <Typography>New User? Please<NavLink to='/ragister' style={{ textDecoration: 'none' }}><Button>Register</Button></NavLink></Typography>
                            <Button variant="contained">LogIn</Button>
                        </form>
                    </Grid>
                </Grid>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Login;