import React from 'react'
import Banner from './Banner'
import HomeCategory from './HomeCategory'
import CategoryShowCase from './CategoryShowCase'
import AppSection from './AppSection'
import Sponsor from './Sponsor'

const Home = () => {
  return (
    <div>
      <Banner/>
      <HomeCategory/>
      <CategoryShowCase/>
      <AppSection/>
      <Sponsor/>
    </div>
  )
}

export default Home