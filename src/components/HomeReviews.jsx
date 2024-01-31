import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import StarRateIcon from '@mui/icons-material/StarRate';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

export default function HomeReviews() {


    return (
        <Box className="homeReviews">
            <Container>
                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                    <PlumbingIcon sx={{ fontSize: 145, marginTop: 5}}/>
                    <Typography variant='h3' component="h6" textTransform="uppercase" marginTop={2}>
                        Our Customers Say it Best!
                    </Typography>
                    <Typography variant='h6' component="h6" marginTop={1}>
                        Reviews & Testimonials
                    </Typography>
                    <Typography variant='body1' component="p" marginTop={1}>
                        At Crappy's Plumbing, your satisfaction is our top priority! See for yourself what people have to say about working with us.
                    </Typography>
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={3} marginTop={3}>
                        <Grid xs={12} md={4} marginTop={5}>
                            <Box sx={{ width: "100%", height: "100%"}} display="flex" justifyContent="center">
                                <Paper sx={{ borderRadius: "20px 0px 20px 0px" , bgcolor: "#488DE8", width: "90%", padding: 3}}>
                                    <ul style={{listStyle: "none"}}>
                                        <li>
                                            <StarRateIcon color="warning"/>
                                        </li>
                                        <li>
                                            <StarRateIcon color="warning"/>
                                        </li>
                                        <li>
                                            <StarRateIcon color="warning"/>
                                        </li>
                                        <li>
                                            <StarRateIcon color="warning"/>
                                        </li>
                                        <li>
                                            <StarRateIcon color="warning"/>
                                        </li>
                                    </ul>
                                    <Typography marginTop={2}  variant="h5" component="p">
                                        "The Best"
                                    </Typography>
                                    <Typography marginTop={2} variant="body1" component="p">
                                        "Since 2008, I've used Crappy's Plumbing for a few projects over the years.  They've always done a great job!"
                                    </Typography>
                                    <Typography marginTop={2} variant="subtitle1" component="p">
                                        - Name
                                    </Typography>
                                </Paper>
                            </Box>
                        </Grid>
                        <Grid xs={12} md={4} marginTop={5}>
                            <Box sx={{ width: "100%", height: "100%"}} display="flex" justifyContent="center">
                                <Paper sx={{ borderRadius: "20px 0px 20px 0px" , bgcolor: "#488DE8", width: "90%", padding: 3}}>
                                    <ul style={{listStyle: "none"}}>
                                        <li>
                                            <StarRateIcon color="warning"/>
                                        </li>
                                        <li>
                                            <StarRateIcon color="warning"/>
                                        </li>
                                        <li>
                                            <StarRateIcon color="warning"/>
                                        </li>
                                        <li>
                                            <StarRateIcon color="warning"/>
                                        </li>
                                        <li>
                                            <StarRateIcon color="warning"/>
                                        </li>
                                    </ul>
                                    <Typography marginTop={2} variant="h5" component="p">
                                        "The Best"
                                    </Typography>
                                    <Typography marginTop={2} variant="body1" component="p">
                                        "Since 2008, I've used Crappy's Plumbing for a few projects over the years.  They've always done a great job!"
                                    </Typography>
                                    <Typography marginTop={2} variant="subtitle1" component="p">
                                        - Name
                                    </Typography>
                                </Paper>
                            </Box>
                        </Grid>
                        <Grid xs={12} md={4} marginTop={5}>
                            <Box sx={{ width: "100%", height: "100%"}} display="flex" justifyContent="center">
                                <Paper sx={{ borderRadius: "20px 0px 20px 0px" , bgcolor: "#488DE8", width: "90%", padding: 3}}>
                                    <ul style={{listStyle: "none"}}>
                                        <li>
                                            <StarRateIcon color="warning"/>
                                        </li>
                                        <li>
                                            <StarRateIcon color="warning"/>
                                        </li>
                                        <li>
                                            <StarRateIcon color="warning"/>
                                        </li>
                                        <li>
                                            <StarRateIcon color="warning"/>
                                        </li>
                                        <li>
                                            <StarRateIcon color="warning"/>
                                        </li>
                                    </ul>
                                    <Typography marginTop={2} variant="h5" component="p">
                                        "The Best"
                                    </Typography>
                                    <Typography marginTop={2} variant="body1" component="p">
                                        "Since 2008, I've used Crappy's Plumbing for a few projects over the years.  They've always done a great job!"
                                    </Typography>
                                    <Typography marginTop={2} variant="subtitle1" component="p">
                                        - Name
                                    </Typography>
                                </Paper>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box display="flex" justifyContent="flex-end" marginY={5}>
                    <Button variant='contained' color='warning' size='large'>Read All Reviews</Button>
                </Box>
            </Container>
        </Box>
    )
}