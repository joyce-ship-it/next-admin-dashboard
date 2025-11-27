import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin dashboard",
  description: "Admin dashboard built with next, shadcn and tailwind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        <div className="flex">
          <div className="hidden h-[100vh] w-[300px] md:block">
            <Sidebar />
          </div>
          <div className="w-full p-5 md:max-w-[1140px]"> {children}</div>
        </div>
      </body>
    </html>
  );
}
