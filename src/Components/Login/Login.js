import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import login from '../../img/login.jpg'
import Footer from '../Footer/Footer';
import { NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Login = () => {
    const [loginInfo, setLoginInfo] = useState({})
    const { loginUser, user, signInWithGoogle } = useAuth();
    // console.log(loginInfo)
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginInfo = { ...loginInfo }
        newLoginInfo[field] = value;
        setLoginInfo(newLoginInfo)
    }
    const handleLogIn = e => {
        loginUser(loginInfo.email, loginInfo.password)
        e.preventDefault();

    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
    }
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
                        <form onSubmit={handleLogIn}>
                            <TextField
                                sx={{ width: '70%', marginY: '20px' }}
                                type='email'
                                name='email'
                                onBlur={handleOnBlur}
                                label="Your Email"
                                variant="standard" /><br />
                            <TextField
                                sx={{ width: '70%', marginBottom: '20px' }}
                                label="Your Password"
                                name="password"
                                onBlur={handleOnBlur}
                                type='password'
                                variant="standard" />
                            <Typography>New User? Please<NavLink to='/ragister' style={{ textDecoration: 'none' }}><Button>Register</Button></NavLink></Typography>
                            <Button sx={{ width: '30%', marginRight: '5%', marginTop: '20px' }} type='submit' variant="contained">LogIn</Button><Button onClick={handleGoogleSignIn} sx={{ width: '35%', marginTop: '20px' }} variant="contained">Google Sign In</Button>
                        </form>


                    </Grid>
                </Grid>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Login;