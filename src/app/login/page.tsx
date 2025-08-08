//PARA PODER INGRESAR CON UN USUARIO EXISTENTE

import LoginUser from "@/components/LoginUser"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ingresar al portal",
  description: "Inicio de session al portal de bootcamps",
};

const page = () => {

  

  return (
    <div className="bg-teal-600 min-h-screen flex items-center justify-center">
    <LoginUser/>
     </div>
  )
}

export default page