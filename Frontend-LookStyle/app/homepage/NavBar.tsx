"use client";
import { NAV_LINKS } from "@/constants";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="max-container padding-container-nav fixed shadow-lg z-30 bg-darkcolor-dc">
      <div className="md:flex items-center justify-between py-2">
        <div className="flexStart">
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={125} height={30} />
          </Link>
        </div>

        <div
          onClick={() => setOpenMenu(!openMenu)}
          className="absolute right-3 top-1 cursor-pointer md:hidden"
        >
          {openMenu ? (
            <Image
              src="bx-close.svg"
              alt="Close"
              width={32}
              height={32}
              className="cursor-pointer"
            />
          ) : (
            <Image
              src="bx-menu.svg"
              alt="Menu"
              width={32}
              height={32}
              className="cursor-pointer"
            />
          )}
        </div>

        <ul
          className={`md:flex md:items-center absolute md:static md:z-auto bg-darkcolor-dc gap-6 md:gap-2 lg:gap-8 xl:gap-10 z-[-1] left-0 w-full md:w-auto md:pl-0  transition-all duration-500 ease-in ${
            openMenu ? "top-9" : "top-[-490px]"
          }`}
        >
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 md:my-0 my-7 text-white flexCenter cursor-pointer transition-all hover:font-semibold hover:text-primarycolor-pc"
            >
              {link.label}
            </Link>
          ))}
        </ul>

        <div className="md:flexCenter hidden">
          <Link href="/auth/register">
            <Button
              type="button"
              title="Unirme"
              variant="btn_primary_gradient"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
