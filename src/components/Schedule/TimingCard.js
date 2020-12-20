import React, { useState } from 'react';
import ScheduleForm from './ScheduleForm';

const TimingCard = ({date, timing}) => {
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal(){
        setIsOpen(false);
    }
    return (
        <div className="col-md-4 mb-5">
            <div className="card p-3">
                <div className="card-body text-center">
                    <h5 className="card-title text-brand">{timing.subject}</h5>
                    <h6>{timing.showTime}</h6>
                    <p>{timing.totalSeats} SEATS AVAILABLE</p>
                    <button onClick={openModal} className="btn btn-primary text-uppercase">Book Ticket</button>
                    <ScheduleForm modalIsOpen={modalIsOpen} date={date} scheduleOn={timing.subject} closeModal={closeModal} date={date}></ScheduleForm>
                </div>
            </div>
        </div>
    );
};

export default TimingCard;