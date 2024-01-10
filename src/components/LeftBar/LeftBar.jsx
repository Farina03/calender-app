import React from 'react'
import './leftbar.css'
import CalenderGrid from '../CalenderGrid/CalenderGrid'

const LeftBar = ({setActiveDate, selectedDate, activeDate}) => {
  return (
    <div className='leftbar-outer-div'>
      <div className='small-comp-div'>Here
        {/* <CalenderGrid setActiveDate={setActiveDate} 
            selectedDate={selectedDate} activeDate={activeDate} /> */}
      </div>
    
    </div>
  )
}

export default LeftBar