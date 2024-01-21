import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import TourCard from '../components/tourCard';
import cities from '../data.json';
import { Typography } from '@mui/material';

export default function Home() {
    return (
        <div className="home">
            <Container
                sx={{marginY: 5}}
            >
                {cities.map((city) => (
                <>
                    <Typography
                        variant='h4'
                        component='h2'
                        marginTop={5}
                        marginBottom={3}
                    >
                        Top {city.name} Tours
                    </Typography>
                    <Grid container spacing={3}>
                        {city.tours.map((tour, index) => <TourCard tour={tour} key={index} />)}
                    </Grid>
                </>
                ))}
                
            </Container>
        </div>
    )
}