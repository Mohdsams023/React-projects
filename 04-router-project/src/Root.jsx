import React from 'react'
import Header from './componends/header/Header'
import Footer from './componends/footer/Footer'
import { Outlet } from 'react-router-dom'

function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Root
