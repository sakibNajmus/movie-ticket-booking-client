import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const DateCalendar = ({handleDateChange}) => { 
    return (
        <Calendar
            onChange={handleDateChange}
            value={new Date()}
        />
    );
};

export default DateCalendar;