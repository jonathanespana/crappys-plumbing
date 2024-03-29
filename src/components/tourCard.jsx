import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: "body2",
                    },
                    style: {
                        fontSize: 11,
                    },
                },
                {
                    props: {
                        variant: "body3",
                    },
                    style: {
                        fontSize: 9,
                    },
                }
            ]
        }
    }
})

export default function TourCard({tour}) {
    return (
        <Grid item xs={3}>
            <ThemeProvider theme={theme}>
                <Paper elevation={3}>
                    <img 
                        src={tour.image}
                        alt="Niagra Falls"
                        className='img'
                    />
                    <Box paddingX={1}>
                        <Typography variant="subtitle1" component="h2">
                            {tour.name}
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <AccessTimeIcon sx={{ width: 12.5}}/>
                            <Typography variant='body2' component='p' marginLeft={0.5}>
                                {tour.duration} hours
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                            marginTop={3}
                        >
                            <Rating name="read-only" value={tour.rating} precision={0.5} size='small' readOnly />
                            <Typography variant='body3' component='p' marginLeft={0.5}>{tour.rating}</Typography>
                            <Typography variant='body3' component='p' marginLeft={1.5}>({tour.numberOfReviews} reviews)</Typography>
                        </Box>
                        <Box>
                            <Typography variant='h6' component='h3' marginTop={0}>{tour.price}</Typography>

                        </Box>
                    </Box>
                </Paper>
            </ThemeProvider>
        </Grid>
    );
};