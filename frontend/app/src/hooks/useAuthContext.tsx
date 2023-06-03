import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from 'react'
import { auth } from '../utils/firebase'
import { onAuthStateChanged, User } from 'firebase/auth'

type AuthContextProps = {
  user: User | null
}

type AuthProviderProps = {
  children: ReactNode
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined)

export const useAuthContext = () => {
  return useContext(AuthContext)
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  const value = {
    user,
    loading,
  }

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
    })
    return () => {
      unsubscribed()
    }
  }, [])

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
