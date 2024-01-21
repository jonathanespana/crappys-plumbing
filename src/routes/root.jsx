import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import TourCard from '../components/tourCard';

export default function Root() {

    return (
        <Container className='Root'>
                <Grid container spacing={3}>
                    <TourCard />
                    <TourCard />
                    <TourCard />
                    <TourCard />
                    
                </Grid>
        </Container>
    );
}