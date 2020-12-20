import React from 'react';
import Modal from 'react-modal';
import './ScheduleForm.css'
import SeatSelector from '../SeatSelector/SeatSelector'

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

const ScheduleForm = ({modalIsOpen, timing, closeModal, scheduleOn, date}) => {
    
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
            <div className="seat-arrangement">
                <SeatSelector></SeatSelector>
            </div>
            </Modal>
        </div>
    );
};

export default ScheduleForm;