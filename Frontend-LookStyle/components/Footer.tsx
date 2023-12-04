import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flexCenter pt-8 pb-3 bg-darkcolor-dc">
      <div className="max-container padding-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image src="/logo.svg" alt="logo" width={135} height={30} />
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns, index) => (
              <FooterColumn key={index} title={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-graycolor-gc">
                  {columns.links.map((link, linkIndex) => (
                    <Link key={linkIndex} href="/" className="hover:underline">
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link, linkIndex) => (
                  <Link key={linkIndex} href="/" className="flex gap-4 md:flex-col lg:flex-row">
                    <p className="whitespace-nowrap text-white">{link.label}:</p>
                    <p className="medium-14 whitespace-nowrap text-graycolor-gc hover:underline">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-graycolor-gc">
                  {SOCIALS.links.map((link, linkIndex) => (
                    <Link key={linkIndex} href="/">
                      <Image src={link} alt="logoredes" width={24} height={24} />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>

        </div>

        <div className="border-graycolor-gc">
          <p className="regular-14 w-full text-center text-graycolor-gc">
            2023 LookStyle | Todos los Derechos Reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 text-white whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
