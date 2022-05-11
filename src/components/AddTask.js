import React from 'react'
import {useState} from 'react'

const AddTask = ({addTaskForm}) => {
    const [title,setTitle] = useState('')
    const [day,setDay] = useState('')
    const [reminder,setReminder] = useState(false)

    const onsubmit =(e)=>{
        e.preventDefault()  
        if (!title)   {
            alert('Please enter task')
            return
        }
        const task = {title,day,reminder}
        addTaskForm(task)
        setTitle('')
        setDay('')
        setReminder(false)
    }
  return (
    <form onSubmit={onsubmit}>
        <div className='form-control'>
            <label>Task</label>
            <input type='text' placeholder='Enter Task' value={title} onChange={(e)=>setTitle(e.target.value) }/>
        </div>
        <div className='form-control'>
            <label>Day</label>
            <input type='text' placeholder='Enter Day' value={day} onChange={(e)=>setDay(e.target.value) }/>
        </div>
        <div className='form-control'>
            <label>Reminder</label>
            <input type='checkbox' value={reminder} checked= {reminder} onChange={(e)=>setReminder(e.currentTarget.checked) }/>
        </div>

        <input type='submit' value ='Save Task' 
      className='btn'  />
      
    </form>
  )
}

export default AddTask
