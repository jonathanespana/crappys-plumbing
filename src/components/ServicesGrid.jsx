import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: "#142740",
            dark: "#C1CBD9",
        }
    }
})

export default function ServicesGrid() {
    return (
        <Container >
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid xs={12} sm={6} lg={3} sx={{ position: 'relative'}}>
                        <Paper 
                            elevation={5} 
                            sx={{
                                paddingTop: 1,
                                marginX: 3,
                                marginBottom: 4,
                                maxWidth: 320,
                                zIndex: 10,
                            }}
                        >
                            <img src="https://i.ibb.co/DQyPvCw/info-icon-drkblue.png" alt="info-icon-drkblue" border="0" width={100} style={{marginLeft: "15px"}}/>
                            <Typography variant='h5' component='h5' marginBottom={2} marginX={3}>Get to know us</Typography>
                            <Typography variant='body1' component='p' marginX={3} marginBottom={2.5} height={72}>
                                Learn about our company history and who we are.
                            </Typography>
                            <ThemeProvider theme={theme}>
                                <Box 
                                    display='flex'
                                    alignItems='center'
                                    paddingLeft={3}
                                    sx={{
                                        height: 50,
                                        bgcolor: 'primary.main',
                                        color: 'primary.dark',
                                        '&:hover': {
                                            bgcolor: 'primary.dark',
                                            color: 'primary.main',
                                        }
                                    }}
                                >
                                    <Typography variant='subtitle1' component="p">Learn More</Typography>
                                </Box>
                            </ThemeProvider>
                        </Paper>
                    </Grid>
                    <Grid xs={12} sm={6} lg={3} sx={{ position: 'relative'}}>
                        <Paper 
                            elevation={5} 
                            sx={{
                                paddingTop: 1,
                                marginX: 3,
                                marginBottom: 4,
                                maxWidth: 320,
                                zIndex: 10,
                            }}
                        >
                            <LocalOfferIcon  style={{marginLeft: "15px"}} sx={{ fontSize: 100}}/>
                            <Typography variant='h5' component='h5' marginBottom={2} marginX={3} >Get to know us</Typography>
                            <Typography variant='body1' component='p' marginX={3} marginBottom={2.5} height={72}>
                                Don't break the bank!  Check out our affordable pricing.
                            </Typography>
                            <ThemeProvider theme={theme}>
                                <Box 
                                    display='flex'
                                    alignItems='center'
                                    paddingLeft={3}
                                    sx={{
                                        height: 50,
                                        bgcolor: 'primary.main',
                                        color: 'primary.dark',
                                        '&:hover': {
                                            bgcolor: 'primary.dark',
                                            color: 'primary.main',
                                        }
                                    }}
                                >
                                    <Typography variant='subtitle1' component="p">Learn More</Typography>
                                </Box>
                            </ThemeProvider>
                        </Paper>
                    </Grid>
                    <Grid xs={12} sm={6} lg={3} sx={{ position: 'relative'}}>
                        <Paper 
                            elevation={5} 
                            sx={{
                                paddingTop: 1,
                                marginX: 3,
                                marginBottom: 4,
                                maxWidth: 320,
                                zIndex: 10,
                            }}
                        >
                            <img src="https://i.ibb.co/C6ZvsMy/reviews-icon.png" alt="reviews-icon" border="0" width={100} style={{marginLeft: "15px"}}/>
                            <Typography variant='h5' component='h5' marginBottom={2} marginX={3}>Reviews</Typography>
                            <Typography variant='body1' component='p' marginX={3} marginBottom={2.5} height={72}>
                                See what homeowners like you have to say about us!
                            </Typography>
                            <ThemeProvider theme={theme}>
                                <Box 
                                    display='flex'
                                    alignItems='center'
                                    paddingLeft={3}
                                    sx={{
                                        height: 50,
                                        bgcolor: 'primary.main',
                                        color: 'primary.dark',
                                        '&:hover': {
                                            bgcolor: 'primary.dark',
                                            color: 'primary.main',
                                        }
                                    }}
                                >
                                    <Typography variant='subtitle1' component="p">Learn More</Typography>
                                </Box>
                            </ThemeProvider>
                        </Paper>
                    </Grid>
                    <Grid xs={12} sm={6} lg={3} sx={{ position: 'relative'}}>
                        <Paper 
                            elevation={5} 
                            sx={{
                                paddingTop: 1,
                                marginX: 3,
                                marginBottom: 4,
                                maxWidth: 320,
                                zIndex: 10,
                            }}
                        >
                            <img src="https://i.ibb.co/GWMdy9n/contact-icon.png" alt="contact-icon" border="0" width={100} style={{marginLeft: "15px"}}/>
                            <Typography variant='h5' component='h5' marginBottom={2} marginX={3}>Get in Touch</Typography>
                            <Typography variant='body1' component='p' marginX={3} marginBottom={2.5} height={72}>
                                We're here and ready to help with your plumbing needs.
                            </Typography>
                            <ThemeProvider theme={theme}>
                                <Box 
                                    display='flex'
                                    alignItems='center'
                                    paddingLeft={3}
                                    sx={{
                                        height: 50,
                                        bgcolor: 'primary.main',
                                        color: 'primary.dark',
                                        '&:hover': {
                                            bgcolor: 'primary.dark',
                                            color: 'primary.main',
                                        }
                                    }}
                                >
                                    <Typography variant='subtitle1' component="p">Learn More</Typography>
                                </Box>
                            </ThemeProvider>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}