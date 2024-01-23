import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


export default function ServicesHighlight() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} lg={6}>
                    Blue Section
                </Grid>
                <Grid item xs={12} lg={6}>
                    Image section
                </Grid>
            </Grid>
        </Box>
    );
}