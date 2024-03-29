import React, { useContext, useEffect, useRef, useState } from 'react'
import { AuthContext } from '../../../../context/AuthContext'
import { UserContext } from '../../../../context/UserContext'
const Message = ({message}) => {
  const [lightbox, setLighbox] = useState(false)
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

  const handleLightbox = () => {
    if(lightbox){
      setLighbox(false)
    } else{
      setLighbox(true)
    }
  }
  
  return (
    <div className={`message ${message?.senderId === currentUser.uid && 'owner'}`}>
      <div className="messageInfo">
          <img src={message?.senderId === currentUser.uid ? currentUser.photoURL : data.user.photoURL} alt="" data-test='message-profile-pic' />
          
      </div>
      <div ref={ref} className="messageContent">
        <p  data-testid='message-container'>{message.text}</p>
        <div className={`lightbox ${lightbox && 'imgLightboxx'}`} data-test='message-img'>
          {message.img && <img src={message.img} className={`${lightbox && 'imgLightbox'}`} onClick={handleLightbox} alt="" data-testid='chat-image'/>}
        </div>
        
      </div>
      
    </div>
  )
}

export default Message
