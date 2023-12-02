'use client'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Cookie from 'js-cookie'
import * as HiIcons from "react-icons/hi";

export default function LoginForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post('https://adso-lookstyle.onrender.com/api/v1/auth/authenticate', {
                email: email,
                password: password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = response.data
            Cookie.set('token', data.token, { sameSite: 'None' })
            router.push('/')
        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {

                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
            console.log(error.config);
        }
    }

    return (
        <div className="flex justify-center items-center h-screen bg-graycolor-gc">
            <div className="w-full md:w-3/4 lg:w-1/2 xl:w-1/3">
                <div className='w-full max-w-md md:max-w-lg xl:max-w-2xl px-6 md:px-8 py-8 rounded-3xl bg-white border-2 border-gray-100'>
                    <div className='flex'>
                    <h1 className='text-3xl md:text-5xl font-semibold text-center mb-4'>Bienvenido a LookStyle</h1>
                    <Link className='text-lg' href={'/'}><HiIcons.HiChevronRight/></Link>

                    </div>
                    <p className='text-sm md:text-lg text-gray-500 text-center mb-6'>Bienvenido, Por favor ingresa tus datos.</p>

                    <form onSubmit={handleSubmit} >
                        <div className='mt-6'>
                            <div className='mb-4'>
                                <label className='text-base md:text-lg font-medium'>Correo electronico</label>
                                <input
                                    className='w-full border-2 border-gray-100 rounded-xl p-3 md:p-4 bg-transparent'
                                    placeholder="Ingresar Correo"
                                    type='email'
                                    value={email} 
                                    onChange={handleChangeEmail}
                                />
                            </div>
                            <div className='mb-4'>
                                <label className='text-base md:text-lg font-medium'>Contraseña</label>
                                <input
                                    className='w-full border-2 border-gray-100 rounded-xl p-3 md:p-4 bg-transparent'
                                    placeholder="Ingresar Contraseña"
                                    type="text"
                                    value={password}
                                    onChange={handleChangePassword}
                                />
                            </div>
                            <div className='mt-6 flex justify-center items-center'>
                                <p className='text-base'>¿No tienes cuenta? Regístrate</p>
                                <button className='ml-2 text-base text-violet-500'>Registrarse</button>
                                
                            </div>
                            <div className='mt-6'>
                                <button type="submit" className='w-full py-3 md:py-4 btn_primary_gradient rounded-xl text-white font-semibold text-lg'>
                                    Iniciar Sesión
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>


    )
}