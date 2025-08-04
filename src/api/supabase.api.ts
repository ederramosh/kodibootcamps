import axios from 'axios'

export const supabaseApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  headers: {
    "apiKey":process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    'Content-Type': 'application/json'
  }
})