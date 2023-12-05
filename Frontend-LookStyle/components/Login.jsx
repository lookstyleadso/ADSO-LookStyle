"use client";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { Spinner } from "@nextui-org/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import * as yup from "yup";
const FormSchema = yup.object().shape({
  email: yup.string().required("El campo email es requerido"),
  password: yup.string().required("Debe llenar la contrasena"),

});

function Login() {

  const router = useRouter();
  const [errors, setErrors] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const startLogin = async ({ email, password }) => {

    setErrors(<Spinner color="default" />);
    setIsSubmitting(true);
    let dataAuth = {
      email: email,
      password: password,
    };

    console.log(dataAuth);

    try {
      let res = await fetch(
        "https://adso-lookstyle.onrender.com/api/v1/auth/authenticate",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataAuth),
        }
      );

      const redirect = async () => {
        router.push("/barbershops")
      };

      let data = await res.json();
      if (data.status != 'FAILED') {
        console.log(data);
        console.log(data.status);
        document.cookie = `token=${data.token}; path=/; SameSite=None; Secure`;
        if (data.status === 200) {
          redirect();
        }
      } else {
        setErrors(data.data);
        setIsSubmitting(false);
        console.log("error");
        console.log(data);


      }
    } catch (error) {
      console.log(error);

      return null;
    }
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",

      }}
      validationSchema={FormSchema}
      onSubmit={startLogin}
    >
      {() => (
        <div className="min-h-screen min-w-full flex flex-col items-center justify-center bg-darkcolor-dc">
          <Form className="w-[500px] h-[500px]  rounded-2xl shadow-xl gap-12 p-7 bg-white">
            <div className="text-center font-semibold text-2xl pb-10 text-primarycolor-pc">Ingresar a LookStyle</div>
            <div className="relative z-0 w-full mb-10 group">
              <Field
                type="email"
                name="email"
                id="email"
                disabled={isSubmitting}
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primarycolor-pc focus:outline-none focus:ring-0 focus:border-primarycolor-pc peer"
                placeholder=" "

              />

              <label
                for="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primarycolor-pc peer-focus:dark:text-primarycolor-pc peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Correo
              </label>
              <ErrorMessage name="email" component="div" className="error text-red-600" />
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <Field
                type="password"
                name="password"
                id="floating_password"
                disabled={isSubmitting}
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primarycolor-pc focus:outline-none focus:ring-0 focus:border-primarycolor-pc peer"
                placeholder=" "

              />
              <label
                for="floating_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primarycolor-pc peer-focus:dark:text-primarycolor-pc peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Contrasena
              </label>
              <ErrorMessage name="password" component="div" className="error  text-red-600" />
            </div>
            <div className="pt-8 pb-10">
              <button
                disabled={isSubmitting}
                type="submit"
                class="text-white bg-primarycolor-pc hover:bg-primarycolor-hover focus:outline-none font-medium rounded-lg text-sm sm:w-full px-5 py-3 text-center"
              >
                Ingresar
              </button>
            </div>
            <div className="text-center"><p className="text-tertiarycolor-tc">
              {errors}</p>
            </div>
            <div className="text-center font-semibold  text-primary">¿Olvido la contraseña?</div>
          </Form>
        </div>
      )}
    </Formik>
  );
}



export default Login;