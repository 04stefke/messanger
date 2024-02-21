import React, { useContext, useState } from 'react'
import {FileAddOutlined} from '@ant-design/icons'
import { UserContext } from '../../../context/UserContext'
import { AuthContext } from '../../../context/AuthContext'
import { Timestamp, arrayUnion, doc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { db, storage } from '../../../firebase'
import {v4 as uuid} from 'uuid'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'

const Input = () => {
  const {currentUser} = useContext(AuthContext)
  const {data} = useContext(UserContext)

  const [text, setText] = useState('')
  const [img, setImg] = useState(null)

  const handleSend = async () => {
    if(img){
      const storageRef = ref(storage, uuid())
      const updateFile = uploadBytesResumable(storageRef, img)
      updateFile.on(
        (error) => {
          console.log(error)
        }, 
        () => {
          getDownloadURL(updateFile.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, 'chats', data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text, 
                senderId : currentUser.uid,
                data: Timestamp.now(),
                img: downloadURL
              })
            })
          });
          
        }
      );
    } else if(text.trim().length > 0) {
      await updateDoc(doc(db, 'chats', data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text, 
          senderId : currentUser.uid,
          data: Timestamp.now()
        })
      })
    }
    await updateDoc(doc(db, 'userChat', currentUser.uid),{
      [data.chatId + '.lastMessage']: {
        text,
      },
      [data.chatId + '.data']: serverTimestamp(),
    })
    await updateDoc(doc(db, 'userChat', data.user.uid),{
      [data.chatId + '.lastMessage']: {
        text,
      },
      [data.chatId + '.data']: serverTimestamp(),
    })
    
    setText('')
    setImg(null)
  }
  return (
    <div className='inputContainer'>
      <input type="text" placeholder='Type something...' onChange={(e) => setText(e.target.value)} value={text} />
      <div className="inputInfo">
        <div>
        <input type="file" id='firstFile' onChange={(e) => setImg(e.target.files[0])}/>
        <label htmlFor="firstFile"><FileAddOutlined /></label>
      </div>

      <div>
      <input type="file" id='secondFile'/>
      <label htmlFor="secondFile"><FileAddOutlined /></label>
      </div>


      
      <button className="btn" onClick={handleSend}>Send</button>
      </div>
      
    </div>
  )
}

export default Input
