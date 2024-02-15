import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function ServicesArea() {

    return (
        <Container className='ServicesArea'>
            <Box marginY={8}>
                <Typography variant='h4' component='h4' marginBottom={5}>Our Service Area</Typography>
                <Typography variant='body1' component='p'>
                    We are locally owned and operated and serving the Greater Salt Lake Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita iste quos ullam voluptatibus. Vel, quidem ab porro quae sapiente expedita at distinctio necessitatibus! Quia sapiente aut velit reiciendis earum, aperiam error sequi eum eligendi dignissimos libero ducimus, non impedit ratione!
                </Typography>
            </Box>
        </Container>
    )
}