import React, { useContext } from 'react'
import {UserOutlined} from '@ant-design/icons'
import {auth} from '../../../../firebase'
import {signOut} from 'firebase/auth'
import {AuthContext} from '../../../../context/AuthContext'
const Navbar = () => {
  const {currentUser} = useContext(AuthContext)
  return (
    <div className='navbarContainer'>
      <span>Stefan's Chat</span>
      <div className="user">
        <img src={currentUser.photoURL} style={{width: '40px', borderRadius: '50%', objectFit:'cover'}}/> 
        <span className='userName'>{currentUser.displayName}</span>
        <button className='btn' onClick={() => signOut(auth)} data-testid='logout-btn'>Logout</button>
      </div> 

        
    </div>
  )
}

export default Navbar
