import React from 'react'
import Sidebar from './features/Sidebar/Sidebar'
import Chat from './features/Chat/Chat'
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
