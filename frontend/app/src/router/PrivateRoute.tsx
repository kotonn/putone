import React, { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'

type PrivateRouteProps = {
  children: ReactNode
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const authContext = useAuthContext()
  if (!authContext) {
    throw new Error('PrivateRoute must be used within an AuthProvider')
  }

  const { user } = authContext
  if (!user) {
    return <Navigate to="/" />
  }

  return <>{children}</>
}
