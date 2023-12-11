"use client"
import axios from "axios"
import { useState, useEffect } from "react"

export default function Appointment() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://adso-lookstyle.onrender.com/api/v1/barbershops/14');
                console.log(response.data.data);
                setData(response.data.data);
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };

        fetchData();
    }, []);

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
