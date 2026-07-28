import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";

const poppins = Poppins({
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Idan Haviv",
  description: "Fullstack developer",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${poppins.className} h-full antialiased`}
    >
      <body>
        <Nav />

        <div className="w-full flex flex-col gap-20">
          <div className="w-full px-3 xs:px-6">
            <div className="w-full max-w-max-width mx-auto flex flex-col items-center [&>section]:pt-16">
              {children}
            </div>
          </div>

          <Footer />
        </div>

        {modal}
      </body>
    </html>
  );
}
