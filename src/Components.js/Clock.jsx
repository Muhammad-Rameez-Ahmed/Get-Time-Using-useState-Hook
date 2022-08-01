import React, { useState } from 'react'

const Clock = () => {
    let nowtime = new Date().toLocaleTimeString();

    const [time, setTime] = useState(nowtime);


    const currentTime = () => {
        let time = new Date().toLocaleTimeString();

        setTime(time);
    }


  

    return (

        <>
        
            <h1 className='text'>{time}</h1>
            <button className='button' onClick={currentTime}>Get Time</button>
            <h1></h1>
        </>
    )
}

export default Clock;