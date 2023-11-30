'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { type } from 'os';

type ServiceProps = {
    id: number;
    service_name: string;
}

export default function Api() {
    const [service, setservice] = useState<ServiceProps[]>([]);

    useEffect(() => {
        axios.get('https://adso-lookstyle.onrender.com/api/v1/services')
            .then(response =>  setservice(response.data.data))
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
            <label className=' text-base font-medium text-white' >Servicios
            <select name="" id="" className=" w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
                {service.map(service => (
                    <option key={service.id} value={service.id}>{service.service_name}</option>
                ))}
            </select>
            </label>
        </div>
    );
}