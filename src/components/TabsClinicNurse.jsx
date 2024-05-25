import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const appointments = [
  { id: 1, name: 'John Doe', mode: 'Online', status: 'Pending' },
  { id: 2, name: 'Jane Smith', mode: 'In-person', status: 'Confirmed' },
  // Add more appointment objects here
];

export default function LabTabs() {
  const [value, setValue] = React.useState('1');
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === '3') {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreateAccount = () => {
    navigate('/register');
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 3, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Clinic List PCC" value="1" />
            <Tab label="Clinic List BC" value="2" />
            <Tab label="Add Appointments" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>AppointmentID</TableCell>
                  <TableCell>Patient Name</TableCell>
                  <TableCell>View Profile</TableCell>
                  <TableCell>Appointment Mode</TableCell>
                  <TableCell>Proceeding Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {appointments.map((appointment) => (
                  <TableRow key={appointment.id}>
                    <TableCell>{appointment.id}</TableCell>
                    <TableCell>{appointment.name}</TableCell>
                    <TableCell>
                      <Button variant="outlined">View Profile</Button>
                    </TableCell>
                    <TableCell>{appointment.mode}</TableCell>
                    <TableCell>{appointment.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>
        <TabPanel value="2">
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>AppointmentID</TableCell>
                  <TableCell>Patient Name</TableCell>
                  <TableCell>View Profile</TableCell>
                  <TableCell>Appointment Mode</TableCell>
                  <TableCell>Proceeding Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {appointments.map((appointment) => (
                  <TableRow key={appointment.id}>
                    <TableCell>{appointment.id}</TableCell>
                    <TableCell>{appointment.name}</TableCell>
                    <TableCell>
                      <Button variant="outlined">View Profile</Button>
                    </TableCell>
                    <TableCell>{appointment.mode}</TableCell>
                    <TableCell>{appointment.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Already have a profile?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Please select an option below.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Yes
            </Button>
            <Button onClick={handleCreateAccount} color="primary" autoFocus>
              Create Patient Account
            </Button>
          </DialogActions>
        </Dialog>
      </TabContext>
    </Box>
  );
}
