import React from 'react'
import Catagory from './Catagory/Catagory'
import Price from './Price/Price'
import Colors from './Colors/Colors'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="title">
            Sidebar
        </div>
        <Catagory />
        <Price />
        <Colors />
    </div>
  )
}

export default Sidebar