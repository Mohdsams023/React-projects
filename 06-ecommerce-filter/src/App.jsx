import React from 'react'
import Navbar from './Navbar/Navbar.jsx';
import Product from './Products/Products.jsx';
import Recommended from './Recommended/Recommended.jsx'
import Sidebar from './Sidebar/Sidebar.jsx';

function App() {
  return (
   <>
   <Sidebar />
    <Navbar />
    <Recommended />
    <Product />
   </>
  )
}

export default App