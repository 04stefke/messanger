import { UserOutlined } from '@ant-design/icons'
import { doc, onSnapshot } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { db } from '../../../firebase'
import { AuthContext } from '../../../context/AuthContext'
import { UserContext } from '../../../context/UserContext'
const Chats = () => {
  const [chats, setChats] = useState([])
  const {currentUser} = useContext(AuthContext)
  const {dispatch} = useContext(UserContext)
  useEffect(() => {
    const getChats =() => {
      const unsub = onSnapshot(doc(db, "userChat", currentUser.uid), (doc) => {
        setChats(doc.data())
      })
      return() => {
        unsub()
      }
      
    }
    currentUser.uid && getChats()
  },[currentUser.uid])
  console.log(Object.entries(chats))
  return (
    <div className='chatsContainer'>
      {Object.entries(chats)?.map(chat => ( 
        <div className='userChat' key={chat[0]}>
          <img src={chat[1].userInfo.photoURL} width={'50px'} alt="" />
          <div className="userChatInfo">
            <span>{chat[1].userInfo.displayName}</span>
            <p>{chat[1].userInfo.lastMessage?.text}</p>
          </div>
        </div>
        ))}
      
    </div>
  )
}

export default Chats
