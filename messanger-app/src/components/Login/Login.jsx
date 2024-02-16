import React from 'react'

const Login = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <h1>My Chat</h1>
        <h3>Login</h3>
        <form>
            <input type="email" placeholder='Enter your email' />
            <input type="password" placeholder='Enter your password' />
            <button className='btn'>Login</button>
        </form>
        <p>Need an account? Register</p>
      </div>
    </div>
  )
}

export default Login
