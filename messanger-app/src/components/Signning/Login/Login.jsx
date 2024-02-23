import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { auth,} from '../../../firebase'
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { GoogleOutlined } from '@ant-design/icons'

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
        <h1 data-testid='login-title'>My Chat</h1>
        <h3 data-testid='login-h3'>Login</h3>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder='Enter your email' data-testid='login-email-input' />
            <input type="password" placeholder='Enter your password' data-testid='login-password-input' />
            <button className='btn' data-testid='login-btn'>Sign in</button>
        </form>
        <button className='btn' onClick={handleGoogle} style={{width: '300px'}} data-testid='google-login'><GoogleOutlined/> Login with Google</button>
        <p data-testid='register-text'>Need an account?<Link to='/register' data-testid='register-redirect'>Register</Link></p>
      </div>
    </div>
  )
}

export default Login
