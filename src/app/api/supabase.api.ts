import axios from "axios";

// Añade 'export' aquí para que pueda ser importado en otros archivos
export const supabaseApi = axios.create({
    baseURL:process.env.NEXT_PUBLIC_SUPABASE_URL,
    headers: {
        "Content-Type": "application/json",
        "apiKey":process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
        
    }
})