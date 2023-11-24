"use client";
import ButtonTwo from "@/components/ButtonTwo";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

type BarbershopProps = {
  id?: number;
  profile_photo: [];
  barbershop_name: string;
  email: string;
  phone_number: string;
  location: string;
  state: string;
};

const List = () => {
  const [data_barbershop, setBarbershop] = useState<BarbershopProps[]>([]);
  const [Loading, setLoading] = useState("Cargando");
  const [search, setSearch] = useState("");
  const url = "https://adso-lookstyle.onrender.com/api/v1/barbershops";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      if (response.status == 200) {
        setLoading("");
      }
      setBarbershop(data.data);
    };
    fetchData();
  }, []);

  //Funcion de busqueda
  const searcher = (e: any) => {
    setSearch(e.target.value);
  };

  //Metodo de filtrado
  const results = !search
    ? data_barbershop
    : data_barbershop.filter((dataname) =>
        dataname.barbershop_name
          .toLowerCase()
          .includes(search.toLocaleLowerCase())
      );

  return (
    <div className="max-container padding-container pt-32">
      <div className="sm:col-span-2">
        <div className="mt-2.5 flex gap-2 justify-center">
          <input
            value={search}
            onChange={searcher}
            type="text"
            placeholder="Buscar"
            className="block w-3/6 rounded-md border-0 px-3 py-2.5 focus:outline-none focus:border-secundarycolor-sc  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secundarycolor-sc sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <ul role="list" className="divide-y my-20 px-5 divide-gray-300">
        {results.map((barbershop) => (
          <li key={barbershop.id} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              {barbershop.profile_photo &&
                barbershop.profile_photo.map((photo, index) => (
                  <Image
                    key={index}
                    src={photo}
                    alt="Perfil"
                    width={500}
                    height={500}
                    className="h-12 w-12 flex-none rounded-full bg-gray-50"
                  />
                ))}

              <div className="min-w-0 flex-auto">
                <p className="bold-16 font-semibold leading-6 text-gray-900">
                  {barbershop.barbershop_name}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-600">
                  {barbershop.email}
                </p>
              </div>
            </div>
            <div className="xm:flex xm:items-end gap-3">
              <div className="xm:flex-col xm:items-end">
                <p className="regular-16 leading-6 text-gray-900">
                  {barbershop.location}
                </p>
                {barbershop.state.toUpperCase() === "ACTIVO" ||
                barbershop.state.toUpperCase() === "ABIERTO" ? (
                  <div className="mt-1 flex items-center gap-x-1.5">
                    <div className="flex-none rounded-full p-1 bg-emerald-500/20">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      {barbershop.state}
                    </p>
                  </div>
                ) : (
                  <div className="mt-1 flex items-center gap-x-1.5">
                    <div className="flex-none rounded-full p-1 bg-red-200">
                      <div className="h-1.5 w-1.5 rounded-full bg-red-600" />
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      {barbershop.state}
                    </p>
                  </div>
                )}
              </div>
              <div className="flex gap-2 h-full ">
                <div>
                  <Link href="/">
                    <ButtonTwo
                      type="button"
                      title="Ver"
                      variant="btn_tertiary"
                    />
                  </Link>
                </div>
                <div>
                  <Link href="/barbershops/schedule">
                    <ButtonTwo
                      type="button"
                      title="Agendar"
                      variant="btn_primary_gradient"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default List;
