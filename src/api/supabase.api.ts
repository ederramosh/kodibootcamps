import axios from 'axios'

export const supabaseApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  headers: {
    "apiKey":process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    'Content-Type': 'application/json'
  }
})

export const getBootcamps = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/bootcamps`,
      {
        headers: {
          apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
          "Content-Type": "application/json",
        },
      }
    )
    return response.data
  } catch (error) {
    console.log(error)
    throw new Error("Ocurrió un error")
  }
}