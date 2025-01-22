import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Nav} from './Components/nav'
import Home from './Components/Main'
function App() {
 

  return (
   <div className='m-0 p-0 h-screen w-screen '>
      <Nav></Nav>
      <Home></Home>
    </div>
  )
}

export default App
