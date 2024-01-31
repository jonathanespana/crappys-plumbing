import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import './aboutSplashMain.css'

export default function AboutSplashMain() {

    return (
        <Box className="AboutSplashMain">
            <Container>
                <Box paddingY={8} color="#f7f7f7">
                    <Typography variant='h3' component='h3' textAlign="center">About Krappy's Plumbing</Typography>
                    <Typography variant='h5' component='h5' marginTop={2} textAlign="center">Servicing Salt Lake for since 1999</Typography>
                    <Typography variant='body1' component='p' marginTop={2} lineHeight={1.5} sx={{ fontSize: 24 }}>Our founder, Joe Krappe, envisioned a plumbing service that not only fixed  leaks but built lasting relationships.  Established in 1999 in the heart of Salt Lake City, Krappy's Plumbing has been the Salt Lake Valley's #1 choice for trust and reliability for over two decades. As a proud family-owned business, we understand the importance of a comfortable and functioning home.</Typography>
                    <Typography variant='body1' component='p' marginTop={2} lineHeight={1.5} sx={{ fontSize: 24 }}>At Krappy's Plumbing, we believe in turning every drip into a drop of satisfaction. Our team of dedicated professionals is committed to providing top-notch plumbing solutions with a personal touch. Our work is anything but "crappy", we take pride in delivering high-quality services that stand the test of time. Join the Krappy's family, where plumbing meets perfection!</Typography>
                </Box>
            </Container>
        </Box>
    )
}