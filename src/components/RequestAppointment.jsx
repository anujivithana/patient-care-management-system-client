import React, { useState } from 'react';
import {
  Button,
  MenuItem,
  Select,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  Box,
} from '@mui/material';
import backgroundImage from '../images/loginimg.jpg';

const RequestAppointment = () => {
  const [clinic, setClinic] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [email, setEmail] = useState('');
  const [open, setOpen] = useState(false);

  const handleClinicChange = (event) => {
    setClinic(event.target.value);
  };

  const handleDateChange = (event) => {
    setAppointmentDate(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleRequestAppointment = async () => {
    try {
      // /api/appointments/request
      const response = await fetch('http://localhost:5000/api/appointments/request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          clinic,
          appointmentDate,
          email,
        }),
      });

      if (response.ok) {
        setOpen(true);
      } else {
        const data = await response.json();
        alert(data.message || 'Failed to request appointment');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while requesting the appointment.');
    }
  };

  const handleClose = () => {
    setOpen(false);
    // Here you can add logic to navigate to the home page if needed
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'rgba(230, 230, 250, 0.8)', // lavender color with some transparency
          padding: '20px',
          borderRadius: '8px',
          maxWidth: '400px',
          width: '100%',
        }}
      >
        <FormControl fullWidth margin="normal">
          <InputLabel id="clinic-select-label">Clinic</InputLabel>
          <Select
            labelId="clinic-select-label"
            value={clinic}
            onChange={handleClinicChange}
          >
            <MenuItem value="Palliative Care Clinic">Palliative Care Clinic</MenuItem>
            <MenuItem value="Breast Clinic">Breast Clinic</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Appointment Date"
          type="date"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          value={appointmentDate}
          onChange={handleDateChange}
        />

        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={handleEmailChange}
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleRequestAppointment}
        >
          Request Appointment
        </Button>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Appointment Request Sent</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Thank you, your appointment request is sent for confirmation. The confirmation message will be sent to you through notifications on the website and an email to the given email address.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};

export default RequestAppointment;
