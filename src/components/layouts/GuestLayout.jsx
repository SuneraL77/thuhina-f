import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../nav/Header'
import Footer from '../footer/Footer'

const GuestLayout = () => {
  return (
    <>
    <main>
      <Header/>

      <Outlet/>

      <Footer/>
    </main>
    </>
  )
}

export default GuestLayout
