import React from 'react'
import Header from '../components/Header'
import HeroAreaHomePage from '../components/HeroAreaHomePage'
import AboutAreaHomePage from '../components/AboutAreaHomePage'
import ProjectAreaHomeThree from '../components/ProjetAreaHomePage'
import ContactArea from '../components/ContactArea'
import Footer from '../components/Footer'
import ProjectDisplay from '../components/ProjectDisplay/ProjectDisplay'

const HomePages = () => {
  return (
    <>
      <Header />
      <div id='smooth-wrapper' className='black-bg-3'>
        <div id='smooth-content'>
          <main>
            <HeroAreaHomePage />
            <AboutAreaHomePage />
            <ProjectAreaHomeThree />
            <ProjectDisplay />
            <ContactArea />
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default HomePages
