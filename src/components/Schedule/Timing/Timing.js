import React from 'react';
import TimingCard from '../TimingCard/TimingCard';

const timingData = [
    {
        _id: '5e8df50be6e8231764dc23de',
        id: 1,
        subject: 'PHeror Ontore',
        showTime: '8:00 AM - 10:00 AM',
        totalSeats: 40
    },
    {
        _id: '5e8df578e6e8231764dc23df',
        id: 2,
        subject: 'Programmer er Jala',
        showTime: '12:00 PM - 2:00 PM',
        totalSeats: 40
    },
    {
        _id: '5e8df5aee6e8231764dc23e0',
        id: 3,
        subject: 'Assignment er Pera',
        showTime: '3:00 PM - 5:00 PM',
        totalSeats: 40
    },
    {
        _id: '5e8df63be6e8231764dc23e1',
        id: 4,
        subject: 'Mess e Bua Nai',
        showTime: '6:00 PM - 8:00 PM',
        totalSeats: 40
    },
    {
        _id: '5e8df68de6e8231764dc23e2',
        id: 5,
        subject: 'Backend Parina',
        showTime: '8:00 PM - 10:00 PM',
        totalSeats: 40
    },
    {
        _id: '5e8df6a0e6e8231764dc23e3',
        id: 6,
        subject: 'Charodike Bashbagan',
        showTime: '10:00 PM - 12:00 AM',
        totalSeats: 40
    }
]

const Timing = ({date}) => {
    return (
        <section>
            <h2 className="text-center mb-5" style={{color: '#1cc7c1'}}>Premiering on {date.toDateString()}</h2>

            <div className="row">
                {
                    timingData.map(timing => <TimingCard timing={timing} date={date} key={timing.id}></TimingCard>)
                }
            </div>
        </section>
    );
};

export default Timing;