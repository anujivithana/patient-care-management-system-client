// import { NavLink  } from "react-router-dom";
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

import "../styles/register.css";
import image from "../images/heroimg1.jpg";
import axios from 'axios';
import React, {useState} from 'react';
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";


const defaultTheme = createTheme();

export default function Register() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    contactnumber: '',
    // dob: '',
  });
  const [registrationMessage, setRegistrationMessage] = useState('');


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/register', formData);
      setRegistrationMessage("Registration successful!");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: `url(${image})`, // Set the image URL as background
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              
            }}
          />
         <Grid
  item
  xs={12}
  sm={8}
  md={5}
  component={Paper}
  elevation={6}
  square
  sx={{
    backgroundColor: "var(--light-red)",
  }}
>

<Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
  <TextField
  margin="normal"
  required
  fullWidth
  name="fullname" 
  label="Full Name"
  id="fullName"
  onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
/>

<TextField
  margin="normal"
  required
  fullWidth
  id="email"
  label="Email Address"
  name="email"
  autoComplete="email"
  autoFocus
  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
/>

<TextField
  margin="normal"
  required
  fullWidth
  name="password"
  label="Password"
  type="password"
  id="password"
  autoComplete="current-password"
  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
/>

<TextField
  margin="normal"
  required
  fullWidth
  name="contactnumber" 
  label="Contact Number"
  type="tel"
  id="contactNumber"
  inputProps={{
    minLength: 10,
    maxLength: 10,
    pattern: "[0-9]{10}",
  }}
  helperText="Please enter a 10-digit contact number."
  onChange={(e) => setFormData({ ...formData, contactnumber: e.target.value })}
/>
{/* <TextField
                margin="normal"
                required
                fullWidth
                name="dob"
                label="Date of Birth"
                type="date"
                id="dob"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleChange}
              /> */}

                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>

              {registrationMessage && (
                <Typography variant="body1" color="success">
                  {registrationMessage}
                </Typography>
              )}

                <Grid container>
                  <Grid item>
                    <Link href="/login" variant="body2">
                      {"Already have an account? Sign In"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}
