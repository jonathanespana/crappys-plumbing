import React from 'react';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Footer() {

    return (
        <div className="Footer">
            <Box sx={{ flexGrow: 1, bgcolor: "#142740", padding: 6, color: "#f7f7f7"}} >
                <Grid container spacing={2}>
                    <Grid xs={12} md={6}>
                        <Box display="flex">
                            <img src="https://i.ibb.co/s5QhCXn/crappyplumberslogo.png" alt="crappyplumberslogo" border="0" height={320} />
                            <Typography variant='h1' component="p" sx={{ fontFamily: 'Nanum Pen Script'}}>
                                Crappy's Plumbing
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid xs={12}  md={3}>
                        <ul style={{listStyle: "none"}}>
                            <li>
                            <NavLink 
                            to="/"
                            className={({ isActive, isPending}) =>
                                isActive
                                ? "active"
                                : isPending
                                ? "pending"
                                : ""
                            }
                            >
                                Home
                            </NavLink>
                            </li>
                            <li>
                            <NavLink 
                            to="about/"
                            className={({ isActive, isPending}) =>
                                isActive
                                ? "active"
                                : isPending
                                ? "pending"
                                : ""
                            }
                            >
                                About Us
                            </NavLink>
                            </li>
                            <li>
                            <NavLink 
                            to="services/"
                            className={({ isActive, isPending}) =>
                                isActive
                                ? "active"
                                : isPending
                                ? "pending"
                                : ""
                            }
                            >
                                Services
                            </NavLink>
                            </li>
                            <li>
                            <NavLink 
                            to="pricing/"
                            className={({ isActive, isPending}) =>
                                isActive
                                ? "active"
                                : isPending
                                ? "pending"
                                : ""
                            }
                            >
                                Pricing
                            </NavLink>
                            </li>
                            
                            <li>
                            <Typography>
                                Reviews 
                            </Typography>
                            </li>
                            <li>
                            <Typography>
                                Contact Us 
                            </Typography>
                            </li>
                        </ul>
                    </Grid>
                    <Grid xs={12}  md={3}>
                        <Typography>
                            456 Rollem Ave
                        </Typography>
                        <Typography>
                            Cottonwood Heights, Utah 84047
                        </Typography>
                        <Typography>
                            (801) 5H1T-5UX
                        </Typography>
                        <Typography>
                            Leave a Review
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ bgcolor: "#142740", color: "#f7f7f7" }}>
                <Container>
                    <Box sx={{ borderTop: "solid 6px #488DE8" }} display="flex" flexDirection="column" alignItems="center" padding={5}>
                        <Typography>
                            Copyright © 2024 Crappy's Plumbing | Privacy Policy
                        </Typography>
                        <Typography>
                            Designed, Managed, and Hosted by Dialup Digital
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </div>
    )
}