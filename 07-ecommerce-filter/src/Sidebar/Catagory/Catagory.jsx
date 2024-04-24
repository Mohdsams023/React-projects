import React from 'react'
import './Catagory.css'

function Catagory() {
  return (
    <div>
      <h2 className="sidebar-title">
        Catagory
      </h2>
      <div className='catagory-container'>
        <label className="sidebar-laber-container">
          <input type="radio" name='test' />
          <span className="checkmark">All</span>
        </label>
        <label className="sidebar-laber-container">
          <input type="radio" name='test' />
          <span className="checkmark">Nike</span>
        </label>
        <label className="sidebar-laber-container">
          <input type="radio" name='test' />
          <span className="checkmark">Adidas</span>
        </label>
        <label className="sidebar-laber-container">
          <input type="radio" name='test' />
          <span className="checkmark">Puma</span>
        </label>
        <label className="sidebar-laber-container">
          <input type="radio" name='test' />
          <span className="checkmark">Vans</span>
        </label>
      </div>
    </div>
  )
}

export default Catagory