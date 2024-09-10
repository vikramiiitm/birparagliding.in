import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import {Ubuntu} from "next/font/google";
import "./globals.css";
import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

const inter = Ubuntu({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Skycandy",
  description: "Paragliding in Bir",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
