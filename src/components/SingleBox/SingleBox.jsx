import React, { useState } from 'react'
import './singlebox.css'
import EventCreator from '../EventCreator/EventCreator'

const SingleBox = ({dates, setSelectedDate}) => {
  const [eventDates, setEventDates] = useState([])
  const [newInputEvent, setNewInputEvent] = useState("")
  function handleClick() {
    setSelectedDate(dates[2])
    setEventDates(prevEvent => {
      return([
        ...prevEvent,
        [dates[2]]=[...prevEvent[dates[2]],
                    newInputEvent]
      ]
        
      )
    })
  }
  return (
        <div className={`singlebox-outer-div`}>
          <div onClick={()=> setSelectedDate(dates[2])} 
              className={`singlebox-inner-div ${dates[1]}`}>
            {dates[0]}
          </div>
        </div> 
  )
}

export default SingleBox