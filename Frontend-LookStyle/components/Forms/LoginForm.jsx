'use client'
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function AppLogin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()


    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
        // console.log(email)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
        // console.log(password)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("https://adso-lookstyle.onrender.com/api/v1/auth/authenticate", {
                email: email,
                password: password,
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = response.data
            document.cookie = `token=${data.token}; path=/; SameSite=None; Secure`
            document.cookie = `role=${data.role}; path=/; SameSite=None; Secure`

            // Comprobar el rol
            switch (data.role) {
                case 101:
                    console.log("El usuario es un cliente");
                    router.push('/')
                    // window.location = '/'
                    break;
                case 201:
                    console.log("El usuario es un barbero");
                    router.push('/dashboard')
                    break;
                case 301:
                    console.log("El usuario es un administrador");
                    router.push('/')

                    break;
                default:
                    console.log("Rol desconocido");
            }

        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='Ingresa tu email' value={email} onChange={handleChangeEmail} />
                <input type="text" placeholder='Ingresa tu contraseña' value={password} onChange={handleChangePassword} />
                <button type='submit'>Iniciar sesion</button>
            </form>
            <Link href='/'>Ir a la home</Link>
        </div>
    )
}
