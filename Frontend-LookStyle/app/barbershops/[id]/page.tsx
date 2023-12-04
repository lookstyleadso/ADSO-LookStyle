<<<<<<< HEAD
// pages/barbershop/[id].js
'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

type BarbershopProps = {
  id?: number;
  profile_photo: [];
  barbershop_name: string;
  email: string;
  phone_number: string;
  location: string;
  state: string;
};

const BarbershopProfile = () => {
  const { id } = useParams();
  const [barbershop, setBarbershop] = useState<BarbershopProps | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://adso-lookstyle.onrender.com/api/v1/barbershops/${id}`);
      const data = await response.json();
      
      setBarbershop(data.data);

    };
    fetchData();
  }, [id]);

  if (!barbershop) {
    return <div>Loading...</div>;
  }
=======
import React from "react";
import { useParams } from "next/navigation";
import Profile from "./Profile";
import NavBar from "@/components/NavBar";
>>>>>>> feature/FRONT001

  return (
<<<<<<< HEAD
    <div>
      <h1>{barbershop.barbershop_name}</h1>
      <p>{barbershop.email}</p>
      <p>{barbershop.phone_number}</p>
      <p>{barbershop.location}</p>
      <p>{barbershop.state}</p>
      {/* Render other barber shop details here */}
    </div>
  );
};

export default BarbershopProfile;
=======
    <>
      <NavBar />
      <Profile />
    </>
  );
};

export default page;
>>>>>>> feature/FRONT001
