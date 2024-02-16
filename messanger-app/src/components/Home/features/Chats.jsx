import { UserOutlined } from '@ant-design/icons'
import React from 'react'

const Chats = () => {
  return (
    <div className='chatsContainer'>
      <div className='userChat'>
        <UserOutlined/>
        <div className="userChatInfo">
          <span>Stefan</span>
          <p>this is message</p>
        </div>
      </div>
    </div>
  )
}

export default Chats
