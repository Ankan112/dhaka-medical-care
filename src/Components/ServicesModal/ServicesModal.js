import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button, TextField } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ServicesModal = ({ openService, handleServiceClose, service }) => {
    const { name, price, time, doctor } = service
    return (
        <Modal
            open={openService}
            onClose={handleServiceClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <TextField
                    sx={{ width: '100%', marginBottom: '20px' }}
                    id="outlined-read-only-input"
                    label='Service Name'
                    defaultValue={name}
                    InputProps={{
                        readOnly: true,
                    }}
                />
                <TextField
                    sx={{ width: '100%', marginBottom: '20px' }}
                    id="outlined-read-only-input"
                    label='Time'
                    defaultValue={time}
                    InputProps={{
                        readOnly: true,
                    }}
                />
                <TextField
                    sx={{ width: '100%', marginBottom: '20px' }}
                    id="outlined-read-only-input"
                    label='Doctor Name'
                    defaultValue={doctor}
                    InputProps={{
                        readOnly: true,
                    }}
                />
                <TextField
                    sx={{ width: '100%', marginBottom: '20px' }}
                    id="outlined-read-only-input"
                    label='Price'
                    defaultValue={`$${price}`}
                    InputProps={{
                        readOnly: true,
                    }}
                />
                <Button onClick={handleServiceClose} variant="contained">Appointment Now</Button>


            </Box>
        </Modal>
    );
};

export default ServicesModal;