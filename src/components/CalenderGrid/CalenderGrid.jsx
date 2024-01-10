import React, { useEffect } from 'react'
import './calendergrid.css'
import SingleBox from '../SingleBox/SingleBox'
import WeekBar from '../WeekBar/WeekBar'
import './calenderleftbar.css'
import { format, 
        addDays,
        startOfWeek,
        endOfWeek,
        startOfMonth,
        endOfMonth,
        isSameDay,
        isSameMonth,
        addMonths,
        subMonths,
        getWeek} from 'date-fns'

const CalenderGrid = ({classPrefix, setSelectedDate, setActiveDate, selectedDate, activeDate}) => {
  // useEffect(() => {
  //   getDates()
  // },[])
  const weekStartDate = startOfWeek(activeDate)
  const weekDays = []
  for(let i = 0; i < 7; i++) {
    weekDays.push(format(addDays(weekStartDate, i), "E"))
  }
  const allWeeks = []
  const datesForCurrentWeek = (date, selectedDate, activeDate) => { //generateDatesForCurrentWeek
    let currentDate = date
    for(let i = 0; i < 7; i++) {
      const cloneDate = currentDate
      let dateLabel = ""
      if(isSameMonth(currentDate, activeDate)) {
        if(isSameDay(currentDate, activeDate)) {
          // if(isSameDay(activeDate, selectedDate))
          //   dateLabel = "today-selected"
          dateLabel = "today"
        } 
        else if(isSameDay(currentDate, selectedDate))
          dateLabel = "selected"
        else dateLabel = "nonselected"
      }
      else dateLabel = "diffmonth"
      allWeeks.push([format(currentDate, "d"), dateLabel, cloneDate])
      currentDate = addDays(currentDate, 1)
    }
  }
  const getDates = () => {
    const startOfSelectedMonth = startOfMonth(activeDate)
    const endOfSelectedMonth = endOfMonth(activeDate)
    const monthStartDate = startOfWeek(startOfSelectedMonth) //startDate
    const monthEndDate = endOfWeek(endOfSelectedMonth) //endDate

    // let currentDate = startOfSelectedMonth
    // while(currentDate <= endOfSelectedMonth) {
    //   allWeeks.push(format(currentDate, "d"))
    //   currentDate = addDays(currentDate, 1)
    // }
    //working code
    let currentDate = monthStartDate
    while(currentDate <= monthEndDate) {
      datesForCurrentWeek(currentDate, selectedDate, activeDate)
      currentDate = addDays(currentDate, 7)
    }
    
  }
  return (
      <div className={`${classPrefix}-calender-outer-div`}>
        <div className={`${classPrefix}-week-outer-div`}>
          {weekDays.map(item => {
            console.log(item)
            return (
              <WeekBar classPrefix={classPrefix} setActiveDate={setActiveDate} weekDays={item} selectedDate={selectedDate} activeDate={activeDate}/>
            )
          })}
        </div>
        <div className={`${classPrefix}-calender-inner-div`}>
          {getDates()}
          {allWeeks.map((item) => {
            return (
              <SingleBox classPrefix={classPrefix} setSelectedDate={setSelectedDate} dates={item}/>
            )
          })}
        </div>
      </div>
      
  )
}

export default CalenderGrid