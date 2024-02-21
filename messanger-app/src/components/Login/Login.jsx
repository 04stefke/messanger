import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { auth, db, storage } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'

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
        <button className='btn'>Login with Google</button>
        <button className="btn">Login With Facebook</button>
        <p>Need an account?<Link to='/register'>Register</Link> </p>
      </div>
    </div>
  )
}

export default Login
