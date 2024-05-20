import React, { useState, useEffect } from 'react';
import { Card, CardContent, TextField, FormControl, InputLabel, Select, MenuItem, Button, Box } from '@mui/material';
import axios from 'axios';

const EditDoctorForm = ({ onClose, doctor }) => {
  // const [fullName, setFullName] = useState('');
  // const [email, setEmail] = useState('');
  // const [specialization, setSpecialization] = useState('');
  // const [gender, setGender] = useState('');
  // const [dateOfBirth, setDateOfBirth] = useState('');
  // const [contactNumber, setContactNumber] = useState('');
  // const [address, setAddress] = useState('');
  // const [image, setImage] = useState(null);
  // const [description, setDescription] = useState('');
  // const [department, setDepartment] = useState('');
  // const [joinDate, setJoinDate] = useState('');
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  const [doctorData, setdoctorData] = useState({
    FullName: '',
    Email: '',
    Specialization: '',
    Gender: '',
    DateOfBirth: '',
    ContactNumber: '',
    Address: '',
    Description: '',
    Department: '',
    JoinDate: '',
    Username: ''
  });
  

  useEffect(() => {

      setdoctorData({
        FullName: doctor.FullName,
        Email: doctor.Email || '',
        Specialization: doctor.Specialization || '',
        Gender: doctor.Gender || '',
        DateOfBirth: doctor.DateOfBirth || '',
        ContactNumber: doctor.ContactNumber || '',
        Address: doctor.Address || '',
        Description: doctor.Description || '',
        Department: doctor.Department || '',
        JoinDate: doctor.JoinDate || '',
        Username: doctor.Username || ''
  
      });
    

  }, [doctor]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
//     let newValue = value;

//     if (name === 'FullName') {
//       newValue = newValue.slice(0, 20); // Limit to 20 characters for Address
//       newValue = newValue.replace(/[0-9]/g, ''); // Allow only alphabets
//     } else if (name === 'PhoneNumber') {
//       newValue = newValue.slice(0, 10);
//       newValue = newValue.replace(/[^0-9]/g, ''); // Allow only numbers
//     } else if (name === 'Username') {
//       newValue = newValue.slice(0, 25); // Limit to 15 characters for Address
//       newValue = newValue.replace(/\s/g, ''); // Remove spaces
//     }else if (name === 'Address') {
//       newValue = newValue.slice(0, 100); // Limit to 100 characters for Address
//     } else if (name === 'Email') {
//       newValue = newValue.slice(0, 50); // Limit to 50 characters for Email
//     } else if (name === 'NIC') {
//         newValue = newValue.slice(0, 12); // Limit to 50 characters for Email
//       }
  
//     if (type === 'file') {
//       // Handle file input separately
//       newValue = e.target.files[0];
//     }
  
    setdoctorData({ ...doctorData, [name]: value, });
  };
  
  

  const handleSubmit = async () => {
    //e.preventDefault();

    console.log(doctorData);
    //console.log(fullName);


    try {
      // Update existing doctor
      await axios.put(`http://localhost:5000/api/doctors/${doctor.DoctorID}`, doctorData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
      //alert('Doctor details updated successfully!');
      //onClose();
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
            value={doctorData.FullName}
            name='FullName'
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            value={doctorData.Email}
            name='Email'
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Username"
            value={doctorData.Username}
            name='Username'
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          
          <TextField
            label="Specialization"
            value={doctorData.Specialization}
            name='Specialization'
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Department/Ward/Unit"
            value={doctorData.Department}
            name='Department/Ward/Unit'
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Join Date"
            value={doctorData.JoinDate}
            name='Join Date'
            onChange={handleChange}
            fullWidth
            margin="normal"
            type="date"
            InputLabelProps={{ shrink: true }}
          />
          <FormControl fullWidth margin="normal">
            <InputLabel id="gender-label">Gender</InputLabel>
            <Select
              labelId="gender-label"
              id='gender'
              name='Gender'
              value={doctorData.Gender}
              onChange={handleChange}
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Date of Birth"
            value={doctorData.DateOfBirth}
            name='Date of Birth'
            onChange={handleChange}
            fullWidth
            margin="normal"
            type="date"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Contact Number"
            value={doctorData.ContactNumber}
            name='Contact Number'
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Address"
            value={doctorData.Address}
            name='Address'
            onChange={handleChange}
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
                onChange={handleChange}
              />
            </Button>
          </Box>
          <TextField
            label="Description"
            value={doctorData.Description}
            name='Description'
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={4}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Save Changes
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default EditDoctorForm;
