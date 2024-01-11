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
import EventModal from '../EventModal/EventModal'

const MainPage = () => {
  const [selectedDate, setSelectedDate] = useState("")
  const [activeDate, setActiveDate] = useState(new Date())
  const [eventTracker, setEventTracker] = useState(null)
  let eventTrigger = (selectedDate !== "" ) ? true : false
  return (
    <div>
      {eventTrigger ? <EventModal setEventTracker={setEventTracker} eventTracker={eventTracker}
                                  selectedDate={selectedDate} setSelectedDate={setSelectedDate} setActiveDate={setActiveDate}/> :
      <div>
      <Navbar setActiveDate={setActiveDate} activeDate={activeDate}/>
      <div className='bars-and-grids'>
        <LeftBar setActiveDate={setActiveDate} activeDate={activeDate} selectedDate={selectedDate}/>
        <CalenderGrid classPrefix="mainpage" eventTracker={eventTracker} setSelectedDate={setSelectedDate} 
                      selectedDate={selectedDate} activeDate={activeDate}/>
        <RightBar />
      </div>
      </div>}
    </div>
  )
}

export default MainPage