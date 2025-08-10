'use client'

//PARA PODER INGRESAR CON UN USUARIO EXISTENTE

import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import supabase from '@/services/supabaseClient.service'
import { useAuthentication } from "@/stores/useAuthentication";
import Image from 'next/image'
import Link from 'next/link'

type FormData = {
  email: string
  password: string
}

export default function LoginUser() {
  const router = useRouter()
  const [message, setMessage] = useState<string | null>(null)
  const setUser = useAuthentication((state) => state.setUser)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>()

  const onSubmit = async ({ email, password }: FormData) => {
    setMessage(null)

    const { data, error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setMessage(`${error.message}`)
      return
    }

    // Guardar en el Zustand
    setUser(data.user)

    setMessage('✅ Sesion iniciada correctamente.')

    //Regresar a la main page con router
    router.push('/')
  }

  return (
    <div >
      <div className="max-w-md mx-auto mt-16 p-8 bg-gray-100 rounded-lg shadow-lg">

        <div className="flex justify-center mb-6">
          <Image
            src="https://res.cloudinary.com/daoy46bpe/image/upload/v1754263836/monigologo_xib4hu.png"
            alt="App logo"
            width={140}
            height={140}
            priority
          />
        </div>
      
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Iniciar Sesion</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm text-gray-700 mb-1">Correo electronico</label>
            <input
              id="email"
              type="email"
              {...register('email', {
                required: 'Correo requerido',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Correo invalido'
                }
              })}
              placeholder="Escribe tu direccion de correo electronico"
              className="w-full border border-gray-300 rounded px-4 py-2 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm text-gray-700 mb-1">Contraseña</label>
            <input
              id="password"
              type="password"
              {...register('password', {
                required: 'Contraseña requerida',
                minLength: { value: 6, message: 'Minimo 6 caracteres' }
              })}
              placeholder="Contraseña"
              className="w-full border border-gray-300 rounded px-4 py-2 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-700 transition-colors"
          >
            Ingresar
          </button>

          <p className="text-sm text-gray-600 mt-4">
              Aun no tienes una cuenta?{' '}
              <Link href="/signup" className="text-blue-500 hover:underline">
                Click Aqui
              </Link>
            </p>
        </form>

        {message && (
          <p className="mt-6 text-1xl text-center text-green-600">
            {message}
          </p>
        )}
      </div>
     </div>
  )
}