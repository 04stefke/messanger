import { doc, onSnapshot } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { db } from '../../../firebase'
import { AuthContext } from '../../../context/AuthContext'
import { UserContext } from '../../../context/UserContext'
const Chats = () => {
  const [show, setShow] = useState(false)
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
  

  const handleSelect = (user) => {
    dispatch({type: 'CHANGE_USER', payload: user})
  }

  const handleDropdown = () => {
    if(show){
      setShow(false)
    }else{
      setShow(true)
    }
  }

  return (
    <div className='chatsContainer'>
      {Object.entries(chats)?.sort((a, b) => b[1].date - a[1].date).map(chat => ( 
        <div className={`userChat ${show && 'userTrue'}`} key={chat[0]} onClick={() => handleSelect(chat[1].userInfo)}>
          <img src={chat[1].userInfo.photoURL} width={'50px'} alt="" />
          <div className="userChatInfo">
            <span>{chat[1].userInfo.displayName}</span>
            <p>{chat[1].lastMessage?.text}</p>
          </div>
        </div>
        ))}
      <button className="btn dropdownBtn" onClick={handleDropdown}>1</button>
    </div>
  )
}

export default Chats
