import React from 'react'
import Api from './Api'
export default function service() {
  return (
    
  <div className='flex bg-firstColor-fC justify-center items-center h-screen'>
    <div className="border-2 border-white rounded-2xl">
      <div className="w-full  ">
       <h1 className='text-center relative bottom-[-6vh] text-3xl font-semibold text-white '>Agendar Cita</h1> 
        <div className=" mx-20 my-28">
          <label className="mb-1 block text-base font-medium text-white">
            Fecha
          </label>
          <input
            type="date"
            name="date"
            id="date"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
          <br/>
          <label className="mb-1 block text-base font-medium text-white">
            Hora
          </label>
          <input
            type="time"
            name="time"
            id="time"
            className=" mb-2 w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
          <br/>
        <Api/>
      </div>
    </div>
    <div className="w-full px-3 ">
      <div className="mb-5">
        
        <div className='grid grid-cols-3 grid-rows-1 gap-4 my-14'>
          <button 
            className="col-start-2 hover:shadow-form rounded-md bg-secondColor-sC py-3 px-20 text-center text-base font-semibold text-white outline-none "
          >
            Submit
          </button>
        </div>
      </div>
    </div>
    </div>
    </div>

  )
}
