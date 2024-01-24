import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const servicesList = [
    'Unclog Single Drain', 'Unclog Toilet', 'Unclog Main Line', 'Unclog Storm Drain', 'Clean Leach Field in Septic System', 'camera drain line inspection'
]

export default function ServicesHighlight() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} lg={6} bgcolor='#142740' color="#F6FFFF">
                    <Box sx={{padding: 8}}>
                        <img src="https://i.ibb.co/9w6hJ9s/leakypipe-icon.png" alt="leakypipe-icon" border="0" width={125}/>
                        <Typography variant='h3' component='h3' textTransform="uppercase">
                            Our Services
                        </Typography>
                        <Typography variant='h5' component='h6' marginTop={2}>
                            How We Can Help You
                        </Typography>
                        <Typography variant='body1' component='p' marginTop={2}>
                            When you trust Crappy's Plumbing, you know the job will done right the first!
                        </Typography>
                        <Grid container spacing={2} marginTop={0.5}>
                            {servicesList.map((servicesItem) => (
                                <Grid item xs={12} sm={6} >
                                    <Typography>
                                        {servicesItem}
                                    </Typography>
                                </Grid>
                                
                            ))}
                        </Grid>
                        <Button variant='contained' color='warning' size='large' sx={{marginTop: 5}}>View all services</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} lg={6} style={{paddingLeft: 0, paddingTop: 0}}>
                    <Box style={{
                        height: 700,
                        overflow: 'hidden',
                    }}>
                        <img src="https://i.ibb.co/0VVQgGT/Adobe-Stock-103713408.jpg" alt="Adobe-Stock-103713408" border="0" style={{ height: 700, width: "100%", objectFit: 'cover', objectPosition: 'center'}}/>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}