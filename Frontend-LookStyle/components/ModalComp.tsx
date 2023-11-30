"use client"
import React, { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";



type BarbershopProps = {
  id?: number;
  profile_photo: [];
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
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-80 sm:align-middle sm:max-w-lg sm:w-full">

                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {barbershop.barbershop_name}
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Ubicacion: {barbershop.location}
                    </p>
                    <p className="text-sm text-gray-500">
                      Correo: {barbershop.email}
                    </p>
                  </div>
                </div>


                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primarycolor-pc text-base font-medium hover:bg-primarycolor-hover text-white focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={onClose}
                  >
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
