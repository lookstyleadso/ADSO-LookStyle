"use client";
import React, { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";



type BarbershopProps = {
  id?: number;
  profile_photo: string;
  barbershop_name: string;
  email: string;
  phone_number: string;
  location: string;
  state: string;
};

type ModalCompProps = {
  barbershop: BarbershopProps;
  onClose: () => void;
  open: boolean;
};

const ModalComp: React.FC<ModalCompProps> = ({ barbershop, onClose, open }) => {
  const cancelButtonRef = useRef(null);

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          initialFocus={cancelButtonRef}
          onClose={onClose}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-44 sm:align-middle sm:max-w-4xl sm:w-full">
                <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <IoCloseSharp
                    className="text-3xl cursor-pointer"
                    onClick={onClose}
                  />
                </div>

                <div className="sm:flex items-center gap-10 px-10 py-10">
                  <div className="flex w-full items-center gap-x-5">
                    <Image
                      src={barbershop.profile_photo}
                      alt="Perfil"
                      width={500}
                      height={500}
                      className="h-16 w-16 rounded-full"
                    />
                    {/* {barbershop.profile_photo &&
                      barbershop.profile_photo.map((photo, index) => (
                        <Image
                          key={index}
                          src={photo}
                          alt="Perfil"
                          width={500}
                          height={500}
                          className="h-28 w-28 rounded-full"
                        />
                      ))} */}
                    <div className="flex w-full justify-between gap-4">
                      <div>
                        <h3 className="text-base bold-20 leading-7 tracking-tight text-gray-900">
                          {barbershop.barbershop_name}
                        </h3>
                        <h4 className="xdd:hidden">{barbershop.email}</h4>
                      </div>
                    </div>
                  </div>

                  {/* **** */}

                  <div className="w-full flex">
                    <div className="flex-col w-full gap-x-5 items-center space-x-4">
                      <div className="w-full justify-center flex gap-x-3">
                        <FaMapMarkerAlt className="text-3xl" />
                        <p className=" bold-20">{barbershop.location}</p>
                      </div>
                    </div>

                    <div className="justify-items-center">
                      {barbershop.state.toUpperCase() === "ACTIVO" ||
                      barbershop.state.toUpperCase() === "ABIERTO" ? (
                        <div className="mt-1 flex items-center gap-x-1.5">
                          <div className="flex-none rounded-full p-1 bg-emerald-500/20">
                            <div className="h-2 w-2 rounded-full bg-emerald-500" />
                          </div>
                          <p className="bold-20 leading-5 text-gray-900">
                            {barbershop.state}
                          </p>
                        </div>
                      ) : (
                        <div className="mt-1 flex items-center gap-x-1.5">
                          <div className="flex-none rounded-full p-1 bg-red-200">
                            <div className="h-2 w-2 rounded-full bg-red-600" />
                          </div>
                          <p className="bold-20 leading-5 text-gray-900">
                            {barbershop.state}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <Link
                    href={`/barbershops/${barbershop.id}`}
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primarycolor-pc text-base font-medium hover:bg-primarycolor-hover text-white focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                  >
<<<<<<< HEAD
                    <Link href={`/barbershops/${barbershop.id}`}>
                      Agendar
                    </Link>
                  </button>

                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-tertiarycolor-tc text-base font-medium hover:bg-tertiarycolor-hover text-white focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={onClose}
                  >
                    Cerrar
                  </button>
=======
                    Ver/Agendar
                  </Link>
>>>>>>> feature/FRONT001
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default ModalComp;
