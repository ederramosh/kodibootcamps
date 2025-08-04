import supabase from '@/services/supabaseClient.service'
import { User } from '@supabase/supabase-js'
import { create } from 'zustand'


type AuthState = {
  user: User | null
  loading: boolean
  setUser: (user: User | null) => void
  fetchUser: () => Promise<void>
  signOut: () => Promise<void>
}

export const useAuthentication = create<AuthState>((set) => ({
  user: null,
  loading: true,

  setUser: (user) => set({ user, loading: false }),

  fetchUser: async () => {
    const { data, error } = await supabase.auth.getUser()
    set({ user: data.user ?? null, loading: false })
  },

  signOut: async () => {
    await supabase.auth.signOut()
    set({ user: null })
  }

}))