import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function ServicesExpects() {

    return (
        <Container className='ServicesExpects'>
            <Box>
                <Typography variant='body1' component='p'>
                    As a homeowner, backed up drains can cause major headaches. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa enim omnis quisquam voluptas facilis. Impedit ipsum aspernatur incidunt sint accusamus?
                </Typography>
                <Typography variant='h4' component='h4' marginY={5}>
                    What To Expect
                </Typography>
                <Typography variant='body1' component='p'>
                    Our team is ready to help 24/7.  Send in a request here online or give us a call.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur exercitationem reiciendis ducimus dicta, aliquid officiis eum voluptatem aspernatur dolorum qui. Nam explicabo voluptatum consectetur ratione id iste veritatis, illum natus ipsum itaque assumenda eaque architecto esse, facere nisi eius eveniet. Iusto culpa doloremque eaque incidunt.
                </Typography>
            </Box>
        </Container>
    )
}