"use client"
import React, { useState, useEffect } from 'react';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
} from '@nextui-org/react';
import { useRouter } from 'next/navigation';

export default function Appointment() {
    const router = useRouter();
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [selectedTipoCita, setSelectedTipoCita] = useState('');
    const [userInfo, setUserInfo] = useState({});
    const [citas, setCitas] = useState([]);
    const [disponibilidad, setDisponibilidad] = useState([]);
    const [selectedDay, setSelectedDay] = useState('');
    const [selectedHour, setSelectedHour] = useState('');


    const handleDayChange = async (day) => {
        setSelectedDay(day);

        try {
            const response = await fetch(
                'https://adso-lookstyle.onrender.com/api/v1/appointments'
            );
            const responseData = await response.json();

            if (!Array.isArray(responseData.data)) {
                console.error('La respuesta de la API no tiene un array de datos:', responseData);
                return;
            }

            const citasDelDia = responseData.data.filter((cita) => {
                const citaFecha = new Date(cita.appointment_date)
                    .toISOString()
                    .split('T')[0];
                const diaSeleccionado = new Date(day).toISOString().split('T')[0];
                return citaFecha === diaSeleccionado;
            });

            const horasOcupadas = citasDelDia.map((cita) => cita.appointment_hour);
            const horasDisponibles = todasLasHoras.filter(
                (appointment_hour) => !horasOcupadas.includes(appointment_hour)
            );
            setDisponibilidad(horasDisponibles);
        } catch (error) {
            console.error('Error al obtener las citas', error);
        }
    };

    const handleHourSelection = (hour) => {
        setSelectedHour(hour);
    };

    const handleAgendarCita = async () => {
        const combinedDateTime = `${selectedDay} ${selectedHour}`;
        console.log(
            'Valores antes de la solicitud POST:',
            desc,
            selectedDay,
            selectedHour,
            prec,
            userInfo.id,
            combinedDateTime
        );
        try {
            const response = await fetch(
                'https://adso-lookstyle.onrender.com/api/v1/appointments',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        TipoCita: selectedTipoCita,
                        Descripcion: desc,
                        FechaCita: combinedDateTime,
                        HoraCita: selectedHour,
                        ValorCita: prec,
                        UserId: userInfo.id,
                    }),
                }
            );

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            alert(`Cita reservada para el día ${selectedDay} a las ${selectedHour} `);
            setCitas(data);
            // window.location.href = '/barbershops'
        } catch (error) {
            console.error('Error al reservar la cita', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAgendarCita();
    };
    const todasLasHoras = [
        '07:00:00',
        '07:40:00',
        '08:20:00',
        '09:00:00',
        '09:40:00',
        '10:20:00',
        '11:00:00',
        '11:40:00',
        '12:20:00',
        '13:00:00',
        '13:40:00',
        '14:20:00',
        '15:00:00',
        '15:40:00',
        '16:20:00',
        '17:00:00',
        '17:40:00',
        '18:20:00',
        '19:00:00',
        '19:40:00',
        '20:20:00',
    ];

    return (
        <>
            <Button onPress={onOpen} className='bg-primarycolor-pc text-white'>
                Agendar
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement={'center'} size={'2xl'}>
                <ModalContent className='flex'>
                    {(onClose) => (
                        <>
                            <ModalHeader className='flex justify-center gap-1 text-center'>
                                Agendamiento
                            </ModalHeader>
                            <ModalBody>
                                <form onSubmit={handleSubmit}>
                                    <div className='mb-4'>
                                        <label
                                            htmlFor='password'
                                            className='block text-sm font-medium text-gray-600 mb-2 ml-2'>
                                            Seleccione un día:
                                        </label>
                                        <input
                                            type='date'
                                            placeholder='Ingresa la descripción'
                                            className='input-field w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-300 transition-all duration-300'
                                            onChange={(e) => handleDayChange(e.target.value)}
                                        />
                                    </div>

                                    <div className='mb-4'>
                                        <label
                                            htmlFor='password'
                                            className='block text-sm font-medium text-gray-600 mb-2 ml-2'>
                                            Horas disponibles:
                                        </label>
                                        <select
                                            onChange={(e) => handleHourSelection(e.target.value)}
                                            name='TipoCita'
                                            id=''
                                            placeholder='holaa'
                                            className='mt-1 w-full py-2 px-4 rounded-md text-gray-700 font-roboto-slab border border-gray-300'>
                                            <option value=''>Selecciona una hora</option>
                                            {disponibilidad.map((hora) => (
                                                <option key={hora} value={hora}>
                                                    {hora}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <ModalFooter>
                                        <Button variant='light' type='submit' color='primary'>
                                            Agendar
                                        </Button>
                                    </ModalFooter>
                                </form>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}