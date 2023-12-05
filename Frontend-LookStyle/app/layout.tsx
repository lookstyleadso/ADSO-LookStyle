import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
<<<<<<< HEAD
  title: "LookStyle",
=======
  title: "LookStyle | Software Gratuito para Barberías",
>>>>>>> c4e2ad3f4c73c47e3cbb862c1568a54133f29bf9
  description: "Main page of the project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <main className="relative overflow-hidden">{children}</main>
        </Providers>
      </body>
    </html>
  );
}

