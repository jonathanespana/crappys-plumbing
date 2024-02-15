import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

import './pricingContact.css';

export default function PricingContact() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return(
        <Box className="PricingContact" paddingY={8}>
            <Container>
                <Box display='flex' flexDirection="column" alignItems="center">
                    <Typography variant='h3' component='p' color="#f4f4f4" textAlign="center">
                        Reach out today to confirm your upfront pricing.
                    </Typography>
                    <Typography variant='h4' component='p' color="#f4f4f4" marginTop={1.5}>
                        We're Ready to Help
                    </Typography>
                    <Typography variant='body1' component='p' color="#f4f4f4" marginY={3}>
                        We'll contact you shortly to help see how we can help out.
                    </Typography>
                </Box>
                <form>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField fullWidth label="First Name" variant="filled" style={{ backgroundColor: "#C1CBD9" }} />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth label="Last Name" variant="filled" style={{ backgroundColor: "#C1CBD9" }} />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth label="Phone" variant="filled" style={{ backgroundColor: "#C1CBD9" }} />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth label="Email" variant="filled" style={{ backgroundColor: "#C1CBD9" }} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth label="Address" variant="filled" placeholder="Enter a location" style={{ backgroundColor: "#C1CBD9" }} />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth variant="filled" style={{ backgroundColor: "#C1CBD9" }}>
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

                                    style={{ backgroundColor: "#C1CBD9" }}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </form>
                <Box display="flex" flexDirection="column" alignItems="center" marginTop={3}>
                    <Typography color="#f4f4f4" textAlign="center" marginBottom={3}>
                        By submitting, you agree to be contacted about call, text, or email.  Message frequency varies.  Msg & data rates may apply. Text STOP to cancel. Acceptable Use Policy.
                    </Typography>
                    <Button variant='contained' color='warning' size='large'>SEND MESSAGE</Button>
                </Box>
            </Container>
        </Box>
    )
}