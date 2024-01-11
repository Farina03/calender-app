import React, { useState} from 'react'
import { format, set, toDate } from 'date-fns'
import './eventmodal.css'

const EventModal = ({setEventTracker, eventTracker, selectedDate, setSelectedDate, setActiveDate}) => {
    const [modalInput, setModalInput] = useState("")
    function handleChange(event) {
        setModalInput(event.target.value)                                         //   { 01-01-2024 : [event1, event2],
        }                                                                          //     03-01-2024 : [event3, event4],                                                                               //    .....
    function handleClick() {                                                        //    ....}
        let tempevent = {...eventTracker}
        !tempevent[selectedDate] && (tempevent[selectedDate] = []);
        tempevent[selectedDate] = [...tempevent[selectedDate], modalInput]
        // console.log(modalInput)
        setEventTracker({...tempevent})
        // setEventTracker(item => {
        //     return(
            //      {...item,
        //         [selectedDate] : modalInput}
        //     )
        // })
        // 
        setActiveDate(new Date())
        setSelectedDate("")
        
    }
    // console.log("≈rgxrg", eventTracker)

  return (
    <div className='modal-outer-div'>
        {/* {console.log(selectedDate, "selectedDate")} */}
        <input className="event-input" type="text" name="modalinput" value={modalInput} 
                onChange={handleChange} placeholder='Enter event name'></input>
        <button className="event-btn" type='submit' onClick={handleClick}>Create</button>
    </div>
  )
}

export default EventModal