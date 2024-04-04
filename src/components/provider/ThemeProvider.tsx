'use client'
import React from 'react'
import UseThemeCheck from '@/src/hooks/UseThemeCheck'
import Preloader from '../preloader/Preloader'

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { themeCheck } = UseThemeCheck()
  return <>{!themeCheck ? <Preloader /> : children}</>
}

export default ThemeProvider
