import { useState } from 'react'


import './App.css'
import { Route, Routes } from 'react-router-dom'
import Page1 from './Components/Page1'
import Page2 from './Components/Page2'
function App() {
 

  return (
    <Routes>
      <Route path='/' element={<Page1/>}>      </Route>
      <Route path='/about' element={<Page2/>}>  </Route>
       

    </Routes>
  )
}

export default App
