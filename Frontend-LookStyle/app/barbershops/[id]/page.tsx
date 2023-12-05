import React from "react";
import { useParams } from "next/navigation";
import Profile from "./Profile";
import NavBar from "@/components/NavBar";

export default function Barbershop() {
  return (
<<<<<<< HEAD
    <div>
      
    </div>
  )
}
=======
<<<<<<< HEAD
    <div>
      <h1>{barbershop.barbershop_name}</h1>
      <p>{barbershop.email}</p>
      <p>{barbershop.phone_number}</p>
      <p>{barbershop.location}</p>
      <p>{barbershop.state}</p>
      {/* Render other barber shop details here */}
    </div>
  );
};

export default BarbershopProfile;
=======
    <>
      <NavBar />
      <Profile />
    </>
  );
};

export default page;
>>>>>>> c4e2ad3f4c73c47e3cbb862c1568a54133f29bf9
>>>>>>> feature/FRONT004
