import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const Service = (props) => {
    const { name, img, price, description } = props.service;
    return (

        <Grid item xs={12} md={4}>
            <Card sx={{ minHeight: '500px' }}>
                <CardMedia
                    component="img"
                    height="200"
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        Price:${price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Button sx={{ marginTop: '30px' }} variant="contained">Details</Button>
                </CardContent>

            </Card>

        </Grid>
    );
};

export default Service;