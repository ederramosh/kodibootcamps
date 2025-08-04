//PARA CREAR UN NUEVO USUARIO

import CreateNewUser from '@/components/SignUp'
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nuevo Usuario",
  description: "Crear un nuevo usuario dentro de el portal de bootcamps",
}

const page = () => {
  return (
    <CreateNewUser/>
  )
}

export default page