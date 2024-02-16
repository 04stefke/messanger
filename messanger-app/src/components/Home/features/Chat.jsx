import React from 'react'
import Messages from './Messages'
import Input from './Input'
const Chat = () => {
  return (
    <div className='chatContainer'>
      <div className="chatInfo">
        <span>Stefan</span>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat
