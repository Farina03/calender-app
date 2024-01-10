import React from 'react'
import './calendergrid.css'
import SingleBox from '../SingleBox/SingleBox'
import WeekBar from '../WeekBar/WeekBar'
import { format, addDays, startOfWeek } from 'date-fns'

const CalenderGrid = ({selectedDate, activeDate}) => {
  let cnt = []
    for(let i = 1; i <= 35; i++) {
        cnt.push(i)
    }
  const weekStartDate = startOfWeek(activeDate)
  console.log(activeDate)
  console.log(selectedDate)
  console.log(startOfWeek(activeDate))
  const weekDays = []
  for(let i = 0; i < 7; i++) {
    weekDays.push(format(addDays(weekStartDate, i), "E"))
  }
  return (
      <div className='calender-outer-div'>
        <div className='week-outer-div'>
          {weekDays.map(item => {
            console.log(item)
            return (
              <WeekBar weekDays={item} selectedDate={selectedDate} activeDate={activeDate}/>
            )
          })}
        </div>
        <div className='calender-inner-div'>
          {cnt.map(item => <SingleBox />)}
        </div>
      </div>
      
  )
}

export default CalenderGrid