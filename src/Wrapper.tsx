'use client'
import { useEffect } from 'react'
import { animationCreate } from '@/src/utils/utils'
import { throwableAnimation } from '@/src/utils/throwableAnimation'
import ScrollToTop from '@/src/components/scrollToTop'
import { ToastContainer } from 'react-toastify'
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
import textInvert from '@/src/utils/textInvert'
import ContextProvider from '@/src/context/app-context'

import {
  ScrollSmoother,
  ScrollToPlugin,
  ScrollTrigger,
  SplitText,
} from '@/src/plugins'
gsap.registerPlugin(ScrollSmoother, ScrollTrigger, ScrollToPlugin, SplitText)

if (typeof window !== 'undefined') {
  const { ScrollTrigger } = require('gsap/ScrollTrigger')
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
    // sticky section
    if (typeof window !== 'undefined') {
      let mm = gsap.matchMedia()
      mm.add('(min-width: 1199px)', () => {
        ScrollTrigger.create({
          trigger: '.tp-port-3-area',
          start: 'top -60%',
          end: 'bottom 120%',
          pin: '.tp-port-3-content-left',
          pinSpacing: false,
        })
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
    textInvert()
  }, [pathname])

  return (
    <ContextProvider>
      {children}
      <ToastContainer position='top-right' />
      <ScrollToTop />
    </ContextProvider>
  )
}

export default Wrapper
