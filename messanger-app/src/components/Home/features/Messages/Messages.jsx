import React, { useContext, useEffect, useState } from 'react'
import Message from '../Message/Message'
import { UserContext } from '../../../../context/UserContext'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../../../../firebase'

const Messages = () => {
  const {data} = useContext(UserContext)
  const [messages, setMessages] = useState([])
  useEffect(() => {
    const unsub = onSnapshot(doc(db, 'chats', data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages)
    })

    return () => {
      unsub()
    }
  },[data.chatId])
  
  return (
    <div className='messagesContainer'>
      {messages.map(message => (
        <Message message={message} key={message.id}/>
      ))}
      
    </div>
  )
}

export default Messages
