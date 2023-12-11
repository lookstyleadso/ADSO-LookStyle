"use client"

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterFormUser() {

  const [role, setRole] = useState(201)
  const [name, setName] = useState("")
  const [last_name, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone_number, setPhoneNumber] = useState("")
  const [save, setSave] = useState(5)
  const router = useRouter();


  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('role', role)
    formData.append('name', name)
    formData.append('last_name', last_name)
    formData.append('email', email)
    formData.append('password', password)
    formData.append('phone_number', phone_number)
    formData.append('save', save)

    try {
      const response = await axios.post('https://adso-lookstyle.onrender.com/api/v1/users', formData, {
        headers: {
          'Accept': 'application/json',           
          'Content-Type': 'application/json'
        }
      })
      router.push("/auth/loginUser");
    } catch (error) {
      console.error('Error to send the form', error)
    }
  }

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <h2 className="font-semibold text-xl text-gray-600">Formulario de Registro</h2>
          <p className="text-gray-500 mb-6">Registrate como usuario</p>

          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <p className="font-medium text-lg">Datos Personales</p>
                {/* <p>Please fill out all the fields.</p> */}
              </div>
              <form onSubmit={handleSubmit}>
                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5  ">
                      <label htmlFor="name">Nombres</label>
                      <input
                        type="text"
                        name="name"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label htmlFor="last_name">Apellidos</label>
                      <input
                        type="text"
                        name="last_name"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={last_name}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Last Name" />
                    </div>

                    <div className="md:col-span-5">
                      <label htmlFor="email">Email/Correo</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}

                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label htmlFor="password">Contraseña</label>
                      <input type="password"
                        name="password"

                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="********" />
                    </div>

                    <div className="md:col-span-3">
                      <label htmlFor="phone_number">Numero de Telefono</label>
                      <input type="text"
                        name="phone_number"
                        // id="phone_number"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={phone_number}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="3000000000" />
                    </div>

                    <div className="md:col-span-5 text-right">
                      <div className="inline-flex items-end">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Enviar</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


