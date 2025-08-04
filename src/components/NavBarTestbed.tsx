'use client'

// SOLO PARA PROVAR MANEJAR INFORMACION DEL ZUSTAND


import { useAuthentication } from '@/stores/useAuthentication'
import { useRouter } from 'next/navigation'


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
    <nav className="flex justify-between items-center p-4 border-b">
      <h1 className="font-bold text-lg">components/NavBarTestbed.tsx</h1>

      {user ? (
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-700"> Hola: {user.email}</span>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Cerrar sesion
          </button>
        </div>
      ) : (
        <div>
          <button
          onClick={() => router.push('/login')}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          Iniciar sesion
        </button>
             <button
          onClick={() => router.push('/signup')}
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
        >
          Nuevo usuario
        </button>
        </div>
        
        
        
      )}
    </nav>
  )
}