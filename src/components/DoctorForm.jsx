import React, { useState } from 'react';
import { Card, CardContent, TextField, FormControl, InputLabel, Select, MenuItem, Button, Box } from '@mui/material';
import axios from 'axios';

const DoctorForm = ({ onClose, doctor = null }) => {
  const [fullName, setFullName] = useState(doctor?.Name || '');
  const [email, setEmail] = useState(doctor?.Email || '');
  const [nic, setNIC] = useState(doctor?.NIC || '');
  const [specialization, setSpecialization] = useState(doctor?.Specialization || '');
  const [gender, setGender] = useState(doctor?.Gender || '');
  const [dateOfBirth, setDateOfBirth] = useState(doctor?.DateOfBirth || '');
  const [contactNumber, setContactNumber] = useState(doctor?.ContactNumber || '');
  const [address, setAddress] = useState(doctor?.Address || '');
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const [department, setDepartment] = useState(doctor?.Department || '');
  const [joinDate, setJoinDate] = useState(doctor?.JoinDate || '');
  const [username, setUsername] = useState(doctor?.Username || '');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('fullName', fullName);
    formData.append('email', email);
    formData.append('nic', nic);
    formData.append('specialization', specialization);
    formData.append('gender', gender);
    formData.append('dateOfBirth', dateOfBirth);
    formData.append('contactNumber', contactNumber);
    formData.append('address', address);
    formData.append('image', image);
    formData.append('description', description);
    formData.append('department', department);
    formData.append('joinDate', joinDate);
    formData.append('username', username);
    formData.append('password', password);
  
    try {
      // Add new doctor
      await axios.post('http://localhost:5000/api/doctors', formData);
      alert('New doctor added successfully!');
      onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
      if (error.response && error.response.data && error.response.data.error) {
        alert(`Error: ${error.response.data.error}`);
      } else {
        alert('Error submitting form. Please try again.');
      }
    }
  };
  

  return (
    <Card>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name in Full"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="NIC"
            value={nic}
            onChange={(e) => setNIC(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Specialization"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Department/Ward/Unit"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Join Date"
            value={joinDate}
            onChange={(e) => setJoinDate(e.target.value)}
            fullWidth
            margin="normal"
            type="date"
            InputLabelProps={{ shrink: true }}
          />
          <FormControl fullWidth margin="normal">
            <InputLabel id="gender-label">Gender</InputLabel>
            <Select
              labelId="gender-label"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <MenuItem value="">Select Gender</MenuItem>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Date of Birth"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            fullWidth
            margin="normal"
            type="date"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Contact Number"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            fullWidth
            margin="normal"
            multiline
            rows={4}
          />
          <Box sx={{ mt: 2 }}>
            <Button variant="contained" component="label">
              Choose Image
              <input
                type="file"
                hidden
                onChange={(e) => setImage(e.target.files[0])}
              />
            </Button>
          </Box>
          <TextField
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            margin="normal"
            multiline
            rows={4}
          />
          {/* <FormControl fullWidth margin="normal">
            <InputLabel id="user-role-label">User Role</InputLabel>
            <Select
              labelId="user-role-label"
              value={userRole}
              onChange={(e) => setUserRole(e.target.value)}
            >
              <MenuItem value="">Select User Role</MenuItem>
              <MenuItem value="doctor">Doctor</MenuItem>
              <MenuItem value="nurse">Nurse</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="patient">Patient</MenuItem>
            </Select>
          </FormControl> */}
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            {doctor ? 'Save Changes' : 'Submit'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default DoctorForm;