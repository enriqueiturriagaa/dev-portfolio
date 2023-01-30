
"use client"
import React, { useState, useEffect } from 'react';

const options = {
    timeZone: 'America/Costa_Rica',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
};

const myTime = new Date().getHours();
let status = "";

let colorStyle = {
    color: ""
};

if (myTime <= 9) {
    status = "I'm Surfing 🏄‍♂️ right now... I'll be back online at 9am";
    colorStyle.color = "red";
} else if (myTime > 9 && myTime < 18) {
    status = "in office till 6pm";
    colorStyle.color = "green";
} else {
    status = "I'm Surfing 🏄‍♂️ right now... I'll be back online at 9am";
    colorStyle.color = "red";
}

function Timer() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='relative '>
            <div className='inline-block text-[#F6931A]/50 text-sm'>Current Location: Playa Guiones 🏝️, CR <div className='inline '>
                <div className='inline'>{new Intl.DateTimeFormat('default', options).format(time)}</div>
            </div> ({status}</div>
            {/* Tickers START */}
            {status === "I'm Surfing 🏄‍♂️ right now... I'll be back online at 9am" ?
                <div className='inline-block relative ml-2'>
                    <span className="flex h-3 w-3 ">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500/40 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500/50"></span>
                    </span>
                </div>
                :
                <div className='inline-block relative ml-2'>
                    <span className="flex h-3 w-3 ">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#54B197]/40 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#54B197]/50"></span>
                    </span>
                </div>}
            {/* <div className='inline-block relative ml-2'>
                <span className="flex h-3 w-3 ">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#54B197]/40 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#54B197]/50"></span>
                </span>
            </div> */}
            {/* Ticker ENDS */}
            <p className='inline-block text-[#F6931A]/50 text-sm'>)</p>
        </div>
    )
}

export default Timer


// <div className='relative '>
// <div className='inline-block text-[#F6931A]/50 text-sm'>Current Location: Playa Guiones 🏝️, CR <div className='inline text-red-500'>
//             <div className='inline'>{new Intl.DateTimeFormat('default', options).format(time)}</div>
//         </div> (in office till 6</p>
// <div className='inline-block relative ml-2'>
//     <span className="flex h-3 w-3 ">
//         <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#54B197]/40 opacity-75"></span>
//         <span className="relative inline-flex rounded-full h-3 w-3 bg-[#54B197]/50"></span>
//     </span>
// </div>
// <p className='inline-block text-[#F6931A]/50 text-sm'>)</p>
// </div>