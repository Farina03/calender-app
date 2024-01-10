import React from 'react'
import './weekbar.css'
import './weekleftbar.css'

const WeekBar = ({classPrefix, weekDays, selectedDate, activeDate}) => {

  return (
    <div className= {`${classPrefix}-weekbar-inner-div`} >{weekDays}</div>
  )
}

export default WeekBar