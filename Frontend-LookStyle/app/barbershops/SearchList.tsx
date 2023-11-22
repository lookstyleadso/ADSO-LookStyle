"use client";
import Image from "next/image";
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
              {/* {barbershop.lastSeen ? (
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Last seen{" "}
                  <time dateTime={barbershop.lastSeenDateTime}>
                    {barbershop.lastSeen}
                  </time>
                </p>
              ) : (
                <div className="mt-1 flex items-center gap-x-1.5">
                  <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-xs leading-5 text-gray-500">
                    {barbershop.state}
                  </p>
                </div>
              )} */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchList;
