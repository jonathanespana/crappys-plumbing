import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import './servicesSplash.css'

export default function ServicesSplash() {

    return (
        <Box className="ServicesSplash">
            <Container>
                <Box display='flex' alignItems='center' height={450} color='#f7f7f7'>
                    <Typography variant='h2' component='h2'>
                        Our Services
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}