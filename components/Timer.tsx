import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Timer() {
    const [time, setTime] = useState(new Date());
    const [cityTime, setCityTime] = useState(null);
    useEffect(() => {
        axios.get(`https://api.timezonedb.com/v2.1/get-time-zone?key=YOUR_API_KEY&format=json&by=position&lat=9.7408&lng=-85.6034`)
            .then(response => {
                setCityTime(new Date(response.data.timestamp * 1000));
            })
            .catch(error => {
                console.error(error);
            });

        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);


    return (
        <div>Timer</div>
    )
}

export default Timer