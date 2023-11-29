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

            <div class="bg-blue-200 dark:bg-gray-800 transition-colors duration-300">
                <div class="container mx-auto p-40">
                    <div class="bg-white dark:bg-gray-700 shadow rounded-lg p-6">


                        <div className="flex justify-center mb-6">
                            <span className="inline-block bg-gray-200 rounded-full p-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"
                                    />
                                </svg>
                            </span>
                        </div>
                        <h2 className="text-2xl font-semibold text-center mb-4">Registra tu Barberia</h2>
                        <p className="text-gray-600 text-center mb-6">Ingresa los datos de tu barberia para registrarla.</p>
                        
                        <form onSubmit={controladorDelEnvio}>
                            <div className="mb-4">
                                <label htmlFor="Name" className="block text-gray-700 text-sm font-semibold mb-2"
                                >
                                    Barbershop Name *
                                </label>
                                <input
                                    type="text"
                                    name="barbershop_name"
                                    className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                                    placeholder="Nombre Barberia"

                                    value={barbershop_name}
                                    onChange={(e) => setBarberName(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="charge_name" className="block text-gray-700 text-sm font-semibold mb-2">
                                    Charge Name *
                                </label>
                                <input
                                    type="text"
                                    name="charge_name"
                                    className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"

                                    placeholder="Nombre del encargado"
                                    value={charge_name}
                                    onChange={(e) => setCharge_name(e.target.value)}
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"

                                    placeholder="barber@gmail.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="phone_number" className="block text-gray-700 text-sm font-semibold mb-2">
                                    Phone Number *
                                </label>
                                <input
                                    type="text"
                                    name="phone_number"
                                    className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                                    required
                                    placeholder="Phone Number"
                                    value={phone_number}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>


                            <div className="mb-6">
                                <label htmlFor="location" className="block text-gray-700 text-sm font-semibold mb-2">
                                    Location *
                                </label>
                                <input
                                    type="text"
                                    name="location"
                                    className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                                    required
                                    placeholder="Escribe Direccion"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                />

                            </div>

                            <div className="mb-6">
                                <label htmlFor="information" className="block text-gray-700 text-sm font-semibold mb-2">
                                    Information *
                                </label>
                                <input
                                    type="text"
                                    name="information"
                                    className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                                    required
                                    placeholder="Escribe Informacion Adicional"
                                    value={information}
                                    onChange={(e) => setInfo(e.target.value)}
                                />

                            </div>

                            <div className="mb-6">
                                <label htmlFor="social_networks" className="block text-gray-700 text-sm font-semibold mb-2">
                                social_networks *
                                </label>
                                <input
                                    type="text"
                                    name="social_networks"
                                    className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                                    required
                                    placeholder="Facebook, Instagram, Twiter"
                                    value={social_networks}
                                    onChange={(e) => setRedes(e.target.value)}
                                />

                            </div>

                            <div className="mb-6">
                                <label htmlFor="state" className="block text-gray-700 text-sm font-semibold mb-2">
                                State *
                                </label>
                                <input
                                    type="text"
                                    name="state"
                                    className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                                    required
                                    placeholder="Facebook, Instagram, Twiter"
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                />

                            </div>

                        

                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 "
                            >
                                Registrar Barberia
                            </button>
                            <p className="text-gray-600 text-xs text-center mt-4">
                                Al registrar tu barberia, acepta los terminos y condiciones de Lookstyle.
                                <a href="#" className="text-blue-500 hover:underline">Terms and Conditions</a>.
                            </p>
                        </form>

                        
                       
                        <div>

                        <br/>
                        <br/>

                        <p className="text-gray-600 text-center mb-6">LISTA DE BARBERIAS.</p>
                            {Array.isArray(posts) ? (
                                posts.map(post => {
                                    return (
                                        <div className="card mt-2 p-3" key={post.id}>
                                            <h2 className="card-title">{post.barbershop_name}</h2>
                                            <h2 className="card-title">{post.charge_name}</h2>
                                            <h2 className="card-title">{post.email}</h2>
                                            <h2 className="card-title">{post.phone_number}</h2>
                                            <h2 className="card-title">{post.location}</h2>
                                            <h2 className="card-title">{post.information}</h2>
                                            <h2 className="card-title">{post.social_networks}</h2>
                                            <h2 className="card-title">{post.state}</h2>
                                            
                                            
                                            
                                        </div>

                                    );
                                })
                            ) : (
                                <p>No hay datos de usuario disponibles</p>
                            )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default formBarbershop