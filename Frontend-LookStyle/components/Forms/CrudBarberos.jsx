"use client"

import { useState, useEffect } from "react";
//import axios from "axios";

function formBarbershop() {

    const [barbershop_name, setBarberName] = useState("");
    const [charge_name, setCharge_name] = useState("");
    const [email, setEmail] = useState("");
    const [phone_number, setPhone] = useState("");
    const [location, setLocation] = useState("");
    const [information, setInfo] = useState("");
    const [social_networks, setRedes] = useState("");
    const [state, setState] = useState("");
    const [posts, setPosts] = useState([]);
    const [cargar, setCargar] = useState(true);

    useEffect(() => {
        const cargarPost = async () => {
            const response = await fetch("http://localhost:3006/api/v1/barbershops/");
            const { data } = await response.json();
            const desestructura = data;
            setPosts(desestructura);
        };
        if (cargar) {
            cargarPost();
            setCargar(false);
        }
    }, [cargar]);

    const agregarBarbershop = async (nombre_barberia, encargado, correo, phone, direccion, info, redes, estado) => {
        let response = await fetch("http://localhost:3006/api/v1/barbershops/  ", {
            method: "POST",
            body: JSON.stringify({
                barbershop_name: nombre_barberia,
                charge_name: encargado,
                email: correo,
                phone_number: phone,
                location: direccion,
                information: info,
                social_networks: redes,
                state: estado,

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
        agregarBarbershop(barbershop_name, charge_name, email, phone_number, location, information, social_networks, state);
    };




    return (
        <div>

            <div className="w-full">
                <nav className="bg-white shadow-lg">
                    <div className="md:flex items-center justify-between py-2 px-8 md:px-12">
                        <div className="flex justify-between items-center">
                            <div className="text-2xl font-bold text-gray-800 md:text-3xl">
                                <a href="#"></a>
                                <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">Look<span className="text-indigo-600">Style</span></h2>
                            </div>
                            <div className="md:hidden">
                                <button type="button" className="block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none">
                                    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                        <path className="hidden" d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z" />
                                        <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="flex-col md:flex-row hidden md:block -mx-2">
                            <a href="#" className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2">Inicio.</a>
                            <a href="#" className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2">Registrame.</a>
                            <a href="#" className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2">Iniciar Sesion.</a>
                        </div>
                    </div>
                </nav>
                <div className="flex bg-white" style={{ height: '600px' }}>
                    <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
                        <div>
                            <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">Informacion Barberia </h2>
                            <p className="mt-2 text-sm text-gray-500 md:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum cupiditate ducimus, fugit harum id necessitatibus odio quam quasi, quibusdam rem tempora voluptates. Cumque debitis dignissimos id quam vel!</p>
                            <div className="flex justify-center lg:justify-start mt-6">
                                <a className="px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800" href="#">Registrar Barbero</a>
                                <a className="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400" href="#">Ver Mas ...</a>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:block lg:w-1/2" style={{ clipPath: 'polygon(10% 0, 100% 0%, 100% 100%, 0 100%)' }}>
                        <div className="h-full object-cover" style={{ backgroundImage: 'url(https://todoservy.com.co/storage/10354/Fabric-Barberias-%F0%9F%A5%87-Mundo-Aventura-%E2%9C%85---f3.webp)' }}>
                            <div className="h-full bg-black opacity-25"></div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default formBarbershop