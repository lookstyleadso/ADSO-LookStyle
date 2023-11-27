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
    <div className="max-container padding-container py-32 2xl:px-10">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Sección de barberías
          </h2>
          <p className="regular-18 text-gray-600 mt-6 leading-8 ">
            Bienvenido aqui vas a encotrar una lista de barberias que te pueden
            interesar, tambien podras buscarlas por nombre.
          </p>
          <div className="mt-6 flex gap-2 justify-start">
            <input
              value={search}
              onChange={searcher}
              type="text"
              placeholder="Buscar"
              className="block w-full rounded-md border-0 px-3 py-2.5 focus:outline-none focus:border-secundarycolor-sc  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primarycolor-pc sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <ul
          role="list"
          className="grid gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-8 xl:col-span-2"
        >
          {results.map((barbershop) => (
            <li
              key={barbershop.id}
              className="p-5 rounded-2xl hover:bg-hover-hv"
            >
              <div className="flex items-center gap-x-5">
                {barbershop.profile_photo &&
                  barbershop.profile_photo.map((photo, index) => (
                    <Image
                      key={index}
                      src={photo}
                      alt="Perfil"
                      width={500}
                      height={500}
                      className="h-16 w-16 rounded-full"
                    />
                  ))}

                <div className="flex w-full justify-between gap-4">
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      {barbershop.barbershop_name}
                    </h3>
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
                  <div className="flex justify-center items-center h-full">
                    <Link href={`/barbershops/schedule/${barbershop.id}`} className="h-full">
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
    </div>
  );
};
export default List;
