import React from 'react'
import MapSection from '../components/core/HomePage/MapSection'
import CardSection from '../components/core/HomePage/CardSection'
import HiddenVideo from '../components/core/HomePage/HiddenVideo'
import FInanceSection from '../components/core/HomePage/FInanceSection'

const Home = () => {
    
  return (    
    <div>
    
      <FInanceSection />
      <MapSection/>
      <HiddenVideo />
      <CardSection />



    </div>

   
  )
}

export default Home