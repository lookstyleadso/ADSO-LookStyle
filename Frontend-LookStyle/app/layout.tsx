import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
<<<<<<< HEAD
  title: "LookStyle",
=======
  title: "LookStyle | Software Gratuito para Barberías",
>>>>>>> feature/FRONT001
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

