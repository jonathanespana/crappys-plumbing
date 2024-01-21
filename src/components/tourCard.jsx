import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { createTheme } from '@mui/material';

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: 'body2'
                    },
                    style: {
                        fontSize: 11
                    },
                }
            ]
        }
    }
})

export default function TourCard() {
    return (
        <Grid item xs={3}>
                <Paper elevation={3}>
                    <img 
                        src="https://tcproduction.blob.core.windows.net/media/%7B240f8b72-1159-4fd3-a150-0a837f50ba4a%7D.2573758641_297d6d19fa_o.jpg" 
                        alt="Niagra Falls"
                        className='img'
                    />
                    <Box paddingX={1}>
                        <Typography variant="subtitle1" component="h2">
                            Immerser into the Falls
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <AccessTimeIcon sx={{ width: 12.5}}/>
                            <Typography variant='body2' component='p' marginLeft={0.5}>
                                5 hours
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                            marginTop={3}
                        >
                            <Rating name="read-only" value={4.5} precision={0.5} size='small' readOnly />
                            <Typography variant='body2' component='p' marginLeft={0.5}>4.5</Typography>
                            <Typography variant='body2' component='p' marginLeft={1.5}>(655 reviews)</Typography>
                        </Box>
                        <Box>
                            <Typography variant='h6' component='h3' marginTop={0}>From $145</Typography>

                        </Box>
                    </Box>
                </Paper>
        </Grid>
    );
};