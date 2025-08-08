'use client'

//PARA CREAR UN NUEVO USUARIO

import { useForm } from 'react-hook-form'
import { useState } from 'react'
import supabase from '@/services/supabaseClient.service'
import Image from 'next/image'



type FormData = {
  email: string
  password: string
  confirmPassword: string
}

export default function CreateNewUser() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors }
  } = useForm<FormData>()

  //PARA comparar PASSWORD USAMOS WATCH
  const password = watch('password')

  const [message, setMessage] = useState<string | null>(null)

  const onSubmit = async (data: FormData) => {
    setMessage(null)

    const { email, password } = data

    // SUPABASE AUTH, MANDAMOS AL USUARIO Y CONTRASEÑA
    const { error } = await supabase.auth.signUp({ email, password })

      
    if (error) {
      const normalized = error.message.toLowerCase()

      if (
        normalized.includes('already registered') ||
        normalized.includes('user already exists') ||
        normalized.includes('duplicate') ||
        normalized.includes('signups not allowed for this email')
      ) {
        setMessage('Este correo ya fue registrado.')
      } else {
        setMessage(`Error inesperado: ${error.message}`)
      }
    } else {
      setMessage(`Usuario registrado. Revisa tu correo: ${email}`)
      reset()
    }
  }

  return (
    <div className="max-w-md mx-auto mt-16 p-8 bg-gray-100 rounded-lg shadow-lg">
      
      
        <div className="flex justify-center mb-6">
          <Image
            src="https://res.cloudinary.com/daoy46bpe/image/upload/v1754265930/monigologolong_bfc5nb.png"
            alt="Logo"
            width={190}
            height={110}
            priority
          />
        </div>

        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Crear Cuenta Nueva
        </h2>
        <p className="text-1xl  text-center text-gray-800 mb-6">
          Para registrar un nuevo usuario ingresa la informacion siguiente:
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        
          <div>
            <label className="block text-sm text-gray-700 mb-1">Correo electronico</label>
            <input
              {...register('email', {
                required: 'Correo requerido',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Correo invalido'
                }
              })}
              placeholder="Escribe tu direccion de correo electronico"
              className="w-full border border-gray-300 px-4 py-2 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

      
          <div>
            <label className="block text-sm text-gray-700 mb-1">Contraseña</label>
            <input
              type="password"
              {...register('password', {
                required: 'Contraseña requerida',
                minLength: { value: 6, message: 'Mínimo 6 caracteres' }
              })}
              placeholder="contraseña"
              className="w-full border border-gray-300 px-4 py-2 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Confirmar contraseña</label>
            <input
              type="password"
              {...register('confirmPassword', {
                required: 'Confirmacion requerida',
                validate: value => value === password || 'Las contraseñas no coinciden'
              })}
              placeholder="confirma tu contraseña"
              className="w-full border border-gray-300 px-4 py-2 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 transition-colors"
          >
            Registrar
          </button>
        </form>

        {message && (
          <p className="mt-6 text-sm text-center text-gray-600">
            {message}
          </p>
        )}
      
    </div>
  )
}