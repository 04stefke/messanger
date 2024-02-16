import React from 'react'
import {UserOutlined} from '@ant-design/icons'
const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <UserOutlined/>
        
      </div>
      <div className="messageContent">
        <p>Hello, this is a message</p>
        
        <img src="https://cdn-img1.imgworlds.com/assets/a8f48ba2-9603-4e2b-ac2d-60ce06efa566.jpg?key=home-gallery" alt="" />
        <span>just now</span>
      </div>
      
    </div>
  )
}

export default Message
