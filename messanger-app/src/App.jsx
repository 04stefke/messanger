import { useContext } from 'react'
import './App.scss'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import { AuthContext } from './context/AuthContext'
function App() {
const {currentUser} = useContext(AuthContext)
console.log(currentUser);

const ProtectedRoute = ({children}) => {
  if(!currentUser){
    return <Navigate to='/login'/>
  }
  return children
}

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
        </Route>
      </Routes>
      <Register/>
    </BrowserRouter>
  )
}

export default App
