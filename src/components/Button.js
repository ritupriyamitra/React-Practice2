import React from 'react'

const Button = ({title , color}) => {
  return (
    <div>
      <button className='btn' style={{'backgroundColor': 'green'}} >{title}</button>
    </div>
  )
}

export default Button
