import logo from './logo.svg';
import './App.css';
import About from './components/About'
import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

import { useState } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import matchers from '@testing-library/jest-dom/matchers';

function App() {
  const[tasks,setTasks ] = useState([
    {
      id:1,
      title:'Doctor',
      day:'Monday',
      reminder:true,
    },
    {
      id:2,
      title:'Food',
      day:'Tuesday',
      reminder:false,
    },
    {
      id:3,
      title:'Market',
      day:'WednessDay',
      reminder:true,
    }
  ])

  const onDelete = (id) => {
      setTasks(tasks.filter((task)=>task.id!=id ));
  };

  const onToggle = (id) => {   
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      ))
    
  }
  // ADD task
  const addTask =(task)=>{    
   const id = Math.floor(Math.random()*1000)+1
   const finalTask = {id,...task}
    console.log('ADDDIng.. '+id)   
    setTasks([...tasks,finalTask])
  }

  return (
    <Router>
      <div className="container">
        <Header />
        <AddTask addTaskForm={addTask}/>
      
        <Route path='/' exact render={() => 
        <>
         
          <Tasks tasks={tasks} onDelete={onDelete} onToggle={onToggle}/>
        </>
        }
         />
      
      
        <Route path='/about' component={About}/>
        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
