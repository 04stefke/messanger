import React from 'react'
import {FileAddOutlined} from '@ant-design/icons'
import './Register.scss'
import {auth} from '../../firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth'

const Register = () => {

  const handleSubmit = async(e) => {
    e.preventDefault()
    const displayName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const file = e.target[3].files[0]
    
    try{
      const res = await createUserWithEmailAndPassword(auth, email, password)
        
    }catch(err){
      console.log(err)
    }
    

  }
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <h1>My Chat</h1>
            <h3>Register</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Please Enter Your Name' />
                <input type="email" placeholder='Please enter your email' />
                <input type="password" placeholder='Please enter your password' />
                <input type="file" id='fileInput' style={{display:'none'}}/>
                <label htmlFor="fileInput">
                    <FileAddOutlined />
                    <span>Add an Avatar</span>
                </label>
                <button className="btn">Sign up</button>
            </form>
            <p>Got an account! Login</p>
        </div>
    </div>
  )
}

export default Register
