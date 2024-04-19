import React from 'react'
import NavBar from './NavBar/NavBar'
import { Outlet } from 'react-router'

const RootLayout = () => {
  return (
    <>
        <NavBar/>
        <main>
            <Outlet/>
        </main>
    </>
  )
}

export default RootLayout
