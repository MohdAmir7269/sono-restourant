import React from 'react'

import Slider from '../Component/Slider'
import Header from '../Component/Header'
import Award from '../Component/Award'
import Our from '../Component/Our'
import Lunch from '../Component/Lunch'
import Seemore from '../Component/Seemore'
import Joinsono from '../Component/Joinsono'
import Leaf from '../Component/Leaf'

const Home = () => {
  return (
    <div className='container-fluid p-0 m-0'>
      <Slider />
      <Leaf />
      <Header />
      <Award />
      <Our />
      <Lunch />
      <Seemore />
      <Joinsono />

    </div>
  )
}

export default Home 
