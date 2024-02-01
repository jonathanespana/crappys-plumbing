import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ImageListItem from '@mui/material/ImageListItem';

export default function HomeMainContent() {
    return (
        <Container sx={{marginBottom: 5}}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item lg={6} sx={{ display:{xs: 'none', lg: 'block'} }}>
                        <Paper elevation={0} sx={{ borderRadius: "40px 0px 40px 0px", overflow: 'hidden', marginRight: 3 }}>
                            <Box sx={{ width: '100%' }} cols={1} rowHeight={350}>
                                <ImageListItem>
                                    <img
                                        src="https://i.ibb.co/5h50J9J/Adobe-Stock-381367169.jpg"
                                        alt="washing hands"
                                        loading="lazy"
                                    />
                                </ImageListItem>
                                <ImageListItem>
                                    <img
                                        src="https://i.ibb.co/5W3fsZx/Adobe-Stock-507603790.jpg"
                                        alt="washing hands"
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Paper elevation={0}>
                            <Box paddingLeft={3}>
                                <img src="https://i.ibb.co/jM190S1/plumber-always-icon.png" alt="plumber-always-icon" border="0" width={150} style={{ opacity: 0.8}}/>
                                <Typography variant='h3' component='h3'>Professional Plumbers in Salt Lake County</Typography>
                                <Typography variant='h5' component='h5' marginTop={2}>Servicing Salt Lake County for since 1990</Typography>
                                <Typography variant='body1' component='p' marginTop={2} lineHeight={1.5}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique hic placeat ad non sequi, asperiores nemo tempore optio expedita atque ex magnam totam obcaecati quaerat! Nam reprehenderit nobis, voluptas adipisci magni omnis illo necessitatibus excepturi ea sapiente sed ipsa, inventore, rem optio quisquam quam enim natus laborum aperiam porro! Tenetur reprehenderit saepe veniam, ad iste ab dicta nostrum culpa adipisci!</Typography>
                                <Typography variant='body1' component='p' marginTop={2} lineHeight={1.5}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique hic placeat ad non sequi, asperiores nemo tempore optio expedita atque ex magnam totam obcaecati quaerat!</Typography>
                                <Typography variant='body1' component='p' marginTop={2} lineHeight={1.5}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod iusto expedita consequuntur eaque ullam accusamus nemo aliquam sapiente illo possimus unde omnis similique iure tempora, et, distinctio numquam iste dolorum aperiam explicabo. Dolorum amet dignissimos aspernatur omnis voluptate, cumque iste, ad magni enim porro ab?</Typography>
                                <Box padding={3} borderTop={'solid red 5px'} borderBottom={'solid red 5px'} marginTop={3}>
                                    <Typography variant='body1' component='p' lineHeight={1.5} >
                                        If you have an emergency or need some general plumbing maintanence, don't hesitate to give us a call at (555) 5H1T-5UX, we're happy to help.  You can also get also fill out request a free estimate online here, 
                                        <span style={{ color: "red"}}> fill out request.</span>
                                    </Typography>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}