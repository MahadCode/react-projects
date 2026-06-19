import { useState } from 'react'
import UserContextProvider from './context/UserContext.jsx'
import Login from './components/Login'
import Profile from './components/Profile'
import './App.css'

function App() {

  return (
    <div className='bg-gray-900 flex h-screen flex-col items-center justify-center'>
    <UserContextProvider>
        <Login/>
        <Profile/>
    </UserContextProvider>
    </div>
  )
}

export default App
