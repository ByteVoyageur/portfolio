// scrollToTop component
'use client'
import UseSticky from '@/src/hooks/UseSticky'
import React, { useState, useEffect, useCallback } from 'react' // 引入useCallback

type style_type = {
  style?: boolean
}

const ScrollToTop = ({ style }: style_type) => {
  const { sticky }: { sticky: boolean } = UseSticky()

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = useCallback(() => {
    // 使用useCallback
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false)
    }
  }, [showScroll]) // 添加showScroll作为依赖项

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop)
    return () => window.removeEventListener('scroll', checkScrollTop)
  }, [checkScrollTop]) // checkScrollTop现在是一个稳定的函数引用

  return (
    <>
      <div
        className={`back-to-top-wrapper${style ? 'back_to_top-2' : ''} ${
          sticky && 'back-to-top-btn-show'
        }`}
      >
        <button
          onClick={scrollTop}
          id='back_to_top'
          type='button'
          className='back-to-top-btn'
        >
          <svg
            width='12'
            height='7'
            viewBox='0 0 12 7'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M11 6L6 1L1 6'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
      </div>
    </>
  )
}

export default ScrollToTop
