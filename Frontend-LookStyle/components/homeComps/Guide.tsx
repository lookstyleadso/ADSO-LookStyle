import { GUIDE_INFO } from "@/constants";
import Image from "next/image";

const Guide = () => {
  return (
    <section className="flexCenter flex-col max-container">
      <div className="padding-container pt-10 pb-5 w-full">
        <p className="uppercase bold-18 mb-3 text-primarycolor-pc">
          Función y preguntas frecuentes
        </p>
        <div className="flex flex-wrap gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-60 xl-max-w-[390px] uppercase">
            GUÍA FUNCIONES
          </h2>
        </div>
      </div>

      <div className="w-full 2xl:px-20">
        <div className="mx-auto grid grid-cols-1 items-center gap-x-10 padding-container-guide">
          <div>
            <dl className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 sm:gap-y-8 lg:gap-x-8">
              {GUIDE_INFO.map((guides) => (
                <div key={guides.id} className="px-5 py-1 rounded-2xl border hover:bg-hover-hv">
                  <dt className="uppercase bold-18 text-primarycolor-pc">
                    {guides.name}
                  </dt>
                  <dd className="mt-2 text-sm text-graycolor-gc">
                    {guides.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="flex flex-1 lg:min-h-[640px]">
            <Image
              src="/guide.svg"
              alt="phone"
              width={400}
              height={100}
              className="guide-phone"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
