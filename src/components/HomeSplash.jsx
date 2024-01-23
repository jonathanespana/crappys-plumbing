import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import Button from '@mui/material/Button';


export default function HomeSplash() {
    return (
        <Box sx={{
                position: "relative",
                overflow: "hidden",
                height: 625,
            }}>
                <img style={{ position: "absolute", zIndex: -5 }}className="splash-background" width="100%" src="https://i.ibb.co/gdFjHBm/Adobe-Stock-482845105.jpg" alt="Adobe-Stock-482845105" border="0"/>
                <Box width='100%' height="100%" sx={{
                    backgroundColor: "#08668c",
                    opacity: 0.6,
                    position: "absolute",
                    zIndex: 0
                }}>
                </Box>
                <Box width='100%' height="100%" sx={{
                    position: "absolute",
                    zIndex: 5,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <PlumbingIcon color="action" sx={{ fontSize: 100}} />
                    <Typography variant='h3' marginTop={3} sx={{ textTransform: "uppercase"}}>Pretty reliable plumbing!</Typography>
                    <Typography variant='h5' marginTop={0.5}>No Job is Too Big, Unless We're Busy</Typography>
                    <Typography variant='subtitle1' marginY={3}>Proudly serving the Great Salt Lake Valley</Typography>
                    <Button variant="contained" color="warning">Make an Appointment</Button>
                </Box>
            </Box>

    )
}