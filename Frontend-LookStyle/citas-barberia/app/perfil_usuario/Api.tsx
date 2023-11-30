'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { type } from 'os';

type ServiceProps = {
    id: number;
    name: string;
    last_name: string;
    email:string;
    phone_number: number;
}

export default function Api() {
    const [user, setuser] = useState<ServiceProps[]>([]);
    useEffect(() => {
        axios.get('https://adso-lookstyle.onrender.com/api/v1/users/1')
            .then(response =>  setuser(response.data.data))
            .catch(error => {
                console.error('Error fetching data: ', error);
                if (error.response) {
                    console.error('Response status: ', error.response.status);
                    console.error('Response data: ', error.response.data);
                }
            });
    }, []);

    return (
        <div>
       <form className="flex flex-col gap-6">
          <div className="flex gap-6">
            <div className="w-full">
              <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-firstColor-fC ">
                Nombre
              </label>
              <input
                type="text"
                id="first_name"
                className=" bg-transparent border border-firstColor-fC text-firstColor-fC text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                placeholder={user.name}
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-firstColor-fC">
                Apellido
              </label>
              <input
                type="text"
                id="last_name"
                className="bg-transparent border border-firstColor-fC text-firstColor-fC text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                placeholder={user.last_name}
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-firstColor-fC">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-transparent border border-firstColor-fC text-firstColor-fC text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
              placeholder={user.email}
              required
            />
          </div>

          <div>
            <label htmlFor="profession" className="block mb-2 text-sm font-medium text-firstColor-fC ">
              Telefono
            </label>
            <input
              type="text"
              id="profession"
              className="bg-transparent border border-firstColor-fC text-firstColor-fC text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
              placeholder={user.phone_number}
              required
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
            >
              Save
              
            </button>
          </div>
        </form>
        </div>
    );
}