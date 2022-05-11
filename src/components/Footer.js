import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
       <div>
           <Link to ='/about'>About</Link>
       </div> 
      Copyright &copy; : 2021
    </div>
  )
}

export default Footer
