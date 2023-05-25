import React, { useEffect, useState } from 'react'
import Clock from './Clock'
import DigitalClok from './DigitalClok';

function App() {
  const currentDate = new Date;

  const [seconds, secondRation] = useState(0);
  const [minutes, minuteRation] = useState(0);
  const [hours, hourRation] = useState(0);

  //  console.log(seconds,minutes,hours)
  const ClokFuction = () => {
    secondRation(currentDate.getSeconds() / 60)
    minuteRation(currentDate.getMinutes() / 60)
    hourRation(currentDate.getHours() / 12 )
  }

  setTimeout(() => {
    ClokFuction()
  }, 1000);

  return (
    <>
      <Clock seconds={seconds} minutes={minutes} hours={hours} />
      <DigitalClok />
    </>
  )
}

export default App
