import React from 'react'
import settings from '../settings/'

const Header = () => {
  document.title = settings.siteName
  return (
    <header>
      <div><h1>{settings.siteName}</h1></div>
    </header>
  )
}

export default Header
