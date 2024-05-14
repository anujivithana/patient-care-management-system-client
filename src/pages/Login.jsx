import "../styles/login.css";
import image from "../images/loginimg.jpg";
import React, {useState} from 'react';
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
import axios from "axios";
import { useNavigate } from "react-router-dom";


const defaultTheme = createTheme();

export default function SignInSide() {

  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  
  const navigate= useNavigate()


  axios.defaults.withCredentials=true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/login', values)
    .then (res => {
      if (res.data.Status==="Successful Login"){
         navigate ('/patient/profile')
      }else{
         alert(res.data.Message)
      }
    })
    .catch(err => console.log(err));
    // const data = new FormData(e.currentTarget);
    // const loginData = {
    //   email: data.get("email"),
    //   password: data.get("password"),
    // };
    // axios.post("/patient-login", loginData)
    //   .then((response) => {
    //     console.log(response.data);
    //     // Redirect to the patient profile
    //     window.location.href = "/patient/profile";
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     // Handle login error, e.g. display error message
    //   });
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
                Sign in
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
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={e => setValues({...values, email: e.target.value})}
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
                  onChange={e => setValues({...values, password: e.target.value})}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>

                {/* <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={() => { window.location.href = "/patient/profile"; }}
                >
                 Patient
                </Button> */}


                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/register" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
                {/* <Copyright sx={{ mt: 5 }} /> */}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}
