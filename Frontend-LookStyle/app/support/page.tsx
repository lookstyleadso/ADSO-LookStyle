import React from 'react'
import Support from './Support'
<<<<<<< HEAD
const page = () => {
  return (
    <div>
      <Support/>
    </div>
  )
}

export default page
=======
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <>
      <NavBar />
      <Support />
      <Footer />
    </>
  )
}

export default page
>>>>>>> feature/FRONT004
