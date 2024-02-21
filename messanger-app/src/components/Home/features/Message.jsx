import React, { useContext, useEffect, useRef } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import { UserContext } from '../../../context/UserContext'
const Message = ({message}) => {
  const {currentUser} = useContext(AuthContext)
  const {data} = useContext(UserContext)
  console.log(message)
  const ref = useRef()

  useEffect(() => {
    ref.current?.scrollIntoView({behavior: 'smooth'})
  }, [message])
  
  if (!message || Object.keys(message).length === 0) {
    return <div>Loading message...</div>;
  }
  
  return (
    <div className={`message ${message?.senderId === currentUser.uid && 'owner'}`}>
      <div className="messageInfo">
           
          <img src={message?.senderId === currentUser.uid ? currentUser.photoURL : data.user.photoURL} alt="" />
          <span>just now</span>
      </div>
      <div ref={ref} className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img}  alt="" />}
      </div>
      
    </div>
  )
}

export default Message
