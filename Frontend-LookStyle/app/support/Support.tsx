"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { SUPPORT } from "@/constants";
import { FaRegMessage } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";
import Button from "@/components/Button";
import Link from "next/link";

const Support = () => {
    return (
        <div className="max-container padding-container-support py-24">
            <div className="">
                <h1 className="font-semibold mb-3">Atencion al cliente</h1>
                <h1 className="font-semibold text-3xl">Bienvedi@ a la seccion de Ayuda</h1>
                <p className="font-semibold mt-3">Inicia sesión para poder contactarnos, disponible las 24 horas del día.</p>
            </div>

            <div className="mx-auto mt-10 border rounded-2xl shadow-lg bg-gree ">
                <div className="flex">
                    <div className="p-8">
                        <div className="flex flex-row gap-2 items-center pb-5">
                            <FaRegMessage className="w-10 h-10 mr-2 fill-current" />
                            <p className="font-semibold">Envianos un mensaje</p>
                        </div>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor,
                            delectus asperiores. Vero hic commodi sapiente dolores fugiat quia
                            facilis,
                        </p>
                    </div>
                    <div className="p-8">
                        <div className="flex flex-row gap-2 items-center pb-5">
                            <BsTelephone className="w-10 h-10 mr-2 fill-current" />
                            <p className="font-semibold">Llamanos</p>
                        </div>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor,
                            delectus asperiores. Vero hic commodi sapiente dolores fugiat quia
                            facilis,
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <Button
                        type="button"
                        title="Inicar Sesion"
                        variant="btn_primary_gradient_big "
                    />
                </div>
                <div className="flex flex-col items-center justify-center p-4">
                    <div>
                        <Link href="/" className="mt-4 w-[95%] h-9 text-primarycolor-pc">Continuar sin iniciar sesión</Link>
                    </div>
                </div>
            </div>
            <h1 className="mx-auto mt-10 font-semibold text-2xl ">Preguntas frecuentes</h1>
            <div className="flex items-center justify-center mt-3  mx-auto pt-4 pb-7 ">
                <div className="w-full">
                    <Accordion variant="splitted">
                        {SUPPORT.map((preg) => (
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
