import React from 'react'
import { newsresult } from '../components/api'
import Headlinescarousel from '../components/carousels/Headlines'
import Header from '../components/Header'

const Home = () => {
 
  return (
    <div>
      
      Home
     

      <button onClick={()=> newsresult()} >apitest</button>
    </div>
  )
}

export default Home