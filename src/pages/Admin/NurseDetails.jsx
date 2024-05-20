// import React, { useEffect, useState } from 'react';
// import AdminLeftNavbar from '../../components/LeftNavBarAdmin';
// import TopNavbar from '../../components/TopNavbar';
// import Box from "@mui/material/Box";
// import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
// import axios from 'axios';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { Link } from 'react-router-dom';
// import Button from '@mui/material/Button';
// import AddIcon from '@mui/icons-material/Add';
// import NurseForm from '../../components/NurseForm'; 
// import Dialog from '@mui/material/Dialog';
// import DialogContent from '@mui/material/DialogContent';

// // const handleEdit = async (NurseID) => {
// //   const nurseDetails = await nurseDetails(NurseID);
// //   const data = nurseDetails[0];
// //   //console.log(DoctorID);
// //   //console.log(data);
// //   if (data) {
// //     setEditingDoctor(data);
// //     setOpenEditForm(true);
// //   }
// // };

// //    const handleRemove = (row) => {
// //    // Implement remove functionality
// //      console.log('Remove:', row);
// //    };


// const columns = [
//   { field: 'NurseID', headerName: 'Nurse ID', width: 100 },
//   { field: 'FullName', headerName: 'FullName', width: 150 },
//   { field: 'Email', headerName: 'Email', width: 200 },
//   { field: 'Grade', headerName: 'Grade', width: 180 },
//   {
//     field: 'ViewProfile',
//     headerName: 'View Profile',
//     width: 150,
//     renderCell: (params) => (
//       <Link to={`/nurse/${params.row.NurseID}/profile`}>Click here</Link>
//     ),
//   },
//   {
//     field: 'Actions',
//     headerName: 'Actions',
//     type: 'actions',
//     width: 150,
//     getActions: (params) => [
//       <GridActionsCellItem
//         icon={<EditIcon color="primary" />}
//         label="Edit"
//         onClick={() => handleEdit(params.row)}
//       />,
//       <GridActionsCellItem
//         icon={<DeleteIcon color="error" />}
//         label="Remove"
//         onClick={() => handleRemove(params.row)}
//       />,
//     ],
//   },
// ];

// export default function NurseDetails() {
//   const [rows, setRows] = useState([]);
//   const [openForm, setOpenForm] = useState(false); 

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/nurses')
//       .then(response => {
//         setRows(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

  
//   const handleOpenForm = () => {
//     setOpenForm(true);
//   };

//   const handleCloseForm = () => {
//     setOpenForm(false);
//   };

//   return (
//     <div>
//       <TopNavbar />
//       <Box height={30} />
//       <Box sx={{ display: "flex" }}>
//         <AdminLeftNavbar />
//         <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//           <Box display="flex" justifyContent="space-between" alignItems="center">
//             <h1>Nurse Details</h1>
//             <Button
//               variant="contained"
//               color="success"
//               startIcon={<AddIcon />}
//               onClick={handleOpenForm}
//             >
//               Add Nurse
//             </Button>
//           </Box>
//           <div style={{ height: 400, width: '100%' }}>
//             <DataGrid
//               rows={rows}
//               columns={columns}
//               pageSize={5}
//               checkboxSelection
//               getRowId={(row) => row.NurseID}
//             />
//           </div>
//         </Box>
//       </Box>

//       {/* Dialog to display the NurseForm */}
//       <Dialog open={openForm} onClose={handleCloseForm} maxWidth="md" fullWidth>
//         <DialogContent>
//           <NurseForm onClose={handleCloseForm} />
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }


import React, { useEffect, useState } from 'react';
import AdminLeftNavbar from '../../components/LeftNavBarAdmin';
import TopNavbar from '../../components/TopNavbar';
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import NurseForm from '../../components/NurseForm';
//import EditDoctorForm from '../../components/EditDoctorForm';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

export default function NurseDetails() {
  const [rows, setRows] = useState([]);
  const [openAddForm, setOpenAddForm] = useState(false);
  const [openEditForm, setOpenEditForm] = useState(false);
  const [editingDoctor, setEditingNurse] = useState(null);

  useEffect(() => {
    fetchNurses();
  }, []);

  const fetchNurses = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/nurses');
      setRows(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchNurseDetails = async (NurseID) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/nurses/get/${NurseID}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching nurse details:', error);
      return null;
    }
  };

  const handleEdit = async (NurseID) => {
    const nurseDetails = await fetchNurseDetails(NurseID);
    const data = nurseDetails[0];
    //console.log(NurseID);
    //console.log(data);
    if (data) {
      setEditingNurse(data);
      setOpenEditForm(true);
    }
  };

  const handleRemove = async (NurseID) => {
    const confirmDeletion = window.confirm("Are you sure you want to delete this nurse?");
    if (confirmDeletion) {
      try {
        await axios.delete(`http://localhost:5000/api/nurses/delete/${NurseID}`);
        fetchNurses();
      } catch (error) {
        console.error('Error removing nurse:', error);
      }
    }
  };
  const handleOpenAddForm = () => {
    setOpenAddForm(true);
  };

  const handleCloseAddForm = () => {
    setOpenAddForm(false);
    fetchNurses();
  };

  const handleCloseEditForm = () => {
    setOpenEditForm(false);
    setEditingNurse(null);
    fetchNurses();
  };

  const columns = [
    { field: 'NurseID', headerName: 'Nurse ID', width: 100 },
    { field: 'FullName', headerName: 'FullName', width: 150 },
    { field: 'Email', headerName: 'Email', width: 200 },
    { field: 'Grade', headerName: 'Grade', width: 180 },
    {
      field: 'ViewProfile',
      headerName: 'View Profile',
      width: 150,
      renderCell: (params) => (
        <Link to={`/doctor/${params.row.DoctorID}/profile`}>Click here</Link>
      ),
    },
    {
      field: 'Actions',
      headerName: 'Actions',
      type: 'actions',
      width: 150,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<EditIcon color="primary" />}
          label="Edit"
          onClick={() => handleEdit(params.row.NurseID)}
        />,
        <GridActionsCellItem
          icon={<DeleteIcon color="error" />}
          label="Remove"
          onClick={() => handleRemove(params.row.NurseID)}
        />,
      ],
    },
  ];

  return (
    <div>
      <TopNavbar />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <AdminLeftNavbar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <h1>Nurse Details</h1>
            <Button
              variant="contained"
              color="success"
              startIcon={<AddIcon />}
              onClick={handleOpenAddForm}
            >
              Add Nurse
            </Button>
          </Box>
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              checkboxSelection
              getRowId={(row) => row.NurseID}
            />
          </div>
        </Box>
      </Box>

      {/* Dialog to display the NurseForm for adding a nurse */}
      <Dialog open={openAddForm} onClose={handleCloseAddForm} maxWidth="md" fullWidth>
        <DialogContent>
          <NurseForm onClose={handleCloseAddForm} />
        </DialogContent>
      </Dialog>

      {/* Dialog to display the EditNurseForm for editing a nurse */}
      {/* <Dialog open={openEditForm} onClose={handleCloseEditForm} maxWidth="md" fullWidth>
        <DialogContent>
          <EditNurseForm onClose={handleCloseEditForm} nurse={editingNurse} />
        </DialogContent>
      </Dialog> */}
    </div>
  );
}

