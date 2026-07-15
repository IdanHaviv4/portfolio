import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";

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
        <div className="w-full flex flex-col gap-20 pt-20">
          {children}
          {modal}

          <Footer />
        </div>
      </body>
    </html>
  );
}
