"use client"

import { useState, useEffect } from "react";
//import axios from "axios";

function FormBarbershop() {

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



        <div className="container max-w-7xl mx-auto mt-8">
            <div className="text-2xl font-bold text-gray-800 md:text-3xl">
                <a href="#"></a>
                <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">Look<span className="text-indigo-600">Style</span></h2>
            </div>
            <div className="mb-4">
                
                <div className="flex justify-end">
                    <button className="px-4 py-2 rounded-md bg-sky-500 text-sky-100 hover:bg-sky-600">Create Post</button>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                    <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
                        <table className="min-w-full">
                            <thead>
                                <tr>
                                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">ID</th>
                                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">Title</th>
                                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">Description</th>
                                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">Created_At</th>
                                    <th className="px-6 py-3 text-sm text-left text-gray-500 border-b border-gray-200 bg-gray-50" colSpan="3">Action</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                <tr>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                        <div className="flex items-center">
                                            1
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                        <div className="text-sm leading-5 text-gray-900">Create CURD with tailwind v3
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                                    </td>
                                    <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                                        <span>12/12/22</span>
                                    </td>
                                    <td className="text-sm font-medium leading-5 text-center whitespace-no-wrap border-b border-gray-200 ">
                                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                            </svg>
                                        </a>
                                    </td>
                                    {/* ... */}
                                </tr>
                                {/* ... Más filas de la tabla ... */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>


    )
}


export default FormBarbershop