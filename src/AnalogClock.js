import React, { useCallback, useEffect, useState } from 'react';

const AnalogClock = () => {

    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [seconds, setSeconds] = useState('');
    const [timeColor, setTimeColor] = useState('time--red');

    const updateTime = useCallback(() => {
        let today = new Date();
        setHours(today.getHours());
        setMinutes(today.getMinutes());
        setSeconds(today.getSeconds());
    }, []);

    useEffect(() => {
        let clockInterval = setInterval(() => {
            updateTime();
        }, 1000);
        return () => clearInterval(clockInterval);
    });

    const hoursStyle = { transform: `rotateZ(${hours * 30 + minutes / 12}deg)` }
    const minutesStyle = { transform: `rotateZ(${minutes * 6}deg)` }
    const secondsStyle = { transform: `rotateZ(${seconds * 6}deg)` }

    return (
        <>
            <span className="time__red" onClick={() => setTimeColor('time--red')}>Red</span>
            <span className="time__black" onClick={() => setTimeColor('time--black')}>Black</span>
            <span className="time__green" onClick={() => setTimeColor('time--green')}>Green</span>
            <span className="time__orange" onClick={() => setTimeColor('time--orange')}>Orange</span>
            
            <div className={`time ${timeColor}`}>
                <div className="time__hour" style={hoursStyle}>
                    <div className="time__hour-hr">

                    </div>
                </div>
                <div className="time__minutes" style={minutesStyle}>
                    <div className="time__minutes-min">

                    </div>
                </div>
                <div className="time__seconds" style={secondsStyle}>
                    <div className="time__seconds-sec">

                    </div>
                </div>
            </div>
        </>
    );
};

export default AnalogClock;