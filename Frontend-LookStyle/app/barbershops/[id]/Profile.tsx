"use client"
import React from 'react'
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Spinner } from "@nextui-org/react";

type BarbershopProps = {
    id?: number;
    profile_photo: [];
    barbershop_name: string;
    email: string;
    phone_number: string;
    location: string;
    state: string;
};

const Profile = () => {
    const { id } = useParams();
    const [barbershop, setBarbershop] = useState<BarbershopProps | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `https://adso-lookstyle.onrender.com/api/v1/barbershops/${id}`
            );
            const data = await response.json();
            setBarbershop(data.data);
        };
        fetchData();
    }, [id]);

    if (!barbershop) {
        return <div className='flex items-center justify-center h-screen'><Spinner size="lg" /></div>;
    }

    return (
        <div key={barbershop.id}>
            <h1>{barbershop.barbershop_name}</h1>
            <p>{barbershop.email}</p>
            <p>{barbershop.phone_number}</p>
            <p>{barbershop.location}</p>
            <p>{barbershop.state}</p>
        </div>
    )
}

export default Profile