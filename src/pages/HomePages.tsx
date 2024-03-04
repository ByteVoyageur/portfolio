import React from 'react'
import Header from '../components/Header'
import HeroAreaHomeThree from '../components/HeroAreaHomePage'
import HeroAreaHomePage from '../components/HeroAreaHomePage'

const HomePages = () => {
  return (
    <>
      <Header />
      <div id='smooth-wrapper' className='black-bg-3'>
        <div id='smooth-content'>
          <main>
            <HeroAreaHomePage />
          </main>
        </div>
      </div>
    </>
  )
}

export default HomePages
