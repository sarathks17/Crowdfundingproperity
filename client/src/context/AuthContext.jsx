// context/AuthContext.jsx
import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userRole, setUserRole] = useState(null)
  const [token, setToken] = useState(null)

  const login = (username, password, role) => {
    if (username === 'asifazad123' && password === 'Ahlam313@') {
      setIsLoggedIn(true)
      setUserRole(role)
      setToken(`1.${role}`)
      return true
    }
    return false
  }

  const adminLogin = (username, password) => {
    if (username === 'asifazad123' && password === 'Ahlam313@') {
      setIsLoggedIn(true)
      setUserRole('admin')
      setToken('1.admin')
      return true
    }
    return false
  }

  const logout = () => {
    setIsLoggedIn(false)
    setUserRole(null)
    setToken(null)
  }

  const value = {
    isLoggedIn,
    userRole,
    token,
    login,
    adminLogin,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}