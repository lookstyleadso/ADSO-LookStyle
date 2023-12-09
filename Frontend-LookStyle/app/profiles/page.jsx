'use client'
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

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
        <div>
            {userInfo ? (
                <>
                    <h2>User Profile</h2>
                    <p>ID: {userInfo.id}</p>
                    <p>Nombre: {userInfo.name}</p>
                    <p>Apellido: {userInfo.last_name}</p>
                    <p>Email: {userInfo.email}</p>
                    <p>Numero de Telefono: {userInfo.phone_number}</p>
                    {/* ... otras propiedades del usuario */}
                </>
            ) : (
                <p>Loading user information...</p>
            )}

            {userAppointments ? (
                <>
                    <h2>User Appointments</h2>
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
                    
                    <h3>Past Appointments</h3>
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
                <p>Loading user appointments...</p>
            )}
        </div>
    );
}
