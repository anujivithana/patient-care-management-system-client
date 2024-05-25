import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import RoomAllocationDetails from './RoomAllocationDetails';
import WardBedAllocationDetails from './WardBedAllocationDetails';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 4, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Room Allocation Details" value="1" />
            <Tab label="Ward Bed Allocation Details" value="2" />
            {/* <Tab label="Item Three" value="3" /> */}
          </TabList>
        </Box>
        <TabPanel value="1">
          <RoomAllocationDetails />
        </TabPanel>
        <TabPanel value="2">
          <WardBedAllocationDetails />
        </TabPanel>
        {/* <TabPanel value="3">Item Three</TabPanel> */}
      </TabContext>
    </Box>
  );
}