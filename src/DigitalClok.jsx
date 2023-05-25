import React, { useState } from 'react'
import './Digital.css'

function DigitalClok() {
    const currentDate = new Date;
    const [seconds, secondRation] = useState(0);
    const [minutes, minuteRation] = useState(0);
    const [hours, hourRation] = useState(0);


    const ClokFuction = () => {
        secondRation(currentDate.getSeconds() )
        minuteRation(currentDate.getMinutes())
        hourRation(currentDate.getHours()  )
        // % 12 || 12
    }
    setTimeout(() => {
        ClokFuction()
      }, 1000);
    return (
        <div id="clock">

            <p className="text">DIGITAL CLOCK</p>
            <p className="time">
              {hours} {minutes} {seconds}
            </p>
        </div>

    )
}

export default DigitalClok