import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import './pricingSplash.css';

export default function PricingSplash() {

    return(
        <Box className="PricingSplash">
            <Container>
                <Box display='flex' alignItems='center' height={450} color='#f7f7f7'>
                    <Typography variant='h2' component='h2'>
                        Pricing
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}