import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Register } from './components/features/register/Register'
import { Login } from './components/features/login/Login'
import { TopScreen } from './components/pages/topScreen/TopScreen'
import { AuthProvider } from './hooks/useAuthContext'
import { NextScreen } from './components/pages/nextScreen/NextScreen'

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
      easing: 'ease-out-sine',
    })
  })

  return (
    <AuthProvider>
      <div className="min-h-screen">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NextScreen />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  )
}

export default App
