import React from 'react'
import Link from 'next/link'

export default function DashboardNav() {
    return (
        <nav className='bg-darkcolor-dc w-1/5 h-screen text-white fixed'>
            <ul className=' flex flex-col gap-10'>
                <Link href={'/'}>Home</Link>
                <Link href={'/dashboard/info'}>info</Link>
                <Link href={'/dashboard/profile'}>profile</Link>
            </ul>
        </nav>
    )
}
