// import React from 'react';
// import { NavLink  } from "react-router-dom";
// import Contact from "../components/Contact";
// import Footer from "../components/Footer";
// import Calendar from '../components/Calender';


// export default function RegisterGuidelines() {
//   return (
//     <div>
//       <h2 className="guidelines">Guidelines for Making Appointments</h2>
//       <h4>Twenty online reservations can be done for a day while the other forty reservations are done at the hospital premises physically.
//       First Numbers will be allocated for the online reservations.<br></br>
//        It is a must to have the downloaded channeling chit with you when coming to the clinic.The channeling chit will be sent to the given email after confirmation with the hospital.</h4>
//       <div className="mt-4 pt-2">
//       <NavLink className="btn" to={"/login"}>Proceed</NavLink>
//      </div>
//      <Calendar/>
//      <div className="contact-div" style={{display:'flex',justifyContent:'center'}}>
//         <Contact />
//       </div>

//       <Footer />
//     </div>
//   )
// }
import image from "../images/loginimg.jpg";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

 import MenuItem from '@mui/material/MenuItem';



// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };


  // const options = ['Option 1', 'Option 2'];
  // const [value, setValue] = React.useState(options[0]);
  // const [inputValue, setInputValue] = React.useState('');




  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
  item
  container
  justifyContent="center" // Center the content horizontally
  alignItems="center" // Center the content vertically
  xs={false}
  sm={4}
  md={7}
  sx={{
    position: "relative", // Ensure proper positioning
    backgroundImage: `linear-gradient(rgba(255, 60, 0, 0), rgba(255, 0, 0, 0.25)), url(${image})`, // Set the image URL as background with increased transparency
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "20px", // Add padding to provide space for content
  }}
>
<div style={{ position: "absolute", textAlign: "center" }}>
  {/* Use absolute positioning for centering */}
  <h2 className="guidelines">Guidelines for Making Appointments</h2>
  <h4>
    Twenty online reservations can be done for a day while the other forty reservations are done at the hospital premises physically.
    First Numbers will be allocated for the online reservations.<br></br>
    It is a must to have the downloaded channeling chit with you when coming to the clinic. The channeling chit will be sent to the given email after confirmation with the hospital.
  </h4>
  <div>
    {/* Moved the Button component inside the same div */}
    <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2, width: '200px' }}
      onClick={() => { window.location.href = "/calender"; }}
    >
      View Calendar
    </Button>
  </div>
</div>

</Grid>


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
              {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar> */}
              <Typography component="h1" variant="h5">
                Place the Appointment
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                {/* <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                /> */}

 {/* export default function BasicDatePicker() { */}
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Select the Date" />
      </DemoContainer>
    </LocalizationProvider>

    <TextField
  select
  margin="normal"
  required
  fullWidth
  name="clinic"
  label="Select the Clinic"
  id="clinic"
  //autoComplete="name"
>
  <MenuItem value="breastClinic">Breast Clinic</MenuItem>
  <MenuItem value="palliativeCareClinic">Palliative Care Clinic</MenuItem>
</TextField>

<TextField
  select
  margin="normal"
  required
  fullWidth
  name="doctor"
  label="Select the Doctor"
  id="doctor"
  //autoComplete="name"
>
  <MenuItem value="Doctor1">Doctor 1</MenuItem>
  <MenuItem value="Doctor2">Doctor 2</MenuItem>
</TextField>
{/* <div>
      <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
      <div>{`inputValue: '${inputValue}'`}</div>
      <br />
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Controllable" />}
      />
    </div> */}

        
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Proceed
                </Button>
                {/* <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid> */}
                {/* <Copyright sx={{ mt: 5 }} /> */}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}

