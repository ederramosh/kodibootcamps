'use client'

import { useAuthentication } from '@/stores/useAuthentication'
import { DashPublic } from './DashPublic/DashPublic'
import { BootCamps } from "@/components/Bootcamps/Bootcamps"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
const queryClient = new QueryClient()

export default function Dashboard() {
  const user = useAuthentication((state) => state.user)

  return (
    // Se agrega flex-col y se elimina la clase que centra el contenido
    <div className="bg-black min-h-screen flex flex-col">
      {user ? (
        // Este div ahora toma el espacio restante
        <div className="flex-1 flex flex-col items-center px-4">
          <QueryClientProvider client={queryClient}>
            <BootCamps />
          </QueryClientProvider>
        </div>
      ) : (
        <div>
          <DashPublic />
        </div>
      )}
      {user && (
        <footer className="bg-white text-black py-8 text-center mt-auto w-full">
          <div className="container mx-auto px-4">
            <p>&copy; 2025 Modigobootcamp. Todos los derechos reservados.</p>
          </div>
        </footer>
      )}
    </div>
  )
}