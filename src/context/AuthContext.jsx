/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react"
import { authService } from "../services/authService"
import { profileService } from "../services/profileService"

export const AuthContext = createContext()

export function AuthProvider({ children }) {

  const [session, setSession] = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)

useEffect(() => {

  const init = async () => {
    const s = await authService.getSession()
    setSession(s)

    if (s?.user) {
      const p = await profileService.getProfile(s.user.id)
      setProfile(p)
    }

    setLoading(false)
  }

  init()

  const { data: listener } = authService.onAuthChange(async (s) => {
    setSession(s)

    if (s?.user) {
      const p = await profileService.getProfile(s.user.id)
      setProfile(p)
    } else {
      setProfile(null)
    }
  })

  return () => listener.subscription.unsubscribe()

}, [])

  return (
    <AuthContext.Provider value={{
      session,
      profile,
      loading
    }}>
      {children}
    </AuthContext.Provider>
  )
}