import { SERVICES } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Tooltip } from "@nextui-org/react";


const Services = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-center pt-36">
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/service.svg"
            alt="phone"
            width={400}
            height={100}
            className="services-phone"
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative text-center">
            <h2 className="bold-40 lg:bold-60 uppercase">Servicios</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mb-20 md:mb-20 sm:mb-20 xm:mb-20 xd:mb-20 lg:gap-1">
            {SERVICES.map((service) => (
              <ServiceItem
                key={service.title}
                title={service.title}
                icon={service.icon}
                description={service.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

//Interfaz
type ServiceItem = {
  title: string;
  icon: string;
  description: string;
};

const ServiceItem = ({ title, icon, description }: ServiceItem) => {

  const placements = [
    "right",
  ]

  return (
    <li className="flex w-full flex-1 flex-col rounded-2xl items-center justify-center pt-4 border hover:bg-hover-hv">

      <Link href="/" className="rounded-2xl cursor-default">
        {placements.map((placement) => (
          <Tooltip content="Saber más" key={placement} placement={"right"} offset={12} className="uppercase font-bold text-primarycolor-pc">
            <div className="rounded-2xl p-4 ms-4 lg:p-7 transition ease-in-out hover:scale-110 cursor-default bg-gradient-to-r from-secundarycolor-sc to-primarycolor-pc">
              <Image src={icon} alt="map" width={30} height={30} />
            </div>
          </Tooltip>
        ))}
      </Link>

      <h2 className="bold-20 lg:bold-32 mt-5 ms-4 capitalize">{title}</h2>
      <p className="regular-18 mb-4 mx-4 text-darkcolor-dc lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  );
};

export default Services;
