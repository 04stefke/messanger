import { UserOutlined } from '@ant-design/icons'
import React, { useContext, useState } from 'react'
import { collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from 'firebase/firestore'
import { db } from '../../../firebase'
import { AuthContext } from '../../../context/AuthContext'
import { UserContext } from '../../../context/UserContext'
const Search = () => {

  const [username, setUsername] = useState('')
  const [user, setUser] = useState(null)

  const {currentUser} = useContext(AuthContext)
  const {dispatch} = useContext(UserContext)
  const handleSearch = async () => {
    const q = query(collection(db,"users"), where("displayName", "==", username))
    try{
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
      setUser(doc.data())
    })} catch(err){
      console.log(err)
    }
  }

  const handleKey = (e) => {
    e.code === 'Enter' && handleSearch()
  }

  const handleSelect = async (user) => {
    const combineId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;
    try{
      const res = await getDoc(doc(db, "chats", combineId))
      
      if(!res.exists()){
        await setDoc(doc(db, "chats", combineId), {messages: []})         
        await updateDoc(doc(db, "userChat", currentUser.uid), {
          [combineId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL
          },
          [combineId + '.date']: serverTimestamp()
        })
        await updateDoc(doc(db, "userChat", user.uid), {
          [combineId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL
          },
          [combineId + '.date']: serverTimestamp()
        })
      }
      dispatch({type: 'CHANGE_USER', payload: user})
    }catch(err){
      console.log(err)
    }
    setUser(null)
    setUsername('')
  }

  return (
    <div className='searchContainer'>
      <div className="searchForm">
        <input type="text" placeholder="Search chat's" onKeyDown={handleKey} onChange={(e) => setUsername(e.target.value)} value={username}/>
      </div>
      {user && <div className='userChat' onClick={() => handleSelect(user)}>
        <img src={user.photoURL} style={{width:'40px', borderRadius: '50%', objectFit:'cover'}}/>
        <div className="userChatInfo">
          <span>{user.displayName}</span>
        </div>
      </div> }
    </div>
  )
}

export default Search
