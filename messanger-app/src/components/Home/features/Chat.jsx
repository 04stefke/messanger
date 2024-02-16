import React from 'react'
import Messages from './Messages'
import Input from './Input'
const Chat = () => {
  return (
    <div className='chatContainer'>
        <div className='hamburgerContainer'>
          <input type='checkbox' id='checkbox' className='checkbox'/>
          <div className='hamburger'></div>
        </div>
      <div className="chatInfo">
        <span>Stefan</span>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat
