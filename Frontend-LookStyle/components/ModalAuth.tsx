import React from "react";
import { ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import Link from "next/link";

type ModalProps = {
  onClose: () => void;
};

const ModalAuth = ({ onClose }: ModalProps) => (
  <>
    {/* <ModalHeader className="flex flex-col gap-1">Titulo Modal</ModalHeader> */}
    <ModalBody>
    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
        <div className="bg-white px-4 sm:px-8 py-6 flex flex-col items-center text-center w-full sm:w-1/2">
          <h2 className="text-xl font-bold mb-4">
            Cuenta de Usuario
          </h2>
          <p className="text-gray-600 mb-4">Accede a tu cuenta como un usuario corriente.</p>
          <Link
            href="/auth/loginUser"
            className="bg-primarycolor-pc hover:bg-primarycolor-hover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Iniciar Sesión
          </Link>
        </div>

        <div className="bg-white px-4 sm:px-8 py-6 flex flex-col items-center text-center w-full sm:w-1/2">
          <h2 className="text-xl font-bold mb-4">
            Cuenta de Barbería
          </h2>
          <p className="text-gray-600 mb-4">
            Accede a tu cuenta de barbería para administrarla.
          </p>
          <Link
            href="/auth/loginBarbershop"
            className="bg-primarycolor-pc hover:bg-primarycolor-hover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Iniciar Sesión
          </Link>
        </div>
      </div>
    </ModalBody>
    {/* <ModalFooter>
      <Button color="danger" variant="light" onPress={onClose}>
        Cerrar
      </Button>
      <Button color="primary" onPress={onClose}>
        Ver
      </Button>
    </ModalFooter> */}
  </>
);

export default ModalAuth;
