// import React, { useState, useEffect } from 'react';
// import "../styles/login.css"; // Import CSS file for styling

// function Calendar() {
//     // const [allowd,setAllowed] = useState(true);
//       const today = new Date();
//   const [selectedDate, setSelectedDate] = useState(today);
//   const [notes, setNotes] = useState({}); // Object to store notes for each date

//   useEffect(() => {
//     // Load notes from storage (optional)
//     const storedNotes = localStorage.getItem('calendarNotes');
//     if (storedNotes) {
//       setNotes(JSON.parse(storedNotes));
//     }
//   }, []);

//   useEffect(() => {
//     // Save notes to storage (optional)
//     localStorage.setItem('calendarNotes', JSON.stringify(notes));
//   }, [notes]);

//   const handleDateClick = (date) => {
//     setSelectedDate(date);
//   };

//   const handleNoteChange = (event) => {
//     setNotes({ ...notes, [selectedDate.toISOString().slice(0, 10)]: event.target.value });
//   };

//   const getNote = (date) => {
//     return notes[date.toISOString().slice(0, 10)] || '';
//   };

//   const daysInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate();
//   const firstDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay();

//   const calendar = [];
//   let week = [];

//   // Fill the grid with empty cells for days before the first day of the month
//   for (let i = 0; i < firstDayOfMonth; i++) {
//     week.push(null);
//   }

//   // Fill the grid with days of the month
//   for (let day = 1; day <= daysInMonth; day++) {
//     const currentDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day);
//     week.push(currentDate);
//     if (week.length === 7) {
//       calendar.push(week);
//       week = [];
//     }
//   }

//   if (week.length > 0) {
//     // Fill the remaining cells with null for days after the last day of the month
//     for (let i = week.length; i < 7; i++) {
//       week.push(null);
//     }
//     calendar.push(week);
//   }

//   return (
//     <div className="calendar-container">
//       <div className="calendar">
//         <div className="calendar-header">
//           <button onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1))}>
//             Previous Month
//           </button>
//           <h2>{selectedDate.toLocaleDateString('default', { month: 'long', year: 'numeric' })}</h2>
//           <button onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1))}>
//             Next Month
//           </button>
//         </div>
//         <table className="calendar-grid">
//           <thead>
//             <tr>
//               {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
//                 <th key={day}>{day}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {calendar.map((week, index) => (
//               <tr key={index}>
//                 {week.map((date, index) => (
//                   <td key={index} onClick={() => handleDateClick(date)}>
//                     {date && (
//                       <>
//                         <div className={`calendar-date ${date.toISOString().slice(0, 10) === today.toISOString().slice(0, 10) ? 'today' : ''}`}>
//                           {date.getDate()}
//                           <textarea className="calendar-note" value={getNote(date)} onChange={handleNoteChange} />
//                         </div>
//                       </>
//                     )}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Calendar;


import React, { useState, useEffect } from 'react';
import { Grid, Button, Typography, Box } from '@mui/material';
import { addDays, format } from 'date-fns';
import backgroundImage from '../images/loginimg.jpg';

// Generate the next two weeks' available dates (Tuesdays, Thursdays, Saturdays)
const generateAvailableDates = () => {
  const today = new Date();
  let dates = [];
  for (let i = 0; i < 14; i++) {
    const date = addDays(today, i);
    const day = date.getDay();
    if (day === 2 || day === 4 || day === 6) { // Tuesday, Thursday, Saturday
      dates.push(date);
    }
  }
  return dates;
};

const availableDates = generateAvailableDates();

const Calender = () => {
  const [reservations, setReservations] = useState({});
  const maxReservationsPerDay = 30;

  useEffect(() => {
    // Mock initial reservations
    const initialReservations = {};
    availableDates.forEach(date => {
      const dateString = format(date, 'yyyy-MM-dd');
      initialReservations[dateString] = Math.floor(Math.random() * maxReservationsPerDay);
    });
    setReservations(initialReservations);
  }, []); // Empty dependency array to only run on mount

  const handleDateClick = (date) => {
    // Handle date selection logic here
    alert(`You selected ${format(date, 'PP')}`);
  };

  const getDateColor = (date) => {
    const dateString = format(date, 'yyyy-MM-dd');
    return reservations[dateString] >= maxReservationsPerDay ? 'red' : 'green';
  };

  return (
    <Box
      sx={{
        p: 3,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'rgba(230, 230, 250, 0.8)',
          p: 3,
          borderRadius: 2,
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Select an Appointment Date
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {availableDates.map(date => {
            const dateString = format(date, 'yyyy-MM-dd');
            const isFull = reservations[dateString] >= maxReservationsPerDay;
            return (
              <Button
                key={dateString}
                variant="contained"
                onClick={() => handleDateClick(date)}
                sx={{
                  mb: 2,
                  backgroundColor: getDateColor(date),
                  '&:hover': {
                    backgroundColor: getDateColor(date),
                  },
                  color: isFull ? 'white' : 'black',
                  pointerEvents: isFull ? 'none' : 'auto',
                  width: '200px',
                }}
              >
                {format(date, 'PP')}
              </Button>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Calender;
