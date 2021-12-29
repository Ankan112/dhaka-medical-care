import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import img1 from '../../img/12.jpg'
import img2 from '../../img/13.jpg'
import img3 from '../../img/14.jpg'
import img4 from '../../img/15.jpg'
import img5 from '../../img/16.jpg'
import img6 from '../../img/17.jpg'
import img7 from '../../img/18.jpg'
import img8 from '../../img/19.jpg'

const Gallery = () => {
    return (
        <Container>
            <Typography sx={{ marginBottom: '50px' }} variant='h3'>Gallery of Our Clinic</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="250"
                            image={img1}
                            alt="green iguana"
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="250"
                            image={img2}
                            alt="green iguana"
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="250"
                            image={img3}
                            alt="green iguana"
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="250"
                            image={img4}
                            alt="green iguana"
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="250"
                            image={img5}
                            alt="green iguana"
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="250"
                            image={img6}
                            alt="green iguana"
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="250"
                            image={img7}
                            alt="green iguana"
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="250"
                            image={img8}
                            alt="green iguana"
                        />
                    </Card>
                </Grid>

            </Grid>
        </Container>
    );
};

export default Gallery;