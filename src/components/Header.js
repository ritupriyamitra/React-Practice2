import React from 'react'
import Button from './Button'
import {useLocation} from 'react-router-dom'

const Header = () => {
   const location = useLocation() 
   
  return (
    <div className='header'>
     <div>
         Task List
     </div>
     <div>
        {location.pathname ==='/' &&<Button title='ADD Task' color ='red' />}
     </div>
   
    </div>
  )
}

export default Header
