import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function HomeFooter() {

    return (
        <div className="HomeFooter">
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
                            <Typography>
                                About Us
                            </Typography>
                            </li>
                            <li>
                            <Typography>
                                Plumbing Services 
                            </Typography>
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