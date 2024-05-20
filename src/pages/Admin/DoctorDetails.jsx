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
// import DoctorForm from '../../components/DoctorForm';
// import Dialog from '@mui/material/Dialog';
// import DialogContent from '@mui/material/DialogContent';

// export default function DoctorDetails() {
//   const [rows, setRows] = useState([]);
//   const [openForm, setOpenForm] = useState(false);
//   const [editingDoctor, setEditingDoctor] = useState(null);

//   useEffect(() => {
//     fetchDoctors();
//   }, []);

//   const fetchDoctors = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/doctors');
//       setRows(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//    const handleEdit = (doctor) => { // Defined handleEdit
//     setEditingDoctor(doctor);
//      setOpenForm(true);
//    };

//    const handleRemove = async (doctor) => { // Defined handleRemove
//      try {
//        await axios.delete(`/api/doctors/${doctor.DoctorID}`);
//        fetchDoctors();
//      } catch (error) {
//        console.error('Error removing doctor:', error);
//      }
//    };

//   const handleOpenForm = () => {
//     setEditingDoctor(null);
//     setOpenForm(true);
//   };

//   const handleCloseForm = () => {
//     setOpenForm(false);
//     setEditingDoctor(null);
//     fetchDoctors();
//   };

// const columns = [
//   { field: 'DoctorID', headerName: 'Doctor ID', width: 100 },
//   { field: 'Name', headerName: 'Name', width: 150 },
//   { field: 'Email', headerName: 'Email', width: 200 },
//   { field: 'Specialization', headerName: 'Specialization', width: 180 },
//   {
//     field: 'ViewProfile',
//     headerName: 'View Profile',
//     width: 150,
//     renderCell: (params) => (
//       <Link to={`/doctor/${params.row.DoctorID}/profile`}>Click here</Link>
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


//   return (
//     <div>
//       <TopNavbar />
//       <Box height={30} />
//       <Box sx={{ display: "flex" }}>
//         <AdminLeftNavbar />
//         <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//           <Box display="flex" justifyContent="space-between" alignItems="center">
//             <h1>Doctor Details</h1>
//             <Button
//               variant="contained"
//               color="success"
//               startIcon={<AddIcon />}
//               onClick={handleOpenForm}
//             >
//               Add Doctor
//             </Button>
//           </Box>
//           <div style={{ height: 400, width: '100%' }}>
//             <DataGrid
//               rows={rows}
//               columns={columns}
//               pageSize={5}
//               checkboxSelection
//               getRowId={(row) => row.DoctorID}
//             />
//           </div>
//         </Box>
//       </Box>

//       {/* Dialog to display the DoctorForm */}
//       <Dialog open={openForm} onClose={handleCloseForm} maxWidth="md" fullWidth>
//         <DialogContent>
//           <DoctorForm onClose={handleCloseForm} doctor={editingDoctor} />
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
import DoctorForm from '../../components/DoctorForm';
import EditDoctorForm from '../../components/EditDoctorForm';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

export default function DoctorDetails() {
  const [rows, setRows] = useState([]);
  const [openAddForm, setOpenAddForm] = useState(false);
  const [openEditForm, setOpenEditForm] = useState(false);
  const [editingDoctor, setEditingDoctor] = useState(null);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/doctors');
      setRows(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchDoctorDetails = async (DoctorID) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/doctors/get/${DoctorID}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching doctor details:', error);
      return null;
    }
  };

  const handleEdit = async (DoctorID) => {
    const doctorDetails = await fetchDoctorDetails(DoctorID);
    const data = doctorDetails[0];
    //console.log(DoctorID);
    //console.log(data);
    if (data) {
      setEditingDoctor(data);
      setOpenEditForm(true);
    }
  };

  const handleRemove = async (DoctorID) => {
    const confirmDeletion = window.confirm("Are you sure you want to delete this doctor?");
    if (confirmDeletion) {
      try {
        await axios.delete(`http://localhost:5000/api/doctors/delete/${DoctorID}`);
        fetchDoctors();
      } catch (error) {
        console.error('Error removing doctor:', error);
      }
    }
  };
  const handleOpenAddForm = () => {
    setOpenAddForm(true);
  };

  const handleCloseAddForm = () => {
    setOpenAddForm(false);
    fetchDoctors();
  };

  const handleCloseEditForm = () => {
    setOpenEditForm(false);
    setEditingDoctor(null);
    fetchDoctors();
  };

  const columns = [
    { field: 'DoctorID', headerName: 'Doctor ID', width: 100 },
    { field: 'FullName', headerName: 'FullName', width: 150 },
    { field: 'Email', headerName: 'Email', width: 200 },
    { field: 'Specialization', headerName: 'Specialization', width: 180 },
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
          onClick={() => handleEdit(params.row.DoctorID)}
        />,
        <GridActionsCellItem
          icon={<DeleteIcon color="error" />}
          label="Remove"
          onClick={() => handleRemove(params.row.DoctorID)}
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
            <h1>Doctor Details</h1>
            <Button
              variant="contained"
              color="success"
              startIcon={<AddIcon />}
              onClick={handleOpenAddForm}
            >
              Add Doctor
            </Button>
          </Box>
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              checkboxSelection
              getRowId={(row) => row.DoctorID}
            />
          </div>
        </Box>
      </Box>

      {/* Dialog to display the DoctorForm for adding a doctor */}
      <Dialog open={openAddForm} onClose={handleCloseAddForm} maxWidth="md" fullWidth>
        <DialogContent>
          <DoctorForm onClose={handleCloseAddForm} />
        </DialogContent>
      </Dialog>

      {/* Dialog to display the EditDoctorForm for editing a doctor */}
      <Dialog open={openEditForm} onClose={handleCloseEditForm} maxWidth="md" fullWidth>
        <DialogContent>
          <EditDoctorForm onClose={handleCloseEditForm} doctor={editingDoctor} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

