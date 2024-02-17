import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'
const Sidebar = () => {
  return (
    <div className='sidebarContainer'>
      <div className='sidebarInfo'>
        <Navbar/>
        <Search/>
        <Chats/>
      </div>
    </div>
  )
}

export default Sidebar
