import React from 'react'
import Link from 'next/link'

export default function DashboardNav() {
    return (
        <>
            <div className="h-20 bg-darkcolor-dc rounded-full">
            </div>
            <nav className="bg-darkcolor-dc h-screen text-white m-4">
                <ul>
                    <li><a href="/ruta1">Ruta 1</a></li>
                    <li><a href="/ruta2">Ruta 2</a></li>
                    {/* Agrega más elementos de la lista aquí para más enlaces del menú */}
                </ul>
            </nav>
        </>




    )
}
