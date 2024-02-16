import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'
const Sidebar = () => {
  return (
    <div className='sidebarContainer'>
        <div className='hamburgerContainer'>
          <input type='checkbox' id='checkbox' className='checkbox'/>
          <div className='hamburger'></div>
        </div>
      <Navbar/>
      <Search/>
      <Chats/>
    </div>
  )
}

export default Sidebar
