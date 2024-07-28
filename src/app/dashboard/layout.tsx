
import { Inter } from "next/font/google";
import DashNavbar from "@/components/dashboard/DashNavbar"; // Import the DashNavbar component



const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      

        <body className={inter.className}>
          <main>
            <DashNavbar />
            {children}
          </main>
        </body>
      
    </html>
  );
}
