'use client'; 

import { getBootcamp } from "@/services/supabase.service";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { FormDashboard } from "../FormDashboard/FormDashboard";

export const BootCamps = () => {
  const { data, isLoading, error } = useQuery({ queryKey: ['bootcamps'], queryFn: getBootcamp, refetchInterval: 5000 })

  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="flex justify-center px-4">
      <div className="max-w-7xl w-full">

        {/* Botón para abrir el modal */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-4 py-2 rounded-full shadow-lg shadow transition"
          >
            Registrar Bootcamp
          </button>
        </div>

        {/* Título */}
        <h2 className="text-3xl font-bold text-center text-white bg-red-500 py-4 rounded-md shadow mb-8">
          Bootcamps
        </h2>

        {/* Loader o error */}
        {isLoading && <p className="text-center text-gray-500">Cargando bootcamps...</p>}
        {error && <p className="text-center text-red-500">Error al cargar los bootcamps</p>}

        {/* Lista en formato de columna */}
        {data && data.length > 0 ? (
          <div className="flex flex-col gap-6 bg-black p-6 rounded-lg shadow-inner">
            {data.map((bootcamp) => (
              <div
                key={bootcamp.created_at}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-300"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                  {bootcamp.title}
                </h3>
                <p className="text-gray-600 mb-2 text-center">{bootcamp.synopsis}</p>
                <p className="text-sm text-gray-500 mb-2 text-justify">
                  {bootcamp.description}
                </p>
                <p className="text-sm text-gray-500 mb-1">
                  <strong>Horarios:</strong> {bootcamp.schedules}
                </p>
                <p className="text-sm text-gray-500 mb-1">
                  <strong>Profesor:</strong> {bootcamp.teacher}
                </p>
                <p className="text-sm text-gray-700 font-medium">
                  <strong>Precio:</strong> ${bootcamp.price}
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  Publicado el: {new Date(bootcamp.created_at).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-6">No hay bootcamps disponibles</p>
        )}

        {isModalOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-xl max-h-[90vh] overflow-y-auto relative p-6">
              {/* Botón cerrar */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-4 text-gray-600 hover:text-red-600 text-2xl font-bold"
              >
                &times;
              </button>

              {/* Contenido del formulario */}
              <FormDashboard />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}