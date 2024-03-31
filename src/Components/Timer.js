import React, { useState, useEffect, useRef } from 'react';

function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const timerRef = useRef(null);

    useEffect(() => {
        timerRef.current = setInterval(() => {
            setSeconds(prevSeconds => {
                if (prevSeconds === 59) {
                    setMinutes(prevMinutes => prevMinutes + 1);
                    return 0;
                } else {
                    return prevSeconds + 1;
                }
            });
        }, 1000);

        return () => clearInterval(timerRef.current);
    }, []);

    const restart = () => {
        clearInterval(timerRef.current);
        setMinutes(0);
        setSeconds(0);
        timerRef.current = setInterval(() => {
            setSeconds(prevSeconds => {
                if (prevSeconds === 59) {
                    setMinutes(prevMinutes => prevMinutes + 1);
                    return 0;
                } else {
                    return prevSeconds + 1;
                }
            });
        }, 1000);
    }

    const stop = () => {
        clearInterval(timerRef.current);
    }

    return (
        <div className='timer'>
            <div className='container'>
                <div className="timer_container">
                    <h1>Timer</h1>
                    <h1>{minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}</h1>
                    <button className="restart" onClick={restart}>Restart</button>
                    <button className="stop" onClick={stop}>Stop</button>
                </div>
            </div>
        </div>
    );
}

export default Timer;