'use client'
import React, { useRef, useEffect } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { useRouter } from 'next/navigation';

export default function Appointment() {
    const router = useRouter();
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [selectedTipoCita, setSelectedTipoCita] = React.useState('');
    const [userInfo, setUserInfo] = React.useState({})

    //Logica necesaria para verificar la disponibilidad de una cita

    const [citas, setCitas] = React.useState([]);
    const [disponibilidad, setDisponibilidad] = React.useState([]);
    const [selectedDay, setSelectedDay] = React.useState('');
    const [selectedHour, setSelectedHour] = React.useState('');
    const [formValues, setFormValues] = React.useState({
        tipoCita: '',
        desc: '',
        selectedDay: '',
        selectedHour: '',
    });

    const handleDayChange = async (day) => {
        setSelectedDay(day);

        try {
            const response = await fetch('https://adso-lookstyle.onrender.com/api/v1/appointments');
            const responseData = await response.json();

            if (!Array.isArray(responseData.data)) {
                console.error('La respuesta de la API no tiene un array de datos:', responseData);
                return;
            }

            const citasDelDia = responseData.data.filter((cita) => {
                const citaFecha = new Date(cita.appointment_date).toISOString().split('T')[0];
                const diaSeleccionado = new Date(day).toISOString().split('T')[0];
                return citaFecha === diaSeleccionado;
            });

            const horasOcupadas = citasDelDia.map((cita) => cita.appointment_hour);
            const horasDisponibles = todasLasHoras.filter((appointment_hour) => !horasOcupadas.includes(appointment_hour));
            setDisponibilidad(horasDisponibles);
        } catch (error) {
            console.error('Error al obtener las citas', error);
        }
    };

    // console.log(disponibilidad);

    const handleHourSelection = (hour) => {
        setSelectedHour(hour);
    };


    const handleAgendarCita = async () => {
        const combinedDateTime = `${selectedDay} ${selectedHour}`;
        console.log('Valores antes de la solicitud POST:', desc, selectedDay, selectedHour, prec, userInfo.id, combinedDateTime);
        try {
            const response = await fetch('https://adso-lookstyle.onrender.com/api/v1/appointments', {
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
                    UserId: userInfo.id
                }),
            });

            if (response.ok) {
                alert(`Cita reservada para el día ${selectedDay} a las ${selectedHour} `);
                const updatedCitasResponse = await fetch('https://adso-lookstyle.onrender.com/api/v1/appointments');
                const updatedCitasData = await updatedCitasResponse.json();
                setCitas(updatedCitasData);
                // window.location.href = '/portalLawyers'
            } else {
                alert('Error al reservar la cita. Inténtalo nuevamente.');
            }
        } catch (error) {
            console.error('Error al reservar la cita', error);
        }
    };

    // Función que envía los values a la constante que almacena los datos en la api.
    const handleSubmit = (e) => {
        e.preventDefault(); // Setea el evento.
        handleAgendarCita(); // Llama a la función para agendar la cita.
    };


    // Array con las posibles horas.
    const todasLasHoras = ['09:00:00', '10:00:00', '11:00:00', '12:00:00', '13:00:00', '14:00:00', '15:00:00', '16:00:00', '17:00:00', '18:00:00', '19:00:00', '20:00:00', '21:00:00'];


    return (
        <>
            <Button onPress={onOpen} className='bg-yellow-400 text-[white]'>Agendar Cita</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement={"center"} size={"2xl"}>
                <ModalContent className='flex'>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex justify-center gap-1 text-center">Hola agenda tu cita!!</ModalHeader>
                            <ModalBody >
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label
                                            htmlFor="password"
                                            className="block text-sm font-medium text-gray-600 mb-2 ml-2">
                                            Selecciona un día:
                                        </label>
                                        <input
                                            type="date"
                                            placeholder="Ingresa la descripción"
                                            className="input-field w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-300 transition-all duration-300"
                                            onChange={(e) => handleDayChange(e.target.value)}
                                        />
                                    </div>


                                    <div className="mb-4">
                                        <label
                                            htmlFor="password"
                                            className="block text-sm font-medium text-gray-600 mb-2 ml-2">
                                            Selecciona una hora disponible:
                                        </label>
                                        <select onChange={(e) => handleHourSelection(e.target.value)} name="TipoCita" id="" placeholder='holaa' className="mt-1 w-full py-2 px-4 rounded-md text-gray-700 font-roboto-slab border border-gray-300">
                                            <option value="" >
                                                Selecciona una hora
                                            </option>
                                            {disponibilidad.map((hora) => (
                                                <option key={hora} value={hora}>
                                                    {hora}
                                                </option>
                                            ))}
                                        </select>
                                    </div>




                                    {/* <div className='mb-4'>
                                        <label htmlFor="precio" className="block text-sm font-medium text-gray-600 mb-2 ml-2">Precio por 60 minutos.</label>
                                        <p className='mt-1 w-[7.5em] py-2 px-4 rounded-md text-green-700 font-roboto-slab bg-green-300  text-center'>COP {prec}</p>
                                    </div> */}
                                    <ModalFooter>
                                        <Button variant="light" type='submit' color='success'>
                                            Agendar cita
                                        </Button>
                                    </ModalFooter>
                                </form>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal >
        </>

    )
}