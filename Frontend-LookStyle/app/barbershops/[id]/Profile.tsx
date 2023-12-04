"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Spinner } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

type BarbershopProps = {
  id?: number;
  profile_photo: string;
  barbershop_name: string;
  email: string;
  phone_number: string;
  location: string;
  state: string;
};

const Profile = () => {
  const { id } = useParams();
  const [barbershop, setBarbershop] = useState<BarbershopProps | null>(null);
  const [followersCount, setFollowersCount] = useState(0);

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
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner size="lg" />
      </div>
    );
  }

  // Funcion para el numero de seguidores
  const handleFollowClick = () => {
    setFollowersCount(followersCount + 1);
  };

  return (
    <div
      key={barbershop.id}
      className="flex flex-col items-center justify-center min-h-screen py-32"
    >
      <div className="container m-4">
        <div className="max-container padding-container w-full mx-auto grid gap-4 grid-cols-1">
          {/* Perfil Card */}
          <div className="flex flex-col sticky top-0 z-10">
            <div className="bg-darkcolor-dc border border-darkcolor-dc shadow-lg rounded-2xl p-4">
              <div className="flex-none sm:flex">
                <div className=" relative h-32 w-32   sm:mb-0 mb-3">
                  <Image
                    src={barbershop.profile_photo}
                    alt="perfil"
                    className="w-32 h-32 object-cover rounded-2xl"
                    width={200}
                    height={200}
                  />
                </div>
                <div className="flex-auto sm:ml-5 justify-evenly">
                  <div className="flex items-center justify-between sm:mt-2">
                    <div className="flex items-center">
                      <div className="flex flex-col">
                        <div className="w-full flex-none text-lg text-gray-200 font-bold leading-none">
                          {barbershop.barbershop_name}
                        </div>
                        <div className="flex-auto text-gray-400 my-1">
                          <span className="mr-3 ">{barbershop.email}</span>
                          <span className="mr-3 border-r border-gray-600  max-h-0"></span>
                          <span>{barbershop.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center">
                    {/* Calificación */}
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-400"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-400"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-400"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-400"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-5 w-5 text-yellow-400"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="flex pt-2 justify-between text-sm text-gray-400">
                    <div className="flex-1 inline-flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                      </svg>
                      <p className="">{followersCount} Seguidores</p>
                    </div>

                    <button
                      onClick={handleFollowClick}
                      className="flex-no-shrink bg-secundarycolor-sc hover:bg-primarycolor-pc px-5 ml-4 py-2 text-xs shadow-sm hover:shadow-lg font-semibold tracking-wider text-white uppercase rounded-2xl transition ease-in duration-300"
                    >
                      Seguir
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Informacion */}
          <div className="grid grid-cols-12 gap-4 ">
            <div className="col-span-12 sm:col-span-4">
              <div className="p-4 relative bg-darkcolor-dc border border-darkcolor-dc shadow-lg rounded-2xl gap-4">

                {barbershop.state.toUpperCase() === "ACTIVO" ||
                  barbershop.state.toUpperCase() === "ABIERTO" ? (
                  <div className="mt-1 flex items-center gap-x-1.5">
                    <Image
                      src="/bx-timeopen.svg"
                      alt="Abierta"
                      width={200}
                      height={200}
                      className="h-14 w-14 absolute bottom-4 right-3 text-green-400"
                    />
                  </div>
                ) : (
                  <div className="mt-1 flex items-center gap-x-1.5">
                    <Image
                      src="/bx-timeclose.svg"
                      alt="Cerrada"
                      width={200}
                      height={200}
                      className="h-14 w-14 absolute bottom-4 right-3 text-green-400"
                    />
                  </div>
                )}

                <div className="flex justify-between items-center "></div>
                <div className="text-xl text-gray-100 font-medium leading-8 mt-5">
                  {barbershop.state.toUpperCase() === "ACTIVO" ||
                    barbershop.state.toUpperCase() === "ABIERTO" ? (
                    <div>
                      <p>Se encuentra abierta</p>
                    </div>
                  ) : (
                    <div>
                      <p>Se encuentra cerrada</p>
                    </div>
                  )}
                </div>
                <div className="text-sm text-gray-500">
                  Establecimiento barbería
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-4">
              <Link href="">
                <div className="p-4 relative  bg-darkcolor-dc border border-darkcolor-dc shadow-lg rounded-2xl transition ease-in duration-500  transform hover:scale-105">
                  <Image
                    src="/bx-link.svg"
                    alt="Link"
                    width={60}
                    height={60}
                    className="h-14 w-14 absolute bottom-4 right-3"
                  />
                  <div className="flex justify-between items-center ">
                    <i className="fab fa-behance text-xl text-gray-400"></i>
                  </div>
                  <div className="text-2xl text-gray-100 font-medium leading-8 mt-5">
                    Visitar
                  </div>
                  <div className="text-sm text-gray-500">
                    Red social de {barbershop.barbershop_name}
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-span-12 sm:col-span-4">
              <Link href="">
                <div className="p-4 relative bg-darkcolor-dc border border-darkcolor-dc shadow-lg rounded-2xl transition ease-in duration-500  transform hover:scale-105">
                  <Image
                    src="/bx-link.svg"
                    alt="Link"
                    width={60}
                    height={60}
                    className="h-14 w-14 absolute bottom-4 right-3"
                  />
                  <div className="flex justify-between items-center ">
                    <i className="fab fa-codepen text-xl text-gray-400"></i>
                  </div>
                  <div className="text-2xl text-gray-100 font-medium leading-8 mt-5">
                    Visitar
                  </div>
                  <div className="text-sm text-gray-500">
                    Red social de {barbershop.barbershop_name}
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            {/* Calendario */}
            <div className="flex flex-col p-4 relative items-center justify-center bg-darkcolor-dc border border-darkcolor-dc shadow-lg rounded-2xl">

              {/* <div className="">
                <div className="text-center p-5 flex-auto justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 -m-1 flex items-center text-blue-400 mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-16 h-16 flex items-center text-gray-600 mx-auto"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <h2 className="text-xl font-bold py-4 text-gray-200">
                    Are you sure?
                  </h2>
                  <p className="text-sm text-gray-500 px-8">
                    Do you really want to delete your account? This process
                    cannot be undone
                  </p>
                </div>
                <div className="p-3  mt-2 text-center space-x-4 md:block">
                  <button className="mb-2 md:mb-0 bg-gray-700 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border-2 border-gray-600 hover:border-gray-700 text-gray-300 rounded-full hover:shadow-lg hover:bg-gray-800 transition ease-in duration-300">
                    Cancel
                  </button>
                  <button className="bg-green-400 hover:bg-green-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-300 hover:border-green-500 text-white rounded-full transition ease-in duration-300">
                    Confirm
                  </button>
                </div>
              </div> */}
            </div>

            <div className="flex flex-col p-4 bg-darkcolor-dc border-darkcolor-dc shadow-md hover:shodow-lg rounded-2xl">
              <div className="flex">
                <Image
                  src=""
                  alt="Just a flower"
                  className=" w-16  object-fit  h-16 rounded-2xl"
                  width={200}
                  height={200}
                />
                <div className="flex flex-col justify-center w-full px-2 py-1">
                  <div className="flex justify-between items-center ">
                    <div className="flex flex-col">
                      <h2 className="font-medium leading-none text-gray-100">
                        Massive Dynamic
                      </h2>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex pt-2  text-sm text-gray-500">
                    <div className="flex items-center mr-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-400 mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <p className="font-normal">4.5</p>
                    </div>
                    <div className="flex items-center font-medium text-gray-300 ">
                      $1800
                      <span className="text-gray-600 text-sm font-normal">
                        {" "}
                        /wk
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
