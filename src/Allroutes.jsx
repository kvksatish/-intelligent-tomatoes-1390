import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './pages.jsx/Home'

const Allroutes = () => {
    return (
        <Routes>
            <Route path='/'  element={<Home/>} />
        </Routes>
   
  )
}

export default Allroutes