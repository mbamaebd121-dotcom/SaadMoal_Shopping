import { supabase } from "../supabase"

class ProfileService {

  async createProfile(userId, name) {
    return await supabase
      .from("profiles")
      .insert([{ id: userId, name }])
  }

  async getProfile(userId) {
    const { data } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .single()

    return data
  }
}

export const profileService = new ProfileService()