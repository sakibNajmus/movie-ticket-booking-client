import React, { useState } from 'react';
import DateCalendar from './DateCalendar';
import Timing from './Timing';

const Schedule = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    console.log(selectedDate)
    const handleDateChange = date => {
        setSelectedDate(date);
    }
    return (
        <section className="schedule">
            <div className="container my-5">
                <div className="row">
                    <div className="col-md 8">
                        <Timing date={selectedDate}></Timing>
                    </div>
                    <div className="col-md-4">
                        <DateCalendar handleDateChange={handleDateChange}></DateCalendar>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Schedule;