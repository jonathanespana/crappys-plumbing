import { Paper } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function AboutTeamGrid() {

    return(
        <Box className="aboutTeamGrid" marginTop={8}>
            <Container>
                <Box>
                    <Typography variant='h3' component='h3' textAlign="center">
                        The Krappy's Plumbing Team
                    </Typography>
                </Box>
                <Box marginTop={5} sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} lg={3}>
                            <Box sx={{ overflow: "hidden", display: "flex", justifyContent: "center"}}>
                                <img className='aboutTeamGridImg' src='https://i.ibb.co/pQHg5j4/worker-1.png' style={{ height: 320 }} />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3}>
                            <Box sx={{ overflow: "hidden", display: "flex", justifyContent: "center"}}>
                                <img className='aboutTeamGridImg' src='https://i.ibb.co/mqLC2M4/worker-2.png' style={{ height: 320 }} />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3}>
                            <Box sx={{ overflow: "hidden", display: "flex", justifyContent: "center"}}>
                                <img className='aboutTeamGridImg' src='https://i.ibb.co/7WtMJkM/worker-3.png' style={{ height: 320 }} />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3}>
                            <Box sx={{ overflow: "hidden", display: "flex", justifyContent: "center"}}>
                                <img className='aboutTeamGridImg' src='https://i.ibb.co/844Q6Qs/worker-4.png' style={{ height: 320 }} />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3}>
                            <Box sx={{ overflow: "hidden", display: "flex", justifyContent: "center"}}>
                                <img className='aboutTeamGridImg' src='https://i.ibb.co/pQHg5j4/worker-1.png' style={{ height: 320 }} />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3}>
                            <Box sx={{ overflow: "hidden", display: "flex", justifyContent: "center"}}>
                                <img className='aboutTeamGridImg' src='https://i.ibb.co/mqLC2M4/worker-2.png' style={{ height: 320 }} />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3}>
                            <Box sx={{ overflow: "hidden", display: "flex", justifyContent: "center"}}>
                                <img className='aboutTeamGridImg' src='https://i.ibb.co/7WtMJkM/worker-3.png' style={{ height: 320 }} />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3}>
                            <Box sx={{ overflow: "hidden", display: "flex", justifyContent: "center"}}>
                                <img className='aboutTeamGridImg' src='https://i.ibb.co/844Q6Qs/worker-4.png' style={{ height: 320 }} />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}