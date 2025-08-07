import { supabaseApi } from "@/api/supabase.api"

export type BootcampData = {
    title: string
    synopsis: string
    description: string
    schedules: string
    teacher:string
    price: number
}

type BootcampResponse = {
    title: string
    synopsis: string
    description: string
    schedules: string
    teacher:string
    price: number
    created_at: string
}

export const createBootcamp = async (data:BootcampData): Promise<BootcampResponse> => {
    
    try{
        const response = await supabaseApi.post('/rest/v1/bootcamps', data,{
            headers:{
                'Prefer': 'return=representation'
            }
        })
        return response.data
    }
    catch(error){
        throw new Error ('Falló el llamado a la API')
    }
}

export const getBootcamp = async(): Promise<BootcampResponse[]> => {
    try{
        const response = await supabaseApi.get('/rest/v1/bootcamps', {
            headers:{
                'Prefer': 'return=representation'
            }
        })
        return response.data
    }
    catch(error){
        throw new Error('Error al obtener los bootcamps')
    }
}