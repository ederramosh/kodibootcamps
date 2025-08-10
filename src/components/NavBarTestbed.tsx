'use client'

// SOLO PARA PROVAR MANEJAR INFORMACION DEL ZUSTAND


import { useAuthentication } from '@/stores/useAuthentication'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'


export default function NavBarTestbed() {

  //Aqui agarramos la informacion 
  const user = useAuthentication((state) => state.user)

  const signOut = useAuthentication((state) => state.signOut)
  const router = useRouter()

  const handleLogout = async () => {
    await signOut()
    router.push('/login')
  }

  return (
    // Se asume que el estilo de fondo ya está definido en globals.css o en un div contenedor
    <nav className="flex justify-between items-center p-4">
      
      <Link href="/">
        {/* Aquí se reemplaza el texto por la imagen del logo */}
        <Image
          src="https://res.cloudinary.com/dtkwzn78d/image/upload/v1754458461/Modigo_na3fk2.png"
          alt="Modigo Bootcamp Logo"
          width={150} // Ajusta el tamaño para que se vea bien en el navbar
          height={40}
          priority
        />
      </Link>
      
      {user ? (
        <div className="flex items-center gap-4">
          <span className="text-sm text-black"> Hola: {user.email}</span>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-3 py-1 rounded-full shadow-lg hover:bg-red-600"
          >
            Cerrar sesión
          </button>
        </div>
      ) : (
        <div className="flex gap-2">
          <button
            onClick={() => router.push('/login')}
            className="bg-red-500 text-white px-3 py-1 rounded-full shadow-lg hover:bg-red-600"
          >
            Iniciar sesión
          </button>
          <button
            onClick={() => router.push('/signup')}
            className="bg-teal-600 text-white px-3 py-1 rounded-full shadow-lg hover:bg-teal-700"
          >
            Nuevo usuario
          </button>
        </div>
      )}
    </nav>
  )
}