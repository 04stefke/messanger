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
          <img src={message?.senderId === currentUser.uid ? currentUser.photoURL : data.user.photoURL} alt="" />
          
      </div>
      <div ref={ref} className="messageContent">
        <p>{message.text}</p>
        <div className={`lightbox ${lightbox && 'imgLightboxx'}`}>
          {message.img && <img src={message.img} className={`${lightbox && 'imgLightbox'}`} onClick={handleLightbox} alt="" />}
        </div>
        
      </div>
      
    </div>
  )
}

export default Message
