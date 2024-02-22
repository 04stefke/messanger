import React from 'react'
import Navbar from '../Navbar/Navbar'
import Search from '../Search/Search'
import Chats from '../Chats/Chats'

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
