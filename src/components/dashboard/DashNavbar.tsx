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
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
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
    { name: "Profile", href: "/dashboard/profile" },
  ];

  return (
    <div>
      <div className="w-full h-20 bg-gray-900 text-white drop-shadow-md flex justify-between px-5 items-center">
        <div className="w-full flex justify-start px-5 items-center">
          <div className="p-4 ">
            <Image
              src={SkycandyLogo}
              alt="Skycandy Logo"
              className="w-24 mb-2"
              width={1000}
              height={1000}
            />
          </div>
          <div className="p-4 hidden md:block">
            <ul className="flex ">
              {navItems.map((item) => (
                <li
                  key={item.href}
                 
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

        <div className="md:hidden ">
          <Sheet>
            <SheetTrigger>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                />
              </svg>
            </SheetTrigger>
            <SheetContent className="w-56">
              <SheetHeader>
                <div className="flex flex-col gap-4 mt-6 text-center">
                  <Link
                    href="/dashboard"
                    className="hover:text-yellow-500 duration-500"
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/dashboard/all-booking-data"
                    className="hover:text-yellow-500 duration-500"
                  >
                    Booking
                  </Link>
                  <Link
                    href="/dashboard/blog-dashboard"
                    className="hover:text-yellow-500 duration-500"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/dashboard/contact-data"
                    className="hover:text-yellow-500 duration-500"
                  >
                    Contact
                  </Link>
                  <Link
                    href="/dashboard/profile"
                    className="hover:text-yellow-500 duration-500"
                  >
                    Profile
                  </Link>
                  <button onClick={logout}>Logout</button>
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>

        {/* <div className="flex gap-3 md:hidden">
          <Menubar className="border rounded-lg">
            <MenubarMenu>
              <MenubarTrigger>
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
            <button onClick={logout} className="flex gap-2">
              <span>Logout</span>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-log-out"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" x2="9" y1="12" y2="12" />
              </svg>
            </button>
          </Menubar>
        </div> */}
        <div className="hidden md:block">
          <button onClick={logout}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-log-out"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" x2="9" y1="12" y2="12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

