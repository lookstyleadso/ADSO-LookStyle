import React from "react";
import Link from "next/link";

export default function AuthPage() {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
        <div className="bg-white shadow-md rounded px-4 sm:px-8 py-6 flex flex-col items-center w-full sm:w-1/2">
          <h2 className="text-xl font-bold mb-4">
            Iniciar Sesión como Usuario
          </h2>
          <p className="text-gray-600 mb-4">Accede a tu cuenta como usuario.</p>
          <Link
            href="/auth/loginUser"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Iniciar Sesión
          </Link>
        </div>

        <div className="bg-white shadow-md rounded px-4 sm:px-8 py-6 flex flex-col items-center w-full sm:w-1/2">
          <h2 className="text-xl font-bold mb-4">
            Iniciar Sesión como Barbería
          </h2>
          <p className="text-gray-600 mb-4">
            Accede a tu cuenta como barbería.
          </p>
          <Link
            href="/auth/loginBarbershop"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Iniciar Sesión
          </Link>
        </div>
      </div>
    </div>
  );
}
