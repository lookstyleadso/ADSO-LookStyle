import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BtnWhatsapp = () => {
  return (
    <Link href='https://api.whatsapp.com/send?phone=3244484504' target='_blank' className='fixed w-14 h-14 leading-10 sm:right-8 right-4 sm:bottom-8 bottom-4 rounded-full transition ease-in duration-500 transform hover:scale-105'>
        <Image src="/bx-whatsapp-btn.svg" alt="Contacto" width={60} height={60}/>
    </Link>
  )
}

export default BtnWhatsapp