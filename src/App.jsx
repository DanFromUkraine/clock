
import { useState } from 'react'
import './App.css'
import Clock from "./components/clock"

function App() {

  const [currentTime, setCurrentTime] = useState("Day_of_week Month Day Year HH:MM:SS GMT+0300 (за східноєвропейським літнім часом)");
  let current_time = "00:00:00"

  setInterval(() => {
  setCurrentTime((new Date()).toString());
  }, 1000)

  
  
  return (
    <>
     <Clock current_time={currentTime}/>
    </>
  )
}

export default App
