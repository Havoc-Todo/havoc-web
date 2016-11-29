import React from 'react'
import './Main.scss'
import LoginButton from '../../../components/LoginButton/LoginButton'

export const DefaultScreen = () => (
  <div className='fill-scroll'>
    <div className='todo-menu' style={{ marginTop: '40px' }} >
      <LoginButton />
    </div>
  </div>
)

export default DefaultScreen
