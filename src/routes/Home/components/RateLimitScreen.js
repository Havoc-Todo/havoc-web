import React from 'react'
import './Main.scss'

export const RateLimitScreen = () => (
  <div className='fill-scroll'>
    <div className='todo-menu' style={{ marginTop: '40px' }} >
      Please wait a minute then refresh the page... you're probably seeing this because you made too many requests to the Google People API
    </div>
  </div>
)

export default RateLimitScreen
