import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Box, Grid } from '@mui/material';
import { purple } from '@mui/material/colors';
import axios from 'axios';

const Dashboard = () => {
  const [data, setData] = useState({
    patients: 0,
    doctors: 0,
    nurses: 0,
    deathRate: 0,
    admissions: 0,
    discharges: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/dashboard');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchData();
  }, []);

  const statCard = (title, value) => (
    <Card sx={{ backgroundColor: purple[50], color: purple[800], margin: 1 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="h3" component="div">
          {value}
        </Typography>
      </CardContent>
    </Card>
  );

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={3}>
          {statCard('Number of Patients', data.patients)}
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          {statCard('Number of Doctors', data.doctors)}
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          {statCard('Number of Nurses', data.nurses)}
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          {statCard('Death Rate', `${data.deathRate}%`)}
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          {statCard('Admissions', data.admissions)}
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          {statCard('Discharges', data.discharges)}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
