import React from 'react'
import './leftbar.css'
import CalenderGrid from '../CalenderGrid/CalenderGrid'
import ArrowBackIos from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos'
import { format, addMonths, subMonths } from 'date-fns'

const LeftBar = ({setActiveDate, selectedDate, activeDate}) => {
  return (
    <div className='leftbar-outer-div'>
      {/* <button className='event-create-btn'>Create</button> */}
      <div className='leftbar-navigation-outer-div'>
        <ArrowBackIos fontSize='small' onClick={()=>setActiveDate(subMonths(activeDate, 1))}/>
        <div className='leftbar-month'>{format(activeDate, "MMMM yyyy")}</div>
        <ArrowForwardIos fontSize='small' onClick={() => setActiveDate(addMonths(activeDate, 1))}/>
      </div>
      <CalenderGrid classPrefix="leftbar" setActiveDate={setActiveDate} 
          selectedDate={selectedDate} activeDate={activeDate} />
    </div>
  )
}

export default LeftBar