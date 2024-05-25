import image from "../images/loginimg.jpg";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme();

export default function SignInSide() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid
          item
          xs={12}
          sx={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <Box
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              padding: "20px",
              borderRadius: "10px",
              maxWidth: "800px",
              textAlign: "center",
            }}
          >
            <Typography variant="h4" gutterBottom>
              Guidelines for Making Appointments
            </Typography>
            <Typography variant="body1" gutterBottom>
              Twenty online reservations can be done for a day while the other forty reservations are done at the hospital premises physically.
              First Numbers will be allocated for the online reservations.
            </Typography>
            <Typography variant="body1" gutterBottom>
              It is a must to have the downloaded channeling chit with you when coming to the clinic. The channeling chit will be sent to the given email after confirmation with the hospital.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
// rgba(255, 255, 255, 0.8)