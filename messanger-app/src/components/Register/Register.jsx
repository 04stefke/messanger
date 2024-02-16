import React from 'react'
import {FileAddOutlined} from '@ant-design/icons'
import './Register.scss'
const Register = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <h1>My Chat</h1>
            <h2>Register</h2>
            <form>
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
