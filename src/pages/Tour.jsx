import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ImageCollage from "../components/ImageCollage";
import TourAccordian from "../components/TourAccordian";
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import TourModal from "../components/TourModal";

export default function Tour() {
    return (
        <div className="tour">
            <Container
                sx={{ width: 900 }}
            >
                <Typography variant="h3" component="h1" marginTop={3}>
                    Expore the World in Vegas!!!
                </Typography>
                <Box
                    marginTop={3}
                    sx={{
                        display: "flex"
                    }}
                >
                    <img src="https://media.timeout.com/images/105124791/750/422/image.jpg" alt="" height={325} />
                    <ImageCollage />
                </Box>
                <Box>
                    <Typography variant="h6" component="h4" marginTop={3}>
                        About this ticket
                    </Typography>
                    <Typography variant="paragraph" component="p" marginTop={3} marginBottom={2}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio mollitia ab nulla? Sit architecto earum enim provident quibusdam dicta voluptates eos eveniet dolorum libero obcaecati, distinctio fugiat voluptate mollitia autem, unde placeat quisquam ab facere nesciunt sint cumque laudantium voluptas.
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h6" component="h4" marginTop={3}>
                        Frequently Asked Questions
                    </Typography>
                    <TourAccordian />
                </Box>
                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                    <BottomNavigation>
                        <TourModal />
                    </BottomNavigation>
                </Paper>
            </Container>
        </div>
    )
}