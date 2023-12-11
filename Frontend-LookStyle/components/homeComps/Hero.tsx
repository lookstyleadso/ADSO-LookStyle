import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="max-container padding-container px-4 pb-24 pt-44 bg-darkcolor-dc mx-auto" id="hero">
      <div className="text-white text-center">
        <h1 className="text-4xl xs:text-6xl uppercase font-bold lg:text-7x1 leading-snug mb-5">
          Refina tu estilo y elegancia
        </h1>
        <p className="regular-18 text-gray-100 lg:w-3/5 mx-auto mb-5 font-regular">
          Da forma a tu estilo y tu agenda, descubre el poder de gestionar tu
          propia barbería y turnos con nosotros. ¡Únete ahora es gratis!
        </p>
        <div>
          <Link
            href="/auth/registerUser"
            className="font-medium inline-flex items-center mt-4 px-6 py-2 rounded-2xl border-2 border-darkcolor-dc transition ease-in-out hover:scale-110 hover:border-primarycolor-pc"
          >
            Registrarme
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
