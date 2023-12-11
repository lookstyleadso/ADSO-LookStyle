"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Cookie from "js-cookie";
import Image from "next/image";
import Button from "../Button";

export default function LoginFormUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://adso-lookstyle.onrender.com/api/v1/auth/authenticate",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data;
      Cookie.set("token", data.token, { sameSite: "None" });
      Cookie.set("id", data.id, { sameSite: "None" });
      router.push("/profiles");
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
        console.log(error.config);
      } else {
        console.log("Error desconocido:", error);
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white">
      <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
        <div className="flex items-center justify-center w-full lg:p-12">
          <div className="flex items-center xl:p-10">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col w-full h-[560px] py-6 px-16 text-center bg-white sm:shadow-xl sm:border rounded-2xl"
            >
              <div className="flex items-center justify-center w-full pb-4">
                <Image
                  className="h-16 w-20"
                  src="/logolookstyle.svg"
                  alt="Google"
                  width={50}
                  height={50}
                />
              </div>
              <h4 className="mb-3 text-3xl font-extrabold text-dark-grey-900">
                ¡Bienvenido de nuevo!
              </h4>
              <p>Inicio de sesión para cuneta de usuario.</p>
              <div className="flex flex-col py-6">
                <label className="mb-2 text-sm text-start text-grey-900">
                  Correo
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={handleChangeEmail}
                  placeholder="useraccount@gmail.com"
                  required
                  className="flex items-center w-full px-5 py-3 mr-2 text-sm font-medium border outline-1 outline-primarycolor-pc focus:bg-grey-400 mb-3 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                />
                <label className="mb-2 text-sm text-start text-grey-900">
                  Contraseña
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={handleChangePassword}
                  placeholder="*************"
                  required
                  className="flex items-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium border outline-1 outline-primarycolor-pc focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                />

                <div className="flex flex-row justify-between mb-5">
                  <label className="relative inline-flex items-center mr-3 cursor-pointer select-none">
                    <input
                      className="dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 cursor-pointer w-3 h-3"
                      type="checkbox"
                    />
                    <span className="ml-3 text-sm font-normal text-grey-900">
                      Recordarme
                    </span>
                  </label>

                  <Link href="/" className="text-sm font-medium">
                    ¿Olvidó la contraseña?
                  </Link>
                </div>
              </div>
              <Button
                type="submit"
                title="Inicar Sesión"
                variant="btn_primary_gradient"
              />
              <p className="text-sm leading-relaxed text-grey-900 mt-10">
                ¿No tienes cuenta?{" "}
                <Link
                  href="/auth/register"
                  className="font-bold text-grey-700 hover:underline"
                >
                  Registrarme
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
