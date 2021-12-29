import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Service from '../../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    return (
        <Container>
            <Typography sx={{ marginY: '40px' }} variant='h3'>Our Popular Services</Typography>
            <Grid container spacing={3}>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </Grid>
        </Container>
    );
};

export default Services;