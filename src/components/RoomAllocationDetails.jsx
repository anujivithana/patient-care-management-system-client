
import React, { useState } from 'react';
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { styled } from '@mui/material/styles';

// Dummy data for room details
const initialRooms = [
  { id: 1, reserved: true, patient: { name: "John Doe", details: "Patient details for room 1" } },
  { id: 2, reserved: false, patient: null },
  { id: 3, reserved: true, patient: { name: "Jane Smith", details: "Patient details for room 3" } },
  { id: 4, reserved: false, patient: null },
  { id: 5, reserved: true, patient: { name: "Sam Wilson", details: "Patient details for room 5" } },
  { id: 6, reserved: false, patient: null },
  { id: 7, reserved: true, patient: { name: "Anna Johnson", details: "Patient details for room 7" } },
  { id: 8, reserved: false, patient: null },
  { id: 9, reserved: true, patient: { name: "Mike Brown", details: "Patient details for room 9" } },
  { id: 10, reserved: false, patient: null }
];

const RoomCard = styled(Card)(({ theme, reserved }) => ({
    backgroundColor: reserved ? 'lightgreen' : 'lightcoral',
    color: 'white',
    cursor: 'pointer',
    transition: 'transform 0.3s',
    '&:hover': {
      transform: 'scale(1.05)'
    }
}));

export default function RoomAllocationDetails() {
  const [rooms, setRooms] = useState(initialRooms);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleRoomClick = (room) => {
    setSelectedRoom(room);
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Room Allocation Details
      </Typography>
      <Grid container spacing={2}>
        {rooms.map((room) => (
          <Grid item xs={12} sm={6} md={2.4} key={room.id}>
            <RoomCard reserved={room.reserved} onClick={() => handleRoomClick(room)}>
              <CardContent>
                <Typography variant="h5">
                  Room {room.id}
                </Typography>
              </CardContent>
            </RoomCard>
          </Grid>
        ))}
      </Grid>
      {selectedRoom && (
        <Box mt={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">
                Patient Details
              </Typography>
              {selectedRoom.patient ? (
                <div>
                  <Typography variant="body1">
                    Name: {selectedRoom.patient.name}
                  </Typography>
                  <Typography variant="body1">
                    Details: {selectedRoom.patient.details}
                  </Typography>
                </div>
              ) : (
                <Typography variant="body1">
                  No patient in this room.
                </Typography>
              )}
            </CardContent>
          </Card>
        </Box>
      )}
    </Box>
  );
}
