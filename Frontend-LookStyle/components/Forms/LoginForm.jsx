'use client'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Cookie from 'js-cookie'
import Image from 'next/image'
import Button from '../Button'

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
        <div className="flex flex-col justify-center items-center h-screen bg-white">
            <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
                <div className="flex items-center justify-center w-full lg:p-12">
                    <div className="flex items-center xl:p-10">
                        <form onSubmit={handleSubmit} className="flex flex-col w-full h-full py-6 px-14 text-center bg-white shadow-xl border rounded-2xl">
                            <h3 className="mb-3 text-4xl font-extrabold text-dark-grey-900">¡Bienvenido de nuevo!</h3>
                            <p className="mb-4 text-grey-700">Ingresa a LookStyle con tus credenciales</p>
                            <Link href="/" className="flex items-center justify-center w-full border py-1 mb-6 text-sm font-medium transition duration-300 rounded-2xl text-grey-900 bg-grey-300 hover:bg-grey-400 focus:ring-4 focus:ring-grey-300">
                                <Image className="h-8 mr-2" src="/logogoogle.svg" alt="Google" width={50} height={50} />
                            </Link>
                            <div className="flex items-center mb-3">
                                <hr className="h-0 border-b border-solid border-grey-500 grow" />
                                <p className="mx-4 text-grey-600">o</p>
                                <hr className="h-0 border-b border-solid border-grey-500 grow" />
                            </div>
                            <label for="email" className="mb-2 text-sm text-start text-grey-900">Correo</label>
                            <input type="email" value={email} onChange={handleChangeEmail} placeholder="peopleemail@gmail.com" className="flex items-center w-full px-5 py-3 mr-2 text-sm font-medium border outline-1 outline-primarycolor-pc focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl" />
                            <label for="password" className="mb-2 text-sm text-start text-grey-900">Contraseña</label>
                            <input type="password" value={password} onChange={handleChangePassword} placeholder="*************" className="flex items-center w-full px-5 py-3 mb-5 mr-2 text-sm font-medium border outline-1 outline-primarycolor-pc focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl" />
                            <div className="flex flex-row justify-between mb-8">
                                <label className="relative inline-flex items-center mr-3 cursor-pointer select-none">
                                    <input class="dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 cursor-pointer w-3 h-3" type="checkbox" />
                                    <span className="ml-3 text-sm font-normal text-grey-900">Recordarme</span>
                                </label>

                                <Link href="/" className="mr-4 text-sm font-medium text-purple-blue-500">¿Olvidó la contraseña?</Link>
                            </div>
                            <Button
                                type="submit"
                                title="Iniciar Sesion"
                                variant="btn_primary_gradient"
                            />
                            <p className="text-sm leading-relaxed text-grey-900 mt-10">¿No tienes cuenta? <Link href="/auth/register" className="font-bold text-grey-700 hover:underline">Registrarme</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}