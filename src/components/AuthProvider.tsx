'use client'

import { useEffect } from 'react'
import  supabase  from '@/services/supabaseClient.service'
import { useAuthentication } from '@/stores/useAuthentication'

///PARA QUE ZUSTAND MANEJE LAS SESSIONES
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const setUser = useAuthentication((state) => state.setUser)

  useEffect(() => {
    // Cuando carga al inicio
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user ?? null)
    })

    // on event updates
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => {
      listener.subscription.unsubscribe()
    }
  }, [setUser])

  return <>{children}</>
}
