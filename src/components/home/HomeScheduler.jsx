import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import "./homeScheduler.css";

export default function HomeScheduler() {

    return(
        <div className="homeScheduler">
                <Box display='flex' flexDirection="column" alignItems='center' paddingTop={4}>
                    <img src="https://i.ibb.co/jM190S1/plumber-always-icon.png" alt="" width={150}/>
                    <Typography variant='h4' component='p' marginTop={1}>Crappy's Plumbing Services</Typography>
                    <Typography variant='h6' component='p' marginTop={2}>Crappy's Plumbing is the right choice for your plumbing needs</Typography>
                    <Typography variant='body1' component='p' marginTop={2}>Get a Free quote Today!</Typography>
                </Box>
                <Box display="flex" justifyContent="center" paddingY={4}>
                    <Button variant='contained' color='warning' size='large'>Schedule your Appointment</Button>
                </Box>

        </div>
    )
}