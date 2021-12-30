import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Components/hooks/useAuth'



const Navigation = () => {
    const { user, logOut } = useAuth();
    console.log(user)
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <AppBar sx={{ position: 'fixed' }} >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        Dhaka Medical Care
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {/* {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))} */}
                            <nav>
                                <NavLink style={{ textDecoration: 'none' }} to='/home'><Button sx={{ color: 'black' }}>Home</Button></NavLink><br />
                                <NavLink style={{ textDecoration: 'none' }} to='/navservices'><Button sx={{ color: 'black' }}>Services</Button></NavLink><br />
                                <NavLink style={{ textDecoration: 'none' }} to='/about'><Button sx={{ color: 'black' }}>About</Button></NavLink><br />
                                <NavLink style={{ textDecoration: 'none' }} to='/contact'><Button sx={{ color: 'black' }}>Contact Us</Button></NavLink><br />
                                {
                                    user?.email ?
                                        <Box> <Button onClick={logOut} sx={{ color: 'black' }}>Logout</Button>
                                            <Typography sx={{ paddingLeft: '7px' }} variant='h6'>{user.displayName}</Typography>
                                        </Box>
                                        :
                                        <NavLink style={{ textDecoration: 'none' }} to='/login'><Button sx={{ color: 'black' }}>Login</Button></NavLink>
                                }
                            </nav>
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        Dhaka Medical Care
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <nav>
                            <NavLink style={{ textDecoration: 'none' }} to='/home'><Button sx={{ color: 'white' }}>Home</Button></NavLink>
                            <NavLink style={{ textDecoration: 'none' }} to='/navservices'><Button sx={{ color: 'white' }}>Services</Button></NavLink>
                            <NavLink style={{ textDecoration: 'none' }} to='/about'><Button sx={{ color: 'white' }}>About</Button></NavLink>
                            <NavLink style={{ textDecoration: 'none' }} to='/contact'><Button sx={{ color: 'white' }}>Contact Us</Button></NavLink>
                            {
                                user?.email ?
                                    <Box sx={{ display: 'inline' }}> <Button onClick={logOut} sx={{ color: 'white' }}>Logout</Button>
                                        <Typography sx={{ display: 'inline' }} variant='h6'>{user.displayName}</Typography>
                                    </Box>
                                    :
                                    <NavLink style={{ textDecoration: 'none' }} to='/login'><Button sx={{ color: 'white' }}>Login</Button></NavLink>
                            }



                        </nav>
                    </Box>


                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navigation;