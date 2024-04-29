import React, { useState, useEffect } from 'react';
import "../styles/login.css"; // Import CSS file for styling

function Calendar() {
    // const [allowd,setAllowed] = useState(true);
      const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);
  const [notes, setNotes] = useState({}); // Object to store notes for each date

  useEffect(() => {
    // Load notes from storage (optional)
    const storedNotes = localStorage.getItem('calendarNotes');
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  useEffect(() => {
    // Save notes to storage (optional)
    localStorage.setItem('calendarNotes', JSON.stringify(notes));
  }, [notes]);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleNoteChange = (event) => {
    setNotes({ ...notes, [selectedDate.toISOString().slice(0, 10)]: event.target.value });
  };

  const getNote = (date) => {
    return notes[date.toISOString().slice(0, 10)] || '';
  };

  const daysInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay();

  const calendar = [];
  let week = [];

  // Fill the grid with empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    week.push(null);
  }

  // Fill the grid with days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const currentDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day);
    week.push(currentDate);
    if (week.length === 7) {
      calendar.push(week);
      week = [];
    }
  }

  if (week.length > 0) {
    // Fill the remaining cells with null for days after the last day of the month
    for (let i = week.length; i < 7; i++) {
      week.push(null);
    }
    calendar.push(week);
  }

  return (
    <div className="calendar-container">
      <div className="calendar">
        <div className="calendar-header">
          <button onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1))}>
            Previous Month
          </button>
          <h2>{selectedDate.toLocaleDateString('default', { month: 'long', year: 'numeric' })}</h2>
          <button onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1))}>
            Next Month
          </button>
        </div>
        <table className="calendar-grid">
          <thead>
            <tr>
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {calendar.map((week, index) => (
              <tr key={index}>
                {week.map((date, index) => (
                  <td key={index} onClick={() => handleDateClick(date)}>
                    {date && (
                      <>
                        <div className={`calendar-date ${date.toISOString().slice(0, 10) === today.toISOString().slice(0, 10) ? 'today' : ''}`}>
                          {date.getDate()}
                          <textarea className="calendar-note" value={getNote(date)} onChange={handleNoteChange} />
                        </div>
                      </>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Calendar;
