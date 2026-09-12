import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Generating from './pages/Generating'
import Result from './pages/Result'
import History from './pages/History'

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/generating" element={<Generating/>} />
      <Route path="/result" element={<Result/>} />
      <Route path="/history" element={<History/>} />
    </Routes>
  )
}
