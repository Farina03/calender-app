import React from 'react'
import './navbar.css'
import { addMonths, format, subMonths } from 'date-fns'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { makeStyles } from '@mui/material';

const Navbar = ({setActiveDate, activeDate}) => {
  return (
    <div className='navbar-outer-div'>
        <div className='leftside-elements'>
          <div className='title'>Calendar</div>
          <ArrowBackIosIcon style={{"cursor":"pointer",}} 
              onClick={()=>setActiveDate(subMonths(activeDate,1))}/>
          {/* <button className='navigation-button' onClick={() => setActiveDate(subMonths(activeDate, 1))}></button> */}
          <div className='month-name'>{format(activeDate, "MMMM yyyy")}</div>
          {/* <button className='navigation-button' onClick={() => setActiveDate(addMonths(activeDate, 1))}></button> */}
          <ArrowForwardIosIcon style={{"cursor":"pointer"}}
              onClick={()=>{setActiveDate(addMonths(activeDate, 1))}}/>
        </div>
        <div className='rightside-elements'>
          <button className='today-btn' onClick={() => setActiveDate(new Date())}>Today</button>
        </div>
    </div>
  )
}

export default Navbar