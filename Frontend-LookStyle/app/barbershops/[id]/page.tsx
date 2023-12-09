import React from "react";
// import { useParams } from "next/navigation";
import Profile from "./Profile";
import NavBar from "@/components/NavBar";

const page = () => {
  return (
    <>
      <NavBar />
      <Profile />
    </>
  );
};

export default page;
