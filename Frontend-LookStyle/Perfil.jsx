import React from 'react'
import "tailwindcss/tailwind.css";
import Image from 'next/image';
const Perfil = () => {
  return (
    

    <div class="w-full max-w-sm bg-white rounded-lg shadow dark:bg-white dark:shadow-lg dark:border-gray-700 mx-auto">

    <div class="flex flex-col items-center pb-10 pt-10">
        <h5 class="text-xl font-medium text-gray-900 dark:text-black pb-5">Account Preferences</h5>
        <Image src="/User.jpg" width={"500"} height={"500"} className='w-24 h-24 mb-3 rounded-full shadow-lg'/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-black">Bonnie Green</h5>
    </div>
    {/* ------------------------------------------------------------------------------------------------ */}
    <form class="space-y-6" action="#">
      
        <div class="mb-1 p-1">
            <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900 pl-3">Nombre</label>
            <input type="text" name="nombre" id="nombre" class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black"  required/>
        </div>
        <div class="mb-1 p-1 ">
            <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900 pl-3">Apellido</label>
            <input type="text" name="apellido" id="apellido" class="w-full  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" required/>
        </div>
        <div class="mb-1 p-1">
            <label for="number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900 pl-3">Telefono</label>
            <input type="number" name="telefono" id="telefono" class="w-full  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" required/>
        </div>
        <div class="mb-1 p-1">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900 pl-3">Correo</label>
            <input type="email" name="correo" id="correo" class="w-full  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5  dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" required/>
        </div>

        <div class="flex flex-row gap-3 pb-5">
            <button type="submit" class="w-full text-blue-500 bg-white border  hover:bg-blue-700 hover:text-white  border-blue-600  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-white dark:text-blue-600  dark:border dark:border-blue-600  ">Cancel</button>
            <button type="submit" class="w-full text-white bg-blue-700  hover:bg-white hover:text-blue-700 hover:border hover:border-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
        </div>
       
    </form>
</div>



  )
}

export default Perfil