import React from 'react';
import { Card, CardContent, CardHeader, Avatar, Typography, Box } from '@mui/material';
import { purple } from '@mui/material/colors';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const DoctorCard = ({ doctor }) => {
  return (
    <Card sx={{ backgroundColor: purple[50], color: purple[800], maxWidth: 300, margin: 'auto' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: purple[500] }}>
            <AccountCircleIcon />
          </Avatar>
        }
        title={doctor.FullName}
        subheader={doctor.Specialization}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {doctor.Description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DoctorCard;
