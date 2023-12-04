"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { questions } from "@/constants";
import { LuMessagesSquare } from "react-icons/lu";
import { MdAddCall } from "react-icons/md";

const Support = () => {
  return (
    <div className="bg-white">
      <div className=" max-w-4xl mx-auto ">
        <h1 className="font-semibold mb-3">Ayuda al Cliente</h1>
        <h1 className="font-semibold text-3xl">Bienvenido a la pagina de Ayuda</h1>
        <p className="font-semibold mt-3">Iniciar sesion</p>
      </div>

      <div class="mx-auto mt-8 max-w-4xl border  shadow-lg ">
        <div className="flex  ">
          <div class=" p-4">
            <div className="flex flex-row gap-2">
            <LuMessagesSquare className="w-6 h-6 mr-2 fill-current  " />
            <p className="font-semibold">Enviamos un mensaje</p>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor,
              delectus asperiores. Vero hic commodi sapiente dolores fugiat quia
              facilis,
            </p>
          </div>
          <div class="p-4">
            <div className="flex flex-row gap-2 items-center">
            <MdAddCall />
            <p className="font-semibold">Llamanos</p>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor,
              delectus asperiores. Vero hic commodi sapiente dolores fugiat quia
              facilis,
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center ">
          <button className="mt-4 w-[95%] h-9 text-white bg-blue-700 rounded-lg">Iniciar Sesión</button>
        </div>
        <div className="flex flex-col items-center justify-center p-4 ">
          <button className="mt-4 w-[95%] h-9 text-blue-700">Continuar sin iniciar sesión</button>
        </div>
      </div>
      <h1 className="max-w-4xl mx-auto mt-5 font-semibold text-2xl ">Preguntas</h1>
     <div className="flex items-center justify-center mt-3 max-w-4xl mx-auto pt-4 pb-7 ">
          <div className="w-[100%] ">
          <Accordion variant="splitted">
          {questions.map((preg) => (
            <AccordionItem key={preg.id} title={preg.tittle}>
              <p>{preg.description}</p>
            </AccordionItem>
          ))}
        </Accordion>
          </div>
      </div>


    </div>
     
  );
};

export default Support;
