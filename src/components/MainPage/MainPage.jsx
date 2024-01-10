import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import LeftBar from '../LeftBar/LeftBar'
import RightBar from '../RightBar/RightBar'
import CalenderGrid from '../CalenderGrid/CalenderGrid'
import './mainpage.css'
import {
  format,
  startOfWeek,
  addDays,
  startOfMonth,
  endOfMonth,
  endOfWeek,
  isSameMonth,
  isSameDay
} from "date-fns";

const MainPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [activeDate, setActiveDate] = useState(new Date())
  console.log(new Date())
  console.log(activeDate)
  console.log(selectedDate)
  return (
    <div>
      <Navbar setActiveDate={setActiveDate} activeDate={activeDate}/>
      <div className='bars-and-grids'>
        <LeftBar setActiveDate={setActiveDate} activeDate={activeDate} selectedDate={selectedDate}/>
        {console.log(activeDate)}
        <CalenderGrid setSelectedDate={setSelectedDate} selectedDate={selectedDate} activeDate={activeDate}/>
        <RightBar />
      </div>
    </div>
  )
}

export default MainPage