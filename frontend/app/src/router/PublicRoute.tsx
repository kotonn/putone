import React, { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'

interface PublicRouteProps {
  children: ReactNode
}

export const PublicRoute = ({ children }: PublicRouteProps) => {
  const authContext = useAuthContext()
  if (!authContext) {
    throw new Error('PrivateRoute must be used within an AuthProvider')
  }

  const { user } = authContext
  if (!user) {
    return <Navigate to="/login" />
  }

  return <>{children}</>
}
