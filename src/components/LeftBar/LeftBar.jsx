import React from 'react'
import './leftbar.css'
import CalenderGrid from '../CalenderGrid/CalenderGrid'
import ArrowBackIos from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos'

const LeftBar = ({setActiveDate, selectedDate, activeDate}) => {
  return (
    <div className='leftbar-outer-div'>
      <button className='event-create-btn'>Create</button>
      <div className='leftbar-navigation-outer-div'>
        <ArrowBackIos fontSize='small'/>
        <div className='leftbar-month'>Month Year</div>
        <ArrowForwardIos fontSize='small'/>
      </div>
      <CalenderGrid classPrefix="leftbar" setActiveDate={setActiveDate} 
          selectedDate={selectedDate} activeDate={activeDate} />
    </div>
  )
}

export default LeftBar