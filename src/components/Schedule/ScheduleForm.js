import React from 'react';
import Modal from 'react-modal';
import './ScheduleForm.css'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

const ScheduleForm = ({modalIsOpen, closeModal, scheduleOn, date}) => {

    const onSubmit = data => {
        data.service = scheduleOn;
        data.date = date;
        data.created = new Date();
        
        fetch('https://young-oasis-31596.herokuapp.com/addAppointment', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                closeModal();
                alert('Appointment Created Successfully')
            }
        })
    };
    
    return (
        <div>
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            >

            <h2 style={{color: '#1cc7c1'}} className="text-center" >{scheduleOn}</h2>
            <p className="text-center text-secondary"><small>On {date.toDateString()}</small></p>
            <div id="seat"></div>
            </Modal>
        </div>
    );
};

export default ScheduleForm;