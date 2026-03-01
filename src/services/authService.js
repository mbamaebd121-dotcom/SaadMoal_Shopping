import { supabase } from "../supabase"

class AuthService {

  async signUp(email, password) {
    return await supabase.auth.signUp({
      email,
      password
    })
  }

  async signIn(email, password) {
    return await supabase.auth.signInWithPassword({
      email,
      password
    })
  }

  async signOut() {
    return await supabase.auth.signOut()
  }

  async getSession() {
    const { data } = await supabase.auth.getSession()
    return data.session
  }

  onAuthChange(callback) {
    return supabase.auth.onAuthStateChange((_event, session) => {
      callback(session)
    })
  }
}

export const authService = new AuthService()