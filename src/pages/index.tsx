// pages/index.tsx
import Wrapper from '../Wrapper'
import React from 'react'
import HomePages from './HomePages'

export const metadata = {
  title: 'Xiaosong Portfolio ',
}

const index = () => {
  return (
    <Wrapper>
      <HomePages />
    </Wrapper>
  )
}

export default index
