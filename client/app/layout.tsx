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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.className} h-full antialiased`}>
      <body>
        <div className="w-full flex flex-col gap-20">
          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
