'use client'
import { useEffect, useRef } from 'react'
import { animationCreate } from '@/src/utils/utils'
import { throwableAnimation } from '@/src/utils/throwableAnimation'
import ScrollToTop from '@/src/components/scrollToTop'
import { ToastContainer } from 'react-toastify'
import AnimatedCursor from 'react-animated-cursor'
import { usePathname } from 'next/navigation'
import { gsap } from 'gsap'

import animationTitle from '@/src/utils/animationTitle'
import animationTitleChar from '@/src/utils/animationTitleChar'
import servicesPanel from '@/src/utils/servicesPanel'
import PortfolioPanel from '@/src/utils/PortfolioPanel'
import blogAnimation from '@/src/utils/blogAnimation'
import linesAnimation from '@/src/utils/linesAnimation'
import { buttonAnimation } from '@/src/utils/buttonAnimation'
import { scrollSmother } from '@/src/utils/scrollSmother'
import { scrollTextAnimation } from '@/src/utils/scrollTextAnimation'

import {
  ScrollSmoother,
  ScrollToPlugin,
  ScrollTrigger,
  SplitText,
} from '@/src/plugins'
gsap.registerPlugin(ScrollSmoother, ScrollTrigger, ScrollToPlugin, SplitText)

if (typeof window !== 'undefined') {
  require('bootstrap/dist/js/bootstrap')
}

const Wrapper = ({ children }: any) => {
  const pathname = usePathname()

  useEffect(() => {
    // animation
    const timer = setTimeout(() => {
      animationCreate()
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      ScrollSmoother.create({
        smooth: 1.35,
        effects: true,
        smoothTouch: false,
        normalizeScroll: false,
        ignoreMobileResize: true,
      })
    }
  }, [])

  useEffect(() => {
    throwableAnimation()
    servicesPanel()
    PortfolioPanel()
    animationTitle()
    animationTitleChar()
    blogAnimation()
    linesAnimation()
    buttonAnimation()
    scrollSmother()
    scrollTextAnimation()
  }, [pathname])

  return (
    <>
      {children}

      <ToastContainer position='top-right' />
      <AnimatedCursor
        innerSize={0}
        outerSize={15}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        outerStyle={{
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          cursor: 'pointer',
        }}
        showSystemCursor={true}
      />
      <ScrollToTop />
    </>
  )
}

export default Wrapper
