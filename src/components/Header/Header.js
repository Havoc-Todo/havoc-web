import React from 'react'
// import { IndexLink, Link } from 'react-router'
import { browserHistory } from 'react-router'
import AppBar from 'material-ui/AppBar'
// import FlatButton from 'material-ui/FlatButton'
import LoginButton from '../LoginButton/LoginButton'

import './Header.scss'

// const loginButton = (
//   <FlatButton label='login' labelPosition='before' onTouchTap={() => browserHistory.push('/login')} />
// )

export const Header = () => (
  <div>
    <AppBar
      title={<span style={{ cursor: 'pointer' }}>Havoc-Todo</span>}
      onTitleTouchTap={() => browserHistory.push('/')}
      iconElementRight={<LoginButton />}
    />
    {/*
    <h1>React Redux Starter Kit</h1>
    <IndexLink to='/' activeClassName='route--active'>
      Home
    </IndexLink>
    {' · '}
    <Link to='/counter' activeClassName='route--active'>
      Counter
    </Link>
    {' · '}
    <Link to='/login' activeClassName='route--active'>
      Login
    </Link>
    */}
  </div>
)

export default Header
