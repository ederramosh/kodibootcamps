'use client'


import { useAuthentication } from '@/stores/useAuthentication'
//import { DashPrivate } from './DashPrivate/DashPrivate'
import { DashPublic } from './DashPublic/DashPublic'
//import { FormDashboard } from './FormDashboard/FormDashboard'
import { BootCamps } from "@/components/Bootcamps/Bootcamps"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
const queryClient = new QueryClient()



export default function Dashboard() {

  //Aqui agarramos la informacion 
  const user = useAuthentication((state) => state.user)

  /* const signOut = useAuthentication((state) => state.signOut)
  const router = useRouter() */

  return (
    <>
      {user ? (
        <div className="flex justify-center px-4">
          <QueryClientProvider client={queryClient}>
            <BootCamps />
          </QueryClientProvider>
        </div>
      ) : (
        <div>
          <DashPublic />
        </div>
      )}
    </>
  )
}