// WardBedAllocationDetails.jsx
import React, { useState } from 'react';
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { styled } from '@mui/material/styles';

// Dummy data for bed details
const initialBeds = Array.from({ length: 36 }, (v, k) => ({
  id: k + 1,
  reserved: Math.random() < 0.5,
  patient: Math.random() < 0.5 ? { name: `Patient ${k + 1}`, details: `Patient details for bed ${k + 1}` } : null
}));

const BedCard = styled(Card)(({ theme, reserved }) => ({
  backgroundColor: reserved ? 'lightgreen' : 'lightcoral',
  color: 'white',
  cursor: 'pointer',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)'
  }
}));

export default function WardBedAllocationDetails() {
  const [beds, setBeds] = useState(initialBeds);
  const [selectedBed, setSelectedBed] = useState(null);

  const handleBedClick = (bed) => {
    setSelectedBed(bed);
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Ward Bed Allocation Details
      </Typography>
      <Grid container spacing={2}>
        {beds.map((bed) => (
          <Grid item xs={12} sm={6} md={2} key={bed.id}>
            <BedCard reserved={bed.reserved} onClick={() => handleBedClick(bed)}>
              <CardContent>
                <Typography variant="h5">
                  Bed {bed.id}
                </Typography>
              </CardContent>
            </BedCard>
          </Grid>
        ))}
      </Grid>
      {selectedBed && (
        <Box mt={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">
                Patient Details
              </Typography>
              {selectedBed.patient ? (
                <div>
                  <Typography variant="body1">
                    Name: {selectedBed.patient.name}
                  </Typography>
                  <Typography variant="body1">
                    Details: {selectedBed.patient.details}
                  </Typography>
                </div>
              ) : (
                <Typography variant="body1">
                  No patient in this bed.
                </Typography>
              )}
            </CardContent>
          </Card>
        </Box>
      )}
    </Box>
  );
}
