import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../Footer/Footer';
import login from '../../img/login.jpg'
import useAuth from '../hooks/useAuth';

const Ragister = () => {
    const [loginInfo, setLoginInfo] = useState({})
    const { registerUser, user } = useAuth()
    // console.log(user.displayName)
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginInfo = { ...loginInfo }
        newLoginInfo[field] = value;
        console.log(newLoginInfo)
        setLoginInfo(newLoginInfo)
    }
    const handleLogIn = e => {
        if (loginInfo.password !== loginInfo.password2) {
            alert('Your password did not match')
            return
        }
        registerUser(loginInfo.email, loginInfo.password, loginInfo.name);
        e.preventDefault();

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
                        <Typography sx={{ marginTop: '110px' }} variant='h3'>Ragister</Typography>
                        <form onSubmit={handleLogIn}>
                            <TextField
                                sx={{ width: '70%', marginY: '20px' }}
                                name='name'
                                onBlur={handleOnBlur}
                                label="Your Name"
                                variant="standard" /><br />
                            <TextField
                                sx={{ width: '70%', marginBottom: '20px' }}
                                type='email'
                                name='email'
                                onBlur={handleOnBlur}
                                label="Your Email"
                                variant="standard" /><br />
                            <TextField
                                sx={{ width: '70%', marginBottom: '20px' }}
                                type='password'
                                name='password'
                                onBlur={handleOnBlur}
                                label="Your Password"
                                variant="standard" /><br />
                            <TextField
                                sx={{ width: '70%', marginBottom: '20px' }}
                                label="Re-type Your Password"
                                type='password'
                                name='password2'
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <Typography>Alreay Ragistered? Please<NavLink to='/login' style={{ textDecoration: 'none' }}><Button>Login</Button></NavLink></Typography>
                            <Button type='submit' sx={{ width: '30%', marginTop: '20px' }} variant="contained">Ragister</Button>
                        </form>
                    </Grid>
                </Grid>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Ragister;