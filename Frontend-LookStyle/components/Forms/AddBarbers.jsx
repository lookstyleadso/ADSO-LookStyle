"use client"

import Link from "next/link";
import { useState, useEffect } from "react";

export default function ListBarbers() {
    const [posts, setPosts] = useState([]);
    const [cargar, setCargar] = useState(true);
    const [phone_number, setPhone] = useState("");
    const [barber_name, setName] = useState("");
    const [BarbershopId, setBarbershopId] = useState("");






    useEffect(() => {
        const cargarPost = async () => {
            const response = await fetch("http://localhost:3006/api/v1/barbers/");
            const { data } = await response.json();
            const desestructura = data;
            setPosts(desestructura);
        };
        if (cargar) {
            cargarPost();
            setCargar(false);
        }
    }, [cargar]);

    const agregarBarber = async (barber_name, phone_number, BarbershopId) => {
        let response = await fetch("http://localhost:3006/api/v1/barbers/  ", {
            method: "POST",
            body: JSON.stringify({
                barber_name: barber_name,
                phone_number: phone_number,
                BarbershopId: BarbershopId,


            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
        let data = await response.json();
        setPosts((posts) => [data, ...posts]);
    };

    const controladorDelEnvio = (e) => {
        e.preventDefault();
        agregarBarber(barber_name, phone_number, BarbershopId);
        alert('Registro exitoso');
    };

    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Agrega Barberos</h2>
                    <form onSubmit={controladorDelEnvio}>
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div className="sm:col-span-2">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre Completo</label>
                                <input type="text" name="barber_name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Ingresa Nombre Del Barbero" value={barber_name}
                                    onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="w-full">
                                <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telefono</label>
                                <input type="text" name="phone_number" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Ingrese Telefono Barbero" value={phone_number}
                                    onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            <div className="w-full">
                                <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Id Barberia</label>
                                <input  type="text" name="BarbershopId" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Ingresa Id de la barberia" value={BarbershopId}
                                    onChange={(e) => setBarbershopId(e.target.value)} />
                                    {/* value={posts.barbershop_name} */}
                            </div>
                            {/* <div>
                                <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Barberias</label>
                                <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    <option selected="">Selecciona Barberia</option>
                                    <option value="TV">TV/Monitors</option>
                                    <option value="PC">PC</option>
                                    <option value="GA">Gaming/Console</option>
                                    <option value="PH">Phones</option>
                                </select>
                            </div> */}

                            {/* <div className="sm:col-span-2">
                                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                <textarea id="description" rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Agrega Informacion Del Barbero"></textarea>
                            </div> */}
                        </div>
                        <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                            Agregar barbero
                        </button>
                    </form>
                </div>
            </section>
            <div className="flex justify-end">
                    <Link href="/auth/listBarbers" className="px-4 py-2 rounded-md bg-sky-500 text-sky-100 hover:bg-sky-600">Regresar</Link>
                </div>
        </div>
    );
}