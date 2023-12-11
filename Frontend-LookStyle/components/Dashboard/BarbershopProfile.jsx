'use client'
import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Cookie from 'js-cookie'
import { Spinner } from '@nextui-org/react'

export default function BarbershopProfile() {
    const [barbershopInfo, setBarbershopInfo] = useState(null)
    const [barbershopAppointment, setBarbershopAppointment] = useState(null)
    const id = Cookie.get('id')
    console.log(id)


    useEffect(() => {
        const fetchBarbershopAndAppointment = async () => {
            try {
                const resBarbershop = axios.get(`https://adso-lookstyle.onrender.com/api/v1/barbershops/${id}`)
                const resAppointment = axios.get(`https://adso-lookstyle.onrender.com/api/v1/appointments`)

                // console.log(resAppointment.data)
                const [barbershop, appointment] = await Promise.all([resBarbershop, resAppointment])
                console.log(barbershop.data.data)
                console.log(appointment.data.data)
                setBarbershopInfo(barbershop.data.data)

                const barbershopAppointments = appointment.data.data.filter(appointment => appointment.BarbershopId === Number(id))

                // Obtén el mes y el año actuales
                const currentMonth = new Date().getMonth() + 1;
                const currentYear = new Date().getFullYear();

                // Filtra las citas por el mes actual
                const recentAppointments = barbershopAppointments.filter(appointment => {
                    const appointmentDate = new Date(appointment.appointment_date);
                    const appointmentMonth = appointmentDate.getMonth() + 1;
                    const appointmentYear = appointmentDate.getFullYear();
                    return appointmentMonth === currentMonth && appointmentYear === currentYear;
                });

                // Dividir las citas en recientes y anteriores
                const pastAppointments = barbershopAppointments.filter(appointment => !recentAppointments.includes(appointment));

                setBarbershopAppointment({ recent: recentAppointments, past: pastAppointments });
            } catch (error) {
                console.error('Error fetching barbershop info:', error)
            }
        }
        if (id) {
            fetchBarbershopAndAppointment()
        }
    }, [id])
    return (
        <div >
            {barbershopInfo ? (
                <>

                    

                    <h1>{barbershopInfo.barbershop_name}</h1>
                    <h1>{barbershopInfo.charge_name}</h1>
                    <h1>{barbershopInfo.phone_number}</h1>
                    <h1>{barbershopInfo.email}</h1>
                    <h1>{barbershopInfo.information}</h1>
                    
                    
                </>
            ) : (
                <div className="flex items-center justify-center h-screen">
                    <Spinner size="lg" />
                </div>
            )}

            {barbershopAppointment ? (
                <>
                    <fieldset className='border-2 border-black'>
                        <legend>Citas recientes</legend>
                        {
                            barbershopAppointment.recent.map((appointment, index) => (
                                <div key={index}>
                                    <p>{appointment.appointment_date}</p>
                                </div>
                            ))
                        }
                    </fieldset>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}
