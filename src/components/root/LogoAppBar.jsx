import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { NavLink } from 'react-router-dom';

const pages = ['Home', 'About Us', 'Plumbing Services', 'Reviews', 'Contact Us'];

export default function LogoAppBar() {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <div className="logoAppBar">
            <Box sx={{ flexGrow: 1 }}>
                <AppBar sx={{ backgroundColor: "#011126" }} position="static">
                    <Toolbar sx={{ marginX: 5 }}>
                        <Typography variant="h3" paddingLeft={1} sx={{ flexGrow: 1, fontFamily: 'Nanum Pen Script' }}>
                            Crappy's Plumbing
                        </Typography>
                        <Typography>
                            Call us at (555) 5H1-T5UX
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <AppBar sx={{ backgroundColor: "#011126" }} position="static">
                    <Toolbar sx={{ marginX: 5 }}>
                        
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
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <NavLink 
                                    to="/"
                                    className={({ isActive, isPending }) =>
                                        isActive
                                        ? "active"
                                        : isPending
                                        ? "pending"
                                        : ""
                                    }
                                    >
                                        Home
                                    </NavLink>
                                </MenuItem>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <NavLink 
                                    to="about/"
                                    className={({ isActive, isPending }) =>
                                        isActive
                                        ? "active"
                                        : isPending
                                        ? "pending"
                                        : ""
                                    }
                                    >
                                        About Us
                                    </NavLink>
                                </MenuItem>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <NavLink 
                                    to="services/"
                                    className={({ isActive, isPending }) =>
                                        isActive
                                        ? "active"
                                        : isPending
                                        ? "pending"
                                        : ""
                                    }
                                    >
                                        Services
                                    </NavLink>
                                </MenuItem>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <NavLink 
                                    to="pricing/"
                                    className={({ isActive, isPending }) =>
                                        isActive
                                        ? "active"
                                        : isPending
                                        ? "pending"
                                        : ""
                                    }
                                    >
                                        Pricing
                                    </NavLink>
                                </MenuItem>
                            </Menu>
                        </Box>
                        
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <NavLink 
                            to="/"
                            className={({ isActive, isPending }) => 
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                            >
                                Home
                            </NavLink>
                            <NavLink 
                            to="about/"
                            className={({ isActive, isPending }) => 
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                            >
                                About Us
                            </NavLink>
                            <NavLink 
                            to="services/"
                            className={({ isActive, isPending }) => 
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                            >
                                Services
                            </NavLink>
                            <NavLink 
                            to="pricing/"
                            className={({ isActive, isPending }) => 
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                            >
                                Pricing
                            </NavLink>
                        </Box>

                        <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                            <Button color='warning' variant="contained">Make An Appointment</Button>
                        </Box>
                    </Toolbar>
            </AppBar>
        </div>
    );
}