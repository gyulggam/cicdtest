import React from 'react'
import Header from 'components/Header'
import Hero from 'components/sections/Hero'
import LifeStyle from 'components/sections/LifeStyle'
import CiSection from 'components/sections/CiSection'
import LiveRecommendations from 'components/sections/LiveRecommendations'
import UserExperience from 'components/sections/UserExperience'
import UserReview from 'components/sections/UserReview'
import Shortcuts from 'components/sections/Shortcuts'
import Footer from 'components/Footer'

function Landing() {
  return (
    <div>
      <Header/>

      <Hero />

      <LifeStyle />

      <CiSection />
      
      <LiveRecommendations />
      
      <UserExperience />
      
      <UserReview />
      
      <Shortcuts />

      <Footer />
    </div>
  )
}

export default Landing