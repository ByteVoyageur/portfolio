import { useState, useEffect, useCallback } from 'react'

export default function UseThemeCheck() {
  const [themeCheck, setThemeCheck] = useState<boolean>(false)
  const [active, setActive] = useState<boolean>(false)

  const tp_set_scheme = useCallback((tp_theme: string) => {
    localStorage.setItem('tp_theme_scheme', tp_theme)
    // state to track if the the dark theme is active
    document.documentElement.setAttribute('tp-theme', tp_theme)

    // Update the active state based on if the theme is dark or light
    setActive(tp_theme === 'tp-theme-dark')
  }, [])

  // Function to toggle the theme between dark and light
  const toggleTheme = useCallback(() => {
    // Get the current theme scheme from local storage
    const themeScheme = localStorage.getItem('tp_theme_scheme')
    // Get the theme toggle button
    const themeToggle: any = document.querySelector('.themepure-theme-toggle')

    //check the current theme and switch to the opposite one
    //also update the theme toggle button class to reflect the current theme
    if (themeScheme === 'tp-theme-dark') {
      tp_set_scheme('tp-theme-light')
      themeToggle.classList.remove('dark-active')
      themeToggle.classList.add('light-active')
    } else {
      tp_set_scheme('tp-theme-dark')
      themeToggle.classList.remove('light-active')
      themeToggle.classList.add('dark-active')
    }
  }, [tp_set_scheme])

  const tp_init_theme = useCallback(() => {
    const themeToggle: any = document.querySelector('.themepure-theme-toggle')
    const themeInput: HTMLInputElement | null = document.querySelector(
      '.themepure-theme-toggle-input'
    )

    if (themeToggle && themeInput) {
      if (localStorage.getItem('tp_theme_scheme') === 'tp-theme-light') {
        tp_set_scheme('tp-theme-light')
        themeToggle.classList.remove('dark-active')
        themeToggle.classList.add('light-active')
        themeInput.checked = false
      } else {
        tp_set_scheme('tp-theme-dark')
        themeInput.checked = true
        themeToggle.classList.remove('light-active')
        themeToggle.classList.add('dark-active')
      }
    }
  }, [tp_set_scheme])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      tp_init_theme()

      const themeInput: any = document.querySelector(
        '.themepure-theme-toggle-input'
      )
      if (themeInput) {
        themeInput.addEventListener('change', toggleTheme)
        return () => {
          themeInput.removeEventListener('change', toggleTheme)
        }
      }

      setThemeCheck(true)
    }
  }, [toggleTheme, tp_init_theme])

  return {
    themeCheck,
    toggleTheme,
    active,
  }
}
