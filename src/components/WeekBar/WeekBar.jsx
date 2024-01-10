import React from 'react'
import './weekbar.css'

const WeekBar = ({weekDays, selectedDate, activeDate}) => {

  return (
    <div className='weekbar-inner-div'>{weekDays}</div>
  )
}

export default WeekBar