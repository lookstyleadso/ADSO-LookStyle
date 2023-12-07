"use client"

import Link from "next/link";
import { useState, useEffect } from "react";

//import axios from "axios";

export default function ListBarbers() {


    const [barber_name, setBarberName] = useState("");
    const [phone_number, setPhone] = useState("");
    const [BarbershopId, setBarbershopId] = useState("");


    const [posts, setPosts] = useState([]);
    const [cargar, setCargar] = useState(true);

    useEffect(() => {
        const cargarPost = async () => {
            const response = await fetch("https://adso-lookstyle.onrender.com/api/v1/barbers/");
            const { data } = await response.json();
            const desestructura = data;
            setPosts(desestructura);
        };
        if (cargar) {
            cargarPost();
            setCargar(false);
        }
    }, [cargar]);

    const borrarbarber = async (id) => {
        let response = await fetch(`https://adso-lookstyle.onrender.com/api/v1/barbers/${id}`, {
            method: "DELETE",
        });
        if (response.status === 200) {
            setPosts(posts.filter((post) => post.id !== id));
        } else {
            return;
        }
    };

    /*const agregarBarber = async (barber_name, phone_number, BarbershopId) => {
        let response = await fetch("https://adso-lookstyle.onrender.com/api/v1/barbers/  ", {
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
        agregarBarber(barber_name, phone_number);
    };
*/
    const controladorDelEnvio = (e) => {
        e.preventDefault();
        agregarBarber(barber_name, phone_number,BarbershopId);
    };




    return (



        <div className="container max-w-7xl mx-auto mt-8">
            <div className="text-2xl font-bold text-gray-800 md:text-3xl">
                <a href="#"></a>
                <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">Look<span className="text-indigo-600">Style</span></h2>
            </div>
            <h2 className="text-2xl font-semibold text-center mb-4">Prueba</h2>
          
            <div className="mb-4">

                <div className="flex justify-end">
                    <Link href="/auth/addBarbers" className="px-4 py-2 rounded-md bg-sky-500 text-sky-100 hover:bg-sky-600">Crear Barbero</Link>
                </div>
            </div>
            <div className="flex flex-col">
                <form onSubmit={controladorDelEnvio} >
                    <div className="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                        <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
                            <table className="min-w-full">
                                <thead>
                                    <tr>
                                        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">ID barberos</th>
                                        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">ID Barberias</th>
                                        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">Nombre Completo</th>
                                        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">Numero Personal</th>
                                        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">Created_At</th>
                                        <th className="px-6 py-3 text-sm text-left text-gray-500 border-b border-gray-200 bg-gray-50" colSpan="3">Accion</th>
                                    </tr>
                                </thead>
                                {Array.isArray(posts) ? (
                                    posts.map(post => {
                                        if (1 == post.BarbershopId) {
                                            return (
                                                <tbody key={post.id} className="bg-white">
                                                    <tr>
                                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                            <div className="flex items-center">
                                                                {post.id}
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                            <div className="flex items-center">
                                                                {post.BarbershopId}
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                            <div className="text-sm leading-5 text-gray-900">
                                                                {post.barber_name}
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                            <p>{post.phone_number}</p>
                                                        </td>
                                                        <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                                                            <span>{post.createdAt}</span>
                                                        </td>
                                                        <td className="text-sm font-medium leading-5 text-center whitespace-no-wrap border-b border-gray-200 ">
                                                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                                </svg>
                                                            </a>
                                                        </td>

                                                        <td className="text-sm font-medium leading-5 text-center whitespace-no-wrap border-b border-gray-200 ">
                                                            <button onClick={() => borrarbarber(post.id)} className="text-indigo-600 hover:text-indigo-900">
                                                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
                                                                    <path fill="#f10909" d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
                                                                </svg>
                                                            </button>
                                                        </td>
                                                    </tr>

                                                </tbody>
                                            );
                                        }
                                    })
                                ) : (
                                    <p>No hay datos de usuario disponibles</p>
                                )
                                }
                            </table>
                            <div>

                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>


    )
}

