"use client";
import ModalComp from "@/components/ModalComp";
import Image from "next/image";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  const [data_barbershop, setBarbershop] = useState<BarbershopProps[]>([]);
  const [Loading, setLoading] = useState("Cargando");
  const [search, setSearch] = useState("");
  const [selectedBarbershop, setSelectedBarbershop] =
    useState<BarbershopProps | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://adso-lookstyle.onrender.com/api/v1/barbershops"
      );
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

  // Funcion para abrir
  const handleBarbershopClick = (barbershop: BarbershopProps) => {
    setSelectedBarbershop(barbershop);
    setOpen(true);
    // router.push(`/barbershops/${barbershop.id}`)
    
  };

  // Funcion para cerrar el Modal
  const handleCloseModal = () => {
    setSelectedBarbershop(null);
    setOpen(false);
  };

  return (
    <div className="max-container padding-container py-32">
      <div className="mb-16 flex justify-center">
        <input
          value={search}
          onChange={searcher}
          type="text"
          placeholder="Buscar"
          className="block sm:w-3/5 w-4/5 rounded-md border-0 px-3 py-2.5 focus:outline-none focus:border-secundarycolor-sc  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primarycolor-pc sm:text-sm sm:leading-6"
        />
      </div>
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20  lg:px-8 xl:grid-cols-2">
        <ul
          role="list"
          className="grid gap-x-8 gap-y-8 md:grid-cols-3 sm:gap-y-8 xl:col-span-2"
        >
          {results.map((barbershop) => (
            <li
              key={barbershop.id}
              className="p-5 rounded-2xl hover:bg-hover-hv cursor-pointer"
              onClick={() => handleBarbershopClick(barbershop)}
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
                </div>
              </div>
            </li>
          ))}
        </ul>

        {selectedBarbershop && (
          <ModalComp
            barbershop={selectedBarbershop}
            onClose={handleCloseModal}
            open={open}
          />
        )}
      </div>
    </div>
  );
};
export default List;
