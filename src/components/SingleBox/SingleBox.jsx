import React, { useState } from 'react'
import './singlebox.css'
import './singleboxleftbar.css'
import EventCreator from '../EventCreator/EventCreator'
import { format } from 'date-fns'

const SingleBox = ({classPrefix, eventTracker, dates, setSelectedDate}) => {
  // const [eventDates, setEventDates] = useState([])
  // const [newInputEvent, setNewInputEvent] = useState("")
  //function handleClick() {
    // setSelectedDate(dates[2])
    //
    // setEventDates(prevEvent => {
    //   return([
    //     ...prevEvent,
    //     [dates[2]]=[...prevEvent[dates[2]],
    //                 newInputEvent]
    //   ]
        
    //   )
    // })

  //}
  function handleClick() {
    setSelectedDate(dates[2])
  }
  console.log(eventTracker)

  return (
    // <></>
        <div className={`${classPrefix}-singlebox-outer-div`}>
          <div onClick={()=> setSelectedDate(dates[2])} 
              className={`${classPrefix}-singlebox-inner-div ${classPrefix}-${dates[1]}`}>
            {dates[0]}
            {/* {!!eventTracker && Object.keys(eventTracker).map(item => {
              if(item === dates[2])
                return (
                  <div>{eventTracker[dates[2]]}</div>
              )})} */}
          </div>
          <div className='event-outer-div'>
          {!!eventTracker && Object.keys(eventTracker).map(item => {
              if(item === dates[2])
                return (
                  <div className='event-inner-div'>{eventTracker[dates[2]]}</div>
          )})}
          </div>
          
        </div> 
  )
}

export default SingleBox

//eventTracker[dates[2]]