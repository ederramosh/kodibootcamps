'use client'
import { createBootcamp, BootcampData } from '@/services/supabase.service';
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify';
import React, { useState } from 'react'

type Inputs = {
    title: string
    synopsis: string
    description: string
    schedules: string
    teacher: string
    price: number
}

export const FormDashboard = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm<Inputs>()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const onSubmit = async (data: Inputs) => {
        try {
            const bootcampData: BootcampData = {
                title: data.title,
                synopsis: data.synopsis,
                description: data.description,
                schedules: data.schedules,
                teacher: data.teacher,
                price: data.price,
            };

            await createBootcamp(bootcampData);
            toast.success('Bootcamp guardado correctamente', {
                position: "top-right",
                autoClose: 3000,
                pauseOnHover: true
            });
            reset();
        } catch (error) {
            toast.error('❌ Hubo un error al guardar el bootcamp');
        } finally {
            setIsSubmitting(false)
        }
    };
    return (
        <div className="bg-white shadow-xl rounded-lg p-8 max-w-3xl mx-auto mt-10">
            <h2 className="text-3xl text-red-500 font-bold text-center text- mb-6">
                Registro de Bootcamps
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Título */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Título</label>
                    <input
                        type="text"
                        {...register('title', {
                            required: 'El nombre es requerido',
                            minLength: { value: 2, message: 'El título es muy corto' },
                            maxLength: { value: 100, message: 'El título es muy largo' },
                            pattern: {
                                value: /^[a-z,A-Z0-9\s]*$/i,
                                message: 'El nombre solo puede tener letras y números',
                            },
                        })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Escribe el título del bootcamp"
                    />
                    {errors.title && (
                        <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>
                    )}
                </div>

                {/* Sinopsis como Textarea */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Sinopsis</label>
                    <textarea
                        {...register('synopsis', { required: 'La sinopsis es requerida' })}
                        rows={3}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                        placeholder="Escribe la sinopsis del bootcamp"
                    />
                    {errors.synopsis && (
                        <p className="text-red-500 text-xs mt-1">{errors.synopsis.message}</p>
                    )}
                </div>

                {/* Descripción */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
                    <textarea
                        {...register('description', { required: 'La descripción es requerida' })}
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                        placeholder="Escribe la descripción del bootcamp"
                    />
                    {errors.description && (
                        <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>
                    )}
                </div>

                {/* Horario */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Horario</label>
                    <input
                        type="text"
                        {...register('schedules', { required: 'El horario es requerido' })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Ej: Lunes a Viernes - 6pm a 9pm"
                    />
                    {errors.schedules && (
                        <p className="text-red-500 text-xs mt-1">{errors.schedules.message}</p>
                    )}
                </div>

                {/* Profesor */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Profesor</label>
                    <input
                        type="text"
                        {...register('teacher', {
                            required: 'El nombre del profesor es requerido',
                            minLength: { value: 2, message: 'El nombre del profesor es muy corto' },
                            maxLength: { value: 100, message: 'El nombre del profesor es muy largo' },
                        })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Escribe el nombre del profesor"
                    />
                    {errors.teacher && (
                        <p className="text-red-500 text-xs mt-1">{errors.teacher.message}</p>
                    )}
                </div>

                {/* Precio */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Precio $</label>
                    <input
                        type="number"
                        {...register('price', { required: 'El precio es requerido' })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Ej: 300"
                    />
                    {errors.price && (
                        <p className="text-red-500 text-xs mt-1">{errors.price.message}</p>
                    )}
                </div>

                {/* Botón */}
                <div className="pt-4">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 rounded-full transition active:scale-95 disabled:opacity-50`}
                    >
                        {isSubmitting ? 'Guardando...' : 'Guardar Bootcamp'}
                    </button>
                </div>
            </form>
        </div>
    )
}