import React from 'react'
import {UserOutlined} from '@ant-design/icons'
import {auth} from '../../../firebase'
import {signOut} from 'firebase/auth'
const Navbar = () => {
  return (
    <div className='navbarContainer'>
      <span>Stefan's Chat</span>
      <div className="user">
        <UserOutlined />
        <span className='userName'>Stefan</span>
        <button className='btn' onClick={() => signOut(auth)}>Logout</button>
      </div> 

        
    </div>
  )
}

export default Navbar
