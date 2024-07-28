"use client";

import { useState } from "react";
import SkycandyLogo from '../../../public/home/BrandLogo.png'
import Image from "next/image";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";
import axios from "axios";
import { useRouter, usePathname } from "next/navigation";



const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);


  const logout = async () => {

        try {

           await axios.get("/api/user/logout")
          router.push("/auth/login")
            
        } catch (error) {
            console.log(error)
        }

    }

  const navItems = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Bookings", href: "/dashboard/all-booking-data" },
    { name: "Blog", href: "/dashboard/blog-dashboard" },
    { name: "Contact", href: "/dashboard/contact-data" },
  ];

  return (
    <div>
      <div className="w-full h-20 bg-gray-900 text-white drop-shadow-md flex justify-between px-5 items-center">
        <div className="w-full flex justify-start px-5 items-center">
          <div className="p-4 mb-2">
            <Image
              src={SkycandyLogo}
              alt="Skycandy Logo"
              className="w-32"
              width={1000}
              height={1000}
            />
          </div>
          <div className="p-4 hidden md:block">
            <ul className="flex ">
              {navItems.map((item) => (
                <li
                  key={item.href}
                  className={`mb-2 font-medium ${
                    pathname === item.href
                      ? "text-blue-500"
                      : "hover:text-blue-500 duration-500"
                  }`}
                >
                  <a
                    href={item.href}
                    className={`block py-2 px-4 ${
                      pathname === item.href ? "font-bold text-blue-500" : ""
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex gap-3 md:hidden">
          <Menubar className="border rounded-lg">
            <MenubarMenu>
              <MenubarTrigger>
                {/* <Avatar>
                <AvatarFallback>A</AvatarFallback>
              </Avatar> */}
                <span className="text-black font-bold text-xl">A</span>
              </MenubarTrigger>
              <MenubarContent className="bg-white border">
                <div>
                  <Link href="/dashboard/admin">
                    <MenubarItem className="hover:bg-blue-100 duration-500">
                      Profile
                    </MenubarItem>
                  </Link>
                </div>
                <div>
                  <Link href="/dashboard/create-blog">
                    <MenubarItem className="hover:bg-blue-100 duration-500">
                      Blog
                    </MenubarItem>
                  </Link>
                </div>
                <div>
                  <Link href="/dashboard/userRegistrationDetails">
                    <MenubarItem className="hover:bg-blue-100 duration-500">
                      Booking
                    </MenubarItem>
                  </Link>
                </div>
              </MenubarContent>
            </MenubarMenu>
            <button onClick={logout}>Logout</button>
          </Menubar>
        </div>
        <div className="hidden md:block">
          <button onClick={logout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

