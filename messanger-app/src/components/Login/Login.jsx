import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { auth, db, storage } from '../../firebase'
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { FacebookOutlined, GoogleOutlined } from '@ant-design/icons'

const Login = () => {
  var navigate = useNavigate ()

  const handleSubmit = async(e) => {
    e.preventDefault()
    const email = e.target[0].value
    const password = e.target[1].value
    
    
    try{
      await signInWithEmailAndPassword(auth, email, password)
      navigate('/')
    }catch(err){
      console.log(err)
    }
    

  }
  const handleGoogle = async(e) => {
    try{
      const provider = new GoogleAuthProvider()
      const res = await signInWithPopup(auth, provider)
      const user = res.user;
      navigate('/')
      console.log(user)
    }catch(error){
      console.log(error)
    };
  }

  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <h1>My Chat</h1>
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder='Enter your email' />
            <input type="password" placeholder='Enter your password' />
            <button className='btn'>Sign in</button>
        </form>
        <button className='btn' onClick={handleGoogle} style={{width: '300px'}}><GoogleOutlined/> Login with Google</button>
        <button className="btn" style={{width: '300px'}}> <FacebookOutlined/> Login With Facebook</button>
        <p>Need an account?<Link to='/register'>Register</Link> </p>
      </div>
    </div>
  )
}

export default Login
