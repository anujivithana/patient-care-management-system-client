
import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Calender from './Calender'; // Ensure this path is correct
import AppointmentGuidelines from './AppointmentGuidelines';
import RequestAppointment from './RequestAppointment';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Appointment Guidelines" value="1" />
            <Tab label="Appointment Dates" value="2" />
            <Tab label="Request Appointment" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1"><AppointmentGuidelines/></TabPanel>
        <TabPanel value="2">
          <Calender/>
        </TabPanel>
        <TabPanel value="3"><RequestAppointment/></TabPanel>
      </TabContext>
    </Box>
  );
}
