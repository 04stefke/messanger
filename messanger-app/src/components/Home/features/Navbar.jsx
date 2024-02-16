import React from 'react'
import {UserOutlined} from '@ant-design/icons'
const Navbar = () => {
  return (
    <div className='navbarContainer'>
      <span>Stefan's Chat</span>
      <div className="user">
        <UserOutlined />
        <span className='userName'>Stefan</span>
        <button className='btn'>Logout</button>
      </div> 

        
    </div>
  )
}

export default Navbar
