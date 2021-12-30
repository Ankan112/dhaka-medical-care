import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ServicesModal from '../Components/ServicesModal/ServicesModal';
import useAuth from '../Components/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const [openService, setServiceOpen] = React.useState(false);
    const handleServiceOpen = () => setServiceOpen(true);
    const handleServiceClose = () => setServiceOpen(false);
    const { name, img, price, description } = service;
    const { user } = useAuth();

    const navigate = useNavigate();


    return (
        <>
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

                        {
                            user.email ? <Button onClick={handleServiceOpen} sx={{ marginTop: '30px' }} variant="contained">Details</Button>
                                :
                                <Button onClick={() => {
                                    navigate('/login')
                                }} sx={{ marginTop: '30px' }} variant="contained">Details</Button>
                        }


                    </CardContent>

                </Card>

            </Grid>
            <ServicesModal
                service={service}
                openService={openService}
                handleServiceClose={handleServiceClose}
            ></ServicesModal>
        </>
    );
};

export default Service;