import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import Create from './Create'


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element = { <Home/> }  />
      <Route path='/create' element = { <Create/> }  />
    </Routes>
    </BrowserRouter>
  )
}

export default App
