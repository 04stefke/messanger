import React, { useContext } from 'react'
import Messages from '../Messages/Messages'
import Input from '../Input/Input'
import { UserContext } from '../../../../context/UserContext'


const Chat = () => {
  const {data} = useContext(UserContext)
  
  return (
    <div className='chatContainer'>
      <div className="chatInfo">
        <span>{data.user.displayName}</span>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat
