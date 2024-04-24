import React from 'react';
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

import "./Navbar.css"

function Navbar() {
  return (
    <>
      <div className="nav-container">
        <input type="text" className='input-btn' placeholder='Search shoes , catagroy and color' />

        <div className="profile">
          <a href='#'><CiHeart className="nav-icons" /></a>
          <a href='#'><CiUser className="nav-icons" /></a>
          <a href='#'><CiShoppingCart className="nav-icons" /></a>
        </div>
      </div>
    </>
  )
}

export default Navbar