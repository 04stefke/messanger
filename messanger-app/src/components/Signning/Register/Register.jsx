import React from 'react'
import { Link, useNavigate  } from 'react-router-dom';
import {FacebookOutlined, FileAddOutlined, GoogleOutlined} from '@ant-design/icons'
import './Register.scss'
import {auth, db, storage} from '../../../firebase'
import {createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, signInWithRedirect} from 'firebase/auth'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 


const Register = () => {
  var navigate = useNavigate ()

  const handleSubmit = async(e) => {
    e.preventDefault()
    const displayName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const file = e.target[3].files[0]
    
    try{
      const res = await createUserWithEmailAndPassword(auth, email, password)
      const storageRef = ref(storage, displayName);
      
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          console.log(error)
        }, 
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL:downloadURL
            })
            await setDoc(doc(db, "users", res.user.uid),{
              uid: res.user.uid,
              displayName, 
              email,
              photoURL: downloadURL
            })
            await setDoc(doc(db, "userChat", res.user.uid), {
              
            })
            navigate("/")
          });
          
        }
      );
    }catch(err){
      console.log(err)
    }
    

  }
  
  const handleGoogle = async(e) => {
    e.preventDefault()
    try{
      const provider = new GoogleAuthProvider()
      const res = await signInWithPopup(auth, provider)
      const user = res.user;
      
      const email = user.email
      const file = user.photoURL
      const displayName = user.displayName

      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          console.log(error)
        }, 
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await setDoc(doc(db, "users", user.uid),{
              uid: user.uid,
              displayName, 
              email,
              photoURL: downloadURL
            })
            await setDoc(doc(db, "userChat", user.uid), {
              
            })
            navigate("/")
          });
          
        }
      );
      console.log(user)
    }catch(error){
      console.log(error)
    };
  }


 
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <h1 data-testid='register-title'>My Chat</h1>
            <h3 data-testid='register-h3'>Register</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Please Enter Your Name'data-testid='register-username' />
                <input type="email" placeholder='Please enter your email' data-testid='register-email'/>
                <input type="password" placeholder='Please enter your password' data-testid='register-password'/>
                <input type="file" id='fileInput' style={{display:'none'}} required data-testid='register-file'/>
                <label htmlFor="fileInput" data-testid='register-file-upload'>
                    <FileAddOutlined />
                    <span >Add an Avatar</span>
                </label>
                <button className="btn" data-testid='register-button'>Sign up</button>
            </form>
            <button 
              className='btn' 
              onClick={handleGoogle} 
              style={{width: '300px'}} 
              data-testid='register-google-signin'> 
                <GoogleOutlined/> Sign in with Google
            </button>
            <p data-testid='register-redirect'>Got an account! <Link to='/login' data-testid='register-redirect-link'>Login</Link> </p>
        </div>
    </div>
  )
}

export default Register
