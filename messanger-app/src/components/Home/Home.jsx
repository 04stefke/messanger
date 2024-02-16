import React from 'react'
import Navbar from './features/Navbar'
import Sidebar from './features/Sidebar'
import Chat from './features/Chat'
import './Home.scss'
const Home = () => {
  return (
    <div className='homeContainer'>
        <div className="homeWrapper">
            <Sidebar/>
            <Chat/>
        </div>
    </div>
  )
}

export default Home
