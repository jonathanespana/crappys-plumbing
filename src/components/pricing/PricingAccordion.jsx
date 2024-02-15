import * as React from 'react';
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function PricingAccordion() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Container>
            <Typography variant='h3' component='h3' marginTop={5}>Our Prices</Typography>
            <Typography variant='body1' component='p' marginY={2}> We take pride in our upfront and transparent pricing.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto quam dolores possimus nesciunt nisi sit blanditiis, at maiores soluta obcaecati rerum sequi doloremque molestias ipsa error facere consequuntur recusandae inventore cum ut sint perferendis quaerat! Illo recusandae dolorem tenetur sint aperiam magni corrupti a aliquam velit, similique tempora unde ipsa.</Typography>
            <div>
                <Accordion>
                    <Typography variant='h4' component='h4' paddingY={1.5} marginX={2}>Drain Cleaning w/ Cable Machine</Typography>
                </Accordion>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            2" Pipes
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }}>$110</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Drain cleaning service for a single clogged kitchen sink, bathroom sink, shower drain, bathtub drain, washer drain, garbage disposal, or toilet bowl. Once we are on-site, each additional drain is only $55.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>3" to 4" Pipes</Typography>
                        <Typography sx={{ color: 'text.secondary' }}>
                            $180
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Drain cleaning service for the mainline between your property and the city sewer using a powerful cable machine.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            Additional Drain
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }}>
                            $65
                        </Typography>
                    </AccordionSummary>
                </Accordion>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>Overtime Surge</Typography>
                        <Typography sx={{ color: 'text.secondary' }}>
                            $50
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            After 5 PM and weekends/holidays
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div>
                <Accordion>
                    <Typography variant='h4' component='h4' paddingY={1.5} marginX={2}>Drain Cleaning Using High Pressure Hydro Jetting</Typography>
                </Accordion>
                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel5bh-content"
                        id="panel5bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            Hydro Jetter
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }}>$425</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            If the blockage is due to roots, grease, sludge, or other hard obstructions in the line, we recommend using our trailer-mounted high-pressure hydrojetter instead of a cable machine. The jetter nozzle will blast the pipe with upwards of 20 gallons of water per minute at 4000 psi in a full 360 degrees to thoroughly clean and restore the full capacity of the line. Stubborn clogs and recurring blockages are no match for a hydrojetter. Unlike the cable machine that may just punch a hole in the blockage, a hydrojetter will provide a longer-lasting solution.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel6bh-content"
                        id="panel6bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>Hydro Jetter over 2hrs</Typography>
                        <Typography sx={{ color: 'text.secondary' }}>
                            $190
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Cost per hour if jetter used for over 2 hours.  An extremely rare occurance!
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel7bh-content"
                        id="panel7bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>Overtime Surge</Typography>
                        <Typography sx={{ color: 'text.secondary' }}>
                            $50
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            After 5 PM and weekends/holidays
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div>
                <Accordion>
                    <Typography variant='h4' component='h4' paddingY={1.5} marginX={2}>Other Services</Typography>
                </Accordion>
                <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel8bh-content"
                        id="panel8bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            Camera Inspection/ Pipe Locating
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }}>$250</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        A camera inspection is the best way to accurately diagnose problems and locate lines. We recommend a camera inspection if you have recurring blockages or are completing due diligence for a home purchase. This will save you money in the long term by avoiding unnecessary and costly replacements until absolutely necessary. Our camera inspection includes high-resolution digital footage shared via the cloud and pipe locating and/or marking (including depth).
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel9bh-content"
                        id="panel9bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>RootX Foaming Root Killer</Typography>
                        <Typography sx={{ color: 'text.secondary' }}>
                            $75
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        We recommend applying RootX, a foaming root inhibitor, immediately after the line is clear of roots for maximum effectiveness. This formula prevents future growth for up to a year. RootX is easy to use and is the top environmentally safe root killer on the market.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel10bh-content"
                        id="panel10bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>Enzymes</Typography>
                        <Typography sx={{ color: 'text.secondary' }}>
                            $55
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        Safe alternative to harsh chemicals that are more effective at cleaning and maintaining pipes. Enzymes are living organisms that break down fats and other organic materials before they accumulate into a blockage. 
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </Container>
    )
}