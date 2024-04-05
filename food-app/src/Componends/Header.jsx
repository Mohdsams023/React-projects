import React from 'react'
import Search from './Search'

function Header() {
  return (
    <div className='header'>
      <div className="logo"><span>F-SHOP</span></div>
      <div className="nav">
        <Search />
        <a href="#">Offers</a>
        <a href="#">Helps</a>
        <a href="#">Sign In</a>
        <a href="#">Cart</a>
      </div>
    </div>
  )
}

export default Header
