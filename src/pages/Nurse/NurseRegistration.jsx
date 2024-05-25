import React, { useState } from 'react';
import NurseLeftNavbar from '../../components/LeftNavBarNurse';
import TopNavbar from '../../components/TopNavbar';
import Box from "@mui/material/Box";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import DateTimePicker from 'react-datetime-picker';

// Sample data
const appointments = [
  { id: 1, name: 'John Doe', doctor: 'Dr. Smith', status: 'Pending' },
  { id: 2, name: 'Jane Smith', doctor: 'Dr. Johnson', status: 'Pending' },
  // Add more appointment objects here
];

export default function NurseRegistration() {
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [bhtNumber, setBhtNumber] = useState('');
  const [bedNumber, setBedNumber] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [nurseId, setNurseId] = useState('');
  const [admissionDateTime, setAdmissionDateTime] = useState(new Date());

  const navigate = useNavigate();

  const handleAdmitClick = (appointment) => {
    setSelectedAppointment(appointment);
  };

  const handleProfileClick = (appointmentId) => {
    navigate(`/patient/profile/${appointmentId}`);
  };

  const handleWardDetailsClick = () => {
    navigate('/nurse/nursewarddetails');
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(`BHT Number: ${bhtNumber}, Bed Number: ${bedNumber}, Room Number: ${roomNumber}, Nurse ID: ${nurseId}, Admission Date & Time: ${admissionDateTime.toISOString()}`);
    setSelectedAppointment(null); // Reset after submission
  };

  return (
    <div>
      <TopNavbar />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <NurseLeftNavbar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Ward Admission Details</h1>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Appointment ID</TableCell>
                  <TableCell>Patient Name</TableCell>
                  <TableCell>Doctor Referred</TableCell>
                  <TableCell>Patient Profile</TableCell>
                  <TableCell>Admission Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {appointments.map((appointment) => (
                  <TableRow key={appointment.id}>
                    <TableCell>{appointment.id}</TableCell>
                    <TableCell>{appointment.name}</TableCell>
                    <TableCell>{appointment.doctor}</TableCell>
                    <TableCell>
                      <Button variant="contained" color="primary" onClick={() => handleProfileClick(appointment.id)}>
                        View Profile
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button variant="contained" color="primary" onClick={() => handleAdmitClick(appointment)}>
                        Admit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {selectedAppointment && (
            <Box component="form" sx={{ mt: 3 }} onSubmit={handleFormSubmit}>
              <h2>Admit Patient: {selectedAppointment.name}</h2>
              <TextField
                label="BHT Number"
                value={bhtNumber}
                onChange={(e) => setBhtNumber(e.target.value)}
                required
                fullWidth
                margin="normal"
              />
              <TextField
                label="Bed Number"
                value={bedNumber}
                onChange={(e) => setBedNumber(e.target.value)}
                required
                fullWidth
                margin="normal"
              />
              <TextField
                label="Room Number"
                value={roomNumber}
                onChange={(e) => setRoomNumber(e.target.value)}
                required
                fullWidth
                margin="normal"
              />
              <TextField
                label="Nurse ID"
                value={nurseId}
                onChange={(e) => setNurseId(e.target.value)}
                required
                fullWidth
                margin="normal"
              />
              
              <div>
               <label htmlFor="admission-datetime">Admission Date & Time:</label>
                <DateTimePicker
                  id="admission-datetime"
                  value={admissionDateTime}
                  onChange={(newValue) => setAdmissionDateTime(newValue)}
                  required
                />
               
              </div>

              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
              <Button variant="outlined" color="secondary" sx={{ ml: 2 }} onClick={handleWardDetailsClick}>
                Ward Details
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </div>
  );
}
