import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import Button from '@mui/material/Button';


export default function HomeSplashGrid() {
    return (
        <Box className="homeSplashGrid"
            sx={{
                minHeight: 625,
            }}>
                <Box width='100%' height="100%" sx={{}}>
                    <Box display="flex" justifyContent="center">
                        <PlumbingIcon color="action" sx={{ fontSize: 100, marginTop: 10}} />
                    </Box>
                    <Typography variant='h3' marginTop={3}  textAlign="center" sx={{ textTransform: "uppercase"}}>
                        Why Choose Crappy's Plumbing?
                    </Typography>
                    <Typography variant='h5' component="p" marginTop={0.5} textAlign="center" >
                        What Makes Us Different
                    </Typography>
                    <Box width="100%">
                        <Container>
                            <Grid container spacing={3}>
                                <Grid xs={12} sm={6} lg={3} marginTop={5}>
                                    <Paper elevation={5} sx={{width: "90%", padding: 3, minHeight: 275, borderRadius: "20px 0px 20px 0px"}}>
                                        <Box display="flex" justifyContent="center">
                                            <img src="https://i.ibb.co/FDk5Wvs/plumber-contact-icon.png" alt="plumber-contact-icon" border="0" width={80} />
                                        </Box>
                                        <Box marginTop={1.5}>
                                            <Typography variant="h5" textAlign="center">
                                                24 Hour Support
                                            </Typography>
                                            <Typography marginTop={1} textAlign="center">
                                                We provide 24 hour support to our customers by providing emergency plumbing services
                                            </Typography>
                                        </Box>
                                    </Paper>
                                </Grid>
                                <Grid xs={12} sm={6} lg={3} marginTop={5}>
                                    <Paper elevation={5} sx={{width: "90%", padding: 3, minHeight: 275, borderRadius: "20px 0px 20px 0px"}}>
                                        <Box display="flex" justifyContent="center">
                                            <img src="https://i.ibb.co/FDk5Wvs/plumber-contact-icon.png" alt="plumber-contact-icon" border="0" width={80} />
                                        </Box>
                                        <Box marginTop={1.5}>
                                            <Typography variant="h5" textAlign="center">
                                                24 Hour Support
                                            </Typography>
                                            <Typography marginTop={1} textAlign="center">
                                                We provide 24 hour support to our customers by providing emergency plumbing services
                                            </Typography>
                                        </Box>
                                    </Paper>
                                </Grid>
                                <Grid xs={12} sm={6} lg={3} marginTop={5}>
                                    <Paper elevation={5} sx={{width: "90%", padding: 3, minHeight: 275, borderRadius: "20px 0px 20px 0px"}}>
                                        <Box display="flex" justifyContent="center">
                                            <img src="https://i.ibb.co/FDk5Wvs/plumber-contact-icon.png" alt="plumber-contact-icon" border="0" width={80} />
                                        </Box>
                                        <Box marginTop={1.5}>
                                            <Typography variant="h5" textAlign="center">
                                                24 Hour Support
                                            </Typography>
                                            <Typography marginTop={1} textAlign="center">
                                                We provide 24 hour support to our customers by providing emergency plumbing services
                                            </Typography>
                                        </Box>
                                    </Paper>
                                </Grid>
                                <Grid xs={12} sm={6} lg={3} marginTop={5}>
                                    <Paper elevation={5} sx={{width: "90%", padding: 3, minHeight: 275, borderRadius: "20px 0px 20px 0px"}}>
                                        <Box display="flex" justifyContent="center">
                                            <img src="https://i.ibb.co/FDk5Wvs/plumber-contact-icon.png" alt="plumber-contact-icon" border="0" width={80} />
                                        </Box>
                                        <Box marginTop={1.5}>
                                            <Typography variant="h5" textAlign="center">
                                                24 Hour Support
                                            </Typography>
                                            <Typography marginTop={1} textAlign="center">
                                                We provide 24 hour support to our customers by providing emergency plumbing services
                                            </Typography>
                                        </Box>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>
                </Box>
            </Box>

    )
}