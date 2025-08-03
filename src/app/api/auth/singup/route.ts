import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables')
}

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function POST(request: Request) {
    const body = await request.json()
    const { email, password } = body

    if(!email || !password) {
        return NextResponse.json(
            { error: 'Missing email or password' }, 
            { status: 400 }
        )
    }

    const { data, error } = await supabase.auth.signUp({ email, password })

    if( error ) {
        return NextResponse.json(
            { error: error.message }, 
            { status: 400 }
        )
    }
    return NextResponse.json({user: data.user}, { status: 200 })

}