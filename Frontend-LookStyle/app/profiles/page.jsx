'use client'
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import { Avatar } from "@nextui-org/react";
import { Spinner } from "@nextui-org/react";

export default function PageUserProfile() {
    const [userInfo, setUserInfo] = useState(null);
    const [userAppointments, setUserAppointments] = useState(null);
    const id = Cookies.get('id');

    useEffect(() => {
        const fetchUserInfoAndAppointments = async () => {
            try {
                const userResponse = axios.get(`https://adso-lookstyle.onrender.com/api/v1/users/${id}`);
                const appointmentsResponse = axios.get(`https://adso-lookstyle.onrender.com/api/v1/appointments`);

                const [user, appointments] = await Promise.all([userResponse, appointmentsResponse]);
                console.log(user.data.data)
                setUserInfo(user.data.data);

                const userAppointments = appointments.data.data.filter(appointment => appointment.UserId === Number(id));

                // Obtén el mes y el año actuales
                const currentMonth = new Date().getMonth() + 1;
                const currentYear = new Date().getFullYear();

                // Filtra las citas por el mes actual
                const recentAppointments = userAppointments.filter(appointment => {
                    const appointmentDate = new Date(appointment.appointment_date);
                    const appointmentMonth = appointmentDate.getMonth() + 1;
                    const appointmentYear = appointmentDate.getFullYear();
                    return appointmentMonth === currentMonth && appointmentYear === currentYear;
                });

                // Dividir las citas en recientes y anteriores
                const pastAppointments = userAppointments.filter(appointment => !recentAppointments.includes(appointment));

                setUserAppointments({ recent: recentAppointments, past: pastAppointments });
            } catch (error) {
                console.error('Error fetching user info and appointments:', error);
            }
        };

        if (id) {
            fetchUserInfoAndAppointments();
        }
    }, [id]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-32">
            {userInfo ? (
                <div key={userInfo.id} className="container m-4">
                    <div className="max-container padding-container w-full mx-auto grid gap-4 grid-cols-1">
                        {/* Perfil Card */}
                        <div className="flex flex-col sticky top-0 z-10">
                            <div className="bg-white border shadow-lg rounded-2xl p-4">
                                <div className="flex-none sm:flex">
                                    <div className=" relative h-32 w-32   sm:mb-0 mb-3">
                                        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" className="w-20 h-20 text-large" />
                                        {/* <Image
                                            src={userInfo.profile_photo}
                                            alt="perfil"
                                            className="w-32 h-32 object-cover rounded-2xl"
                                            width={200}
                                            height={200}
                                        /> */}
                                    </div>
                                    <div className="flex-auto sm:ml-5 justify-evenly">
                                        <div className="flex items-center justify-between sm:mt-2">
                                            <div className="flex items-center">
                                                <div className="flex flex-col">
                                                    <div className="w-full flex-none text-lg text-gray-200 font-bold leading-none">
                                                        {userInfo.name}
                                                    </div>
                                                    <div className="flex-auto text-gray-400 my-1">
                                                        <span className="mr-3 ">{userInfo.email}</span>
                                                        <span className="mr-3 border-r border-gray-600  max-h-0"></span>
                                                        <span>{userInfo.phone_number}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                            {/* Citas agendadas */}
                            <div className="flex flex-col p-4 relative items-center justify-center bg-white border shadow-lg rounded-2xl">
                                Hasta el momento no hay agendamiento
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex items-center justify-center h-screen">
                    <Spinner size="lg" />
                </div>
            )}

            {userAppointments ? (
                <>
                    <h2>Citas de {userInfo.name}</h2>
                    <fieldset className='border-2 border-black'>
                        <legend>Citas recientes</legend>
                        {userAppointments.recent.map((appointment, index) => (
                            <div key={index}>
                                <p>Appointment ID: {appointment.id}</p>
                                <p>State: {appointment.state}</p>
                                <p>Date: {appointment.appointment_date}</p>
                                <p>Hour: {appointment.appointment_hour}</p>
                                {/* ... otras propiedades de la cita */}
                            </div>
                        ))}
                    </fieldset>

                    <h3>Otras citas</h3>
                    {userAppointments.past.map((appointment, index) => (
                        <div key={index}>
                            <p>Appointment ID: {appointment.id}</p>
                            <p>State: {appointment.state}</p>
                            <p>Date: {appointment.appointment_date}</p>
                            <p>Hour: {appointment.appointment_hour}</p>
                            {/* ... otras propiedades de la cita */}
                        </div>
                    ))}
                </>
            ) : (
                <div className="flex items-center justify-center h-screen">
                    <Spinner size="lg" />
                </div>
            )}
        </div>
    );
}
