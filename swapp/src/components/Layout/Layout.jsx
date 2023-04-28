import React from 'react'
import Header from '../Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='w-full h-full'>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default Layout