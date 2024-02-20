import React, { useContext, useState } from 'react'
import {FileAddOutlined} from '@ant-design/icons'
import { UserContext } from '../../../context/UserContext'
import { AuthContext } from '../../../context/AuthContext'
import { Timestamp, arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { db, storage } from '../../../firebase'
import {v4 as uuid} from 'uuid'
import { ref, uploadBytesResumable } from 'firebase/storage'

const Input = () => {
  const {currentUser} = useContext(AuthContext)
  const {data} = useContext(UserContext)
  const [text, setText] = useState('')
  const [img, setImg] = useState(null)

  const handleSend = async () => {
    if(img){
      const storageRef = ref(storage, uuid())
      const updateFile = uploadBytesResumable(storageRef, img)
      uploadTask.on(
        (error) => {
          console.log(error)
        }, 
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
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
    } else {
      await updateDoc(doc(db, 'chats', data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text, 
          senderId : currentUser.uid,
          data: Timestamp.now()
        })
      })
    }
    setText('')
    setImg(null)
  }
  return (
    <div className='inputContainer'>
      <input type="text" placeholder='Type something...' onChange={(e) => setText(e.target.value)}/>
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
