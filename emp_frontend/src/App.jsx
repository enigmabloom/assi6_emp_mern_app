import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Empform from './components/Empform'
import Home from './components/Home'
import Main from './components/Main'

function App() {
 

  return (
    <>
    <Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/home' element={<Main child={<Home/>}/>}></Route>
    <Route path='/signup' element={<Main child={<Signup/>}/>}></Route>
    <Route path='/empform' element={<Main child={<Empform/>}/>}></Route>
    </Routes>
    </>
  )
}

export default App
