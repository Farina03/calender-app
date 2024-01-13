import React, { useState} from 'react'
import { addDays, differenceInDays, format, set, toDate } from 'date-fns'
import './eventmodal.css'

const EventModal = ({setEventTracker, eventTracker, selectedDate, setSelectedDate, setActiveDate}) => {
    const [modalInput, setModalInput] = useState({
        eventname: "",
        startdate: selectedDate,
        enddate: selectedDate
    })
    function handleChange(event) {
        const {name, value} = event.target
        setModalInput(prevItem => {
            return (
                {...prevItem,
                [name] : value}
            )
        })                                                                   //   { 01-01-2024 : [event1, event2],
    }                                                                               
                                                                                  //     03-01-2024 : [event3, event4],                                                                               //    .....
    function createEvent() {    
        let tempDate = modalInput.startdate                                                    //    ....}
        let tempevent = {...eventTracker}
        console.log(modalInput)
        for(let i = 0; i <= differenceInDays(modalInput.enddate, modalInput.startdate); i++) {
            // !tempevent[tempDate] && (tempevent[tempDate] = []);
            tempevent[tempDate] = tempevent[tempDate] || []
            tempevent[tempDate].push(modalInput.eventname)
            tempDate = format(addDays(tempDate, 1),'yyyy-MM-dd')

            console.log(tempDate)
        }
        console.log(tempevent)
        setEventTracker({...tempevent})
        setActiveDate(modalInput.startdate)
        setSelectedDate("")
    }

  return (
    <div className='modal-outer-div'>
        <input className="event-input" type="text" name="eventname" value={modalInput.eventname} 
                onChange={handleChange} placeholder='Enter event name'></input>
        <div>
            <div>
                <label for="event-start">Start Date</label>
                <input className='event-start' name='startdate' type='date' value={modalInput.startdate} onChange={handleChange}/>
            </div>
            <div>
                <label for="event-start">End Date</label>
                <input className='event-start' name='enddate' type='date' value={modalInput.enddate} onChange={handleChange} />
            </div>
        </div>
        <button className="event-btn" type='submit' onClick={createEvent}>Create</button>
    </div>
  )
}

export default EventModal