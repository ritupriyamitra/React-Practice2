import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete,onToggle}) => {
  return (
    <div className={`task ${task.reminder?'reminder':''}`} onDoubleClick={()=>onToggle(task.id)}>
      <h3>{task.title}</h3>
      <div className=' '>
      <p>{task.day} <FaTimes color='red' onClick={()=>onDelete(task.id)}/></p> 
      </div>     
    </div>
  )
}

export default Task
