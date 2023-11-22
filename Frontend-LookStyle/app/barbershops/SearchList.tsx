"use client";
import Image from "next/image";
import { Skeleton } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

type BarbershopProps = {
  id?: number;
  barbershop_name: string;
  email: string;
  phone_number: string;
  location: string;
  state: string;
};

const SearchList = () => {
  const [barbershop, setBarbershop] = useState<BarbershopProps[]>([]);
  const [Loading, SetLoading] = useState("Cargando");
  const url = "https://adso-lookstyle.onrender.com/api/v1/barbershops";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      if (response.status == 200) {
        SetLoading("");
      }
      console.log(data);
      setBarbershop(data.data);
    };
    fetchData();
  }, []);
  return (
    <div className="max-container padding-container py-20">
      <ul role="list" className="divide-y divide-gray-100">
        {barbershop.map((barbershop) => (
          <li key={barbershop.id} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              {/* <Image
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
                src={barbershop.image}
                alt=""
              /> */}
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {barbershop.barbershop_name}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {barbershop.email}
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">
                {barbershop.location}
              </p>
              {barbershop.state === "Activo" || barbershop.state === "Abierto" ? (
                <div className="mt-1 flex items-center gap-x-1.5">
                  <div className="flex-none rounded-full p-1 bg-emerald-500/20">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-xs leading-5 text-gray-500">
                    {barbershop.state}
                  </p>
                </div>
              ) : (
                <div className="mt-1 flex items-center gap-x-1.5">
                  <div className="flex-none rounded-full p-1 bg-red-900">
                    <div className="h-1.5 w-1.5 rounded-full bg-red-600" />
                  </div>
                  <p className="text-xs leading-5 text-gray-600">
                    {barbershop.state}
                  </p>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
      <div className="max-w-[300px] w-full flex items-center gap-3">
        <div>
          <Skeleton className="flex rounded-full w-12 h-12 bg-red-400" />
        </div>
        <div className="w-full flex flex-col gap-2">
          <Skeleton className="h-3 w-3/5 rounded-lg bg-red-400" />
          <Skeleton className="h-3 w-4/5 rounded-lg bg-red-400" />
        </div>
      </div>
    </div>
  );
};

export default SearchList;
