import Link from "next/link";
import React from "react";
import Button from "./Button";

const CtaComp = () => {
  return (
    <div className="flexCenter max-w-5xl px-4 py-6 mx-auto border-transparent md-px-16 shadow-darkcolor-dc rounded-2xl bg-darkcolor-dc">
      <div className="grid item-center md:grid-cols-2 text-white">
        <div className="my-8 ml-5">
          <h3 className="bold-40 lg:bold-40">Prueba los servicios</h3>
          <p className="regular-16">
            Todo lo que necesitas para tener una facil gestion en tu barberia
          </p>
        </div>

        <div className="flex items-center">
          <Link href="" className="mx-auto rounded-2xl px-4 py-4">
            <Button
              type="button"
              title="Empieza ahora"
              variant="btn_primary_gradient"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CtaComp;
