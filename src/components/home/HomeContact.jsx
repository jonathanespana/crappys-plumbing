import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';

export default function HomeContact() {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Container sx={{ marginBottom: 5 }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item lg={6} sx={{ display: { xs: 'none', lg: 'block' } }}>
                        <Paper elevation={0} sx={{ borderRadius: "40px 0px 40px 0px", overflow: 'hidden', marginRight: 3, bgcolor: '#142740', color: "#f1f1f1" }}>
                            <Box sx={{ width: '100%' }} cols={1} rowHeight={350} padding={5}>
                                <img src="https://i.ibb.co/FDk5Wvs/plumber-contact-icon.png" alt="plumber-contact-icon" border="0" width={150} />
                                <Box display='flex' flexDirection="column" alignItems="center">
                                    <Typography variant='h3' component='p' textAlign="center">
                                        Contact Crappy's Plumbing Today!
                                    </Typography>
                                    <Typography variant='h4' component='p' marginTop={1.5}>
                                        We're Ready to Help
                                    </Typography>
                                    <Typography variant='body1' component='p' marginY={3}>
                                        We'll contact you shortly to help see how we can help out.
                                    </Typography>
                                </Box>
                                <form>
                                    <Box sx={{ flexGrow: 1 }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={6}>
                                                <TextField fullWidth label="First Name" variant="filled" style={{backgroundColor: "#C1CBD9"}}/>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField fullWidth label="Last Name" variant="filled" style={{backgroundColor: "#C1CBD9"}}/>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField fullWidth label="Phone" variant="filled" style={{backgroundColor: "#C1CBD9"}}/>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField fullWidth label="Email" variant="filled" style={{backgroundColor: "#C1CBD9"}}/>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField fullWidth label="Address" variant="filled" placeholder="Enter a location" style={{backgroundColor: "#C1CBD9"}}/>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <FormControl fullWidth variant="filled" style={{backgroundColor: "#C1CBD9"}}>
                                                    <InputLabel id="demo-simple-select-label">Are you a new Customer?</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={age}
                                                        label="Age"
                                                        onChange={handleChange}
                                                    >
                                                        <MenuItem value={10}>Yes, potentially I'm a new customer</MenuItem>
                                                        <MenuItem value={20}>No, I'm a returning customer</MenuItem>
                                                        <MenuItem value={30}>Neither, I just have some questions</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    variant='filled'
                                                    fullWidth
                                                    id="outlined-multiline-static"
                                                    label="How can we help you?"
                                                    multiline
                                                    rows={4}
                                                    
                                                    style={{backgroundColor: "#C1CBD9"}}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </form>
                                <Box display="flex" flexDirection="column" alignItems="center" marginTop={3}>
                                    <Typography textAlign="center" marginBottom={3}>
                                        By submitting, you agree to be contacted about call, text, or email.  Message frequency varies.  Msg & data rates may apply. Text STOP to cancel. Acceptable Use Policy.
                                    </Typography>
                                    <Button variant='contained' color='warning' size='large'>SEND MESSAGE</Button>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Paper elevation={0}>
                            <Box paddingLeft={3}>
                                <img src="https://i.ibb.co/jM190S1/plumber-always-icon.png" alt="plumber-always-icon" border="0" width={150} style={{ opacity: 0.8 }} />
                                <Typography variant='h3' component='h3' sx={{ textTransform: 'uppercase'}}>Trust us to be there for you 24/7</Typography>
                                <Typography variant='body1' component='p' marginTop={2} lineHeight={1.5}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit accusamus magni tempora enim atque, numquam nostrum iure omnis eaque dignissimos, nesciunt, eum aperiam repellendus voluptatibus vero asperiores! Nihil ea doloribus quia et ullam non quisquam, deserunt, excepturi libero neque alias!</Typography>
                                <Typography variant='h5' component='h5' marginTop={2}>When you call us for emergency service, you can always expect:</Typography>
                                <List>
                                    <ListItem sx={{ paddingY: 0}}>
                                        <ListItemIcon>
                                            <img src="https://i.ibb.co/jHF2Y6V/services-bullet-icon.png" alt="services-bullet-icon" border="0" width={24}/>
                                        </ListItemIcon>
                                        <ListItemText>
                                            Quick response from our highly experienced team
                                        </ListItemText>
                                    </ListItem> 
                                    <ListItem sx={{ paddingY: 0}}>
                                        <ListItemIcon>
                                            <img src="https://i.ibb.co/jHF2Y6V/services-bullet-icon.png" alt="services-bullet-icon" border="0" width={24}/>
                                        </ListItemIcon>
                                        <ListItemText>
                                            Competitive rates on services and repairs
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem sx={{ paddingY: 0}}>
                                        <ListItemIcon>
                                            <img src="https://i.ibb.co/jHF2Y6V/services-bullet-icon.png" alt="services-bullet-icon" border="0" width={24}/>
                                        </ListItemIcon>
                                        <ListItemText>
                                            Upfront pricing so there are no surprises
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem sx={{ paddingY: 0}}>
                                        <ListItemIcon>
                                            <img src="https://i.ibb.co/jHF2Y6V/services-bullet-icon.png" alt="services-bullet-icon" border="0" width={24}/>
                                        </ListItemIcon>
                                        <ListItemText>
                                            The assurance that we will take great care of your property
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem sx={{ paddingY: 0}}>
                                        <ListItemIcon>
                                            <img src="https://i.ibb.co/jHF2Y6V/services-bullet-icon.png" alt="services-bullet-icon" border="0" width={24}/>
                                        </ListItemIcon>
                                        <ListItemText>
                                            Peace of mind that your issue has a permanent fix
                                        </ListItemText>
                                    </ListItem>
                                </List>
                                <Typography variant='body1' component='p' marginTop={2} lineHeight={1.5}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod iusto expedita consequuntur eaque ullam accusamus nemo aliquam sapiente illo possimus unde omnis similique iure tempora, et, distinctio numquam iste dolorum aperiam explicabo. Dolorum amet dignissimos aspernatur omnis voluptate, cumque iste, ad magni enim porro ab?</Typography>
                                <Typography variant='body1' component='p' marginTop={2} lineHeight={1.5}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi doloribus ipsam voluptate, illum deleniti illo voluptates, dolorem consectetur optio odio perferendis architecto, aspernatur labore ullam totam est nihil ipsum libero?
                                </Typography>
                                <Box padding={3} bgcolor="#142740" marginTop={3}>
                                    <Typography variant='body1' component='p' lineHeight={1.5} textAlign='center' color="#f1f1f1">
                                        Get started today by dialing<span style={{ color: "lightblue" }}> (555) 5H1T-5UX</span> or quickly fill out our online request.  We looking forwardiing to helping you soon!
                                    </Typography>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}