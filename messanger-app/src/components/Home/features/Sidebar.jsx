import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
const Sidebar = () => {
  return (
    <div className='sidebarContainer'>
      <Navbar/>
      <Search/>
    </div>
  )
}

export default Sidebar
