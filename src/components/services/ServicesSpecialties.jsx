import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const servicesList = [
    'Unclog Single Drain', 'Unclog Toilet', 'Unclog Main Line', 'Unclog Storm Drain', 'Clean Leach Field in Septic System', 'camera drain line inspection'
]

export default function ServicesSpecialties() {
    return (
        <Box className='ServicesSpecialties' sx={{ flexGrow: 1}} marginTop={8}>
            <Grid container spacing={2}>
                <Grid item xs={12} lg={6} bgcolor='#142740' color="#F6FFFF">
                    <Box padding={8}>
                    <img src="https://i.ibb.co/9w6hJ9s/leakypipe-icon.png" alt="leakypipe-icon" border="0" width={125}/>
                        <Typography variant='h4' component='h4' textTransform="uppercase">
                            Our Specialties
                        </Typography>
                        <Typography variant='body1' component='p' marginTop={2}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus labore eaque quasi assumenda quos quis eius temporibus dolore saepe hic perferendis dicta provident, expedita dolor nihil obcaecati ea nisi facere laborum, doloribus impedit! Commodi fugiat ut quae in, error ea qui repudiandae voluptas temporibus obcaecati iste iure unde numquam molestiae doloremque maxime libero dolores amet atque consequuntur aliquid architecto laudantium?
                        </Typography>
                        <Typography variant='h5' component='h6' marginTop={2}>
                            Learn more about our services
                        </Typography>
                        <ul>
                            {servicesList.map((servicesItem) => (
                                    <li>
                                        <Typography>
                                            {servicesItem}
                                        </Typography>
                                    </li>
                            ))}
                        </ul>
                        <Button variant='contained' color='warning' size='large' sx={{marginTop: 5}}>Learn More</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} lg={6} style={{paddingLeft: 0, paddingTop: 0}}>
                    <Box style={{
                        height: '100%',
                        overflow: 'hidden',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <img src="https://i.ibb.co/0VVQgGT/Adobe-Stock-103713408.jpg" alt="Adobe-Stock-103713408" border="0" style={{ height: 700, width: "100%"}}/>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}