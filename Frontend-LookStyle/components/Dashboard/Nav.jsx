import React from 'react'
import Link from 'next/link'

export default function DashboardNav() {
    return (
        <>
            <div className='bg-secundarycolor-sc h-14 font-medium text-2xl rounded-ss-lg rounded-tr-lg'>
                <h1>Barbershop</h1>
            </div>
            <nav className="bg-darkcolor-dc text-white m-4 h-screen rounded-xl p-1">
                <ul className='flex flex-col gap-4'>
                    <li><Link className='navHover' href="/dashboard"><span className='text-center'>Profile</span></Link></li>
                    <li><Link className='navHover' href="/dashboard/info">Citas</Link></li>
                    <li><Link className='navHover' href="/dashboard/profile">Datos</Link></li>
                    {/* Agrega más elementos de la lista aquí para más enlaces del menú */}
                </ul>
            </nav>

            <div className="h-28 bg-primarycolor-pc rounded-md">
            </div>
        </>




    )
}
