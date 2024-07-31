import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
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
import Image from "next/image";
import BrandImg from "../../public/SkyCandy/BrandSkyCandy.png";

function Navbar() {
  return (
    <nav className="flex items-center justify-between  px-5  text-white py-3  bg-black z-50 shadow-md">
      <div className="relative ">
        <Link href="/">
          <Image
            src={BrandImg}
            alt="brandImg"
            width={1000}
            height={1000}
            className=" h-full object-cover w-28 ml-6  object-top"
          />
        </Link>
      </div>
      <div className="max-w-fit hidden md:block">
        <Menubar className="border-none bg-transparent gap-4 text-lg">
          <MenubarMenu>
            <Link href="/" className="hover:text-yellow-500 duration-500">
              Home
            </Link>
          </MenubarMenu>
          <MenubarMenu>
            <Link href="/about" className="hover:text-yellow-500 duration-500">
              About
            </Link>
          </MenubarMenu>
          <MenubarMenu>
            <Link href="/tour" className="hover:text-yellow-500 duration-500">
              Paragliding
            </Link>
          </MenubarMenu>
          <MenubarMenu>
            <Link
              href="/gallery"
              className="hover:text-yellow-500 duration-500"
            >
              Gallery
            </Link>
          </MenubarMenu>
          <MenubarMenu>
            <Link
              href="/contactform"
              className="hover:text-yellow-500 duration-500"
            >
              Contact
            </Link>
          </MenubarMenu>
          <MenubarMenu>
            <Link href="/course" className="hover:text-yellow-500 duration-500">
              Learn Fly
            </Link>
          </MenubarMenu>
        </Menubar>
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
              className="size-8"
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
                <Link href="/" className="hover:text-yellow-500 duration-500">
                  Home
                </Link>
                <Link
                  href="/about"
                  className="hover:text-yellow-500 duration-500"
                >
                  About
                </Link>
                <Link
                  href="/gallery"
                  className="hover:text-yellow-500 duration-500"
                >
                  Gallery
                </Link>
                <Link
                  href="/tour"
                  className="hover:text-yellow-500 duration-500"
                >
                  Paragliding
                </Link>
                <Link
                  href="/contactform"
                  className="hover:text-yellow-500 duration-500"
                >
                  Contact
                </Link>
                <Link
                  href="/course"
                  className="hover:text-yellow-500 duration-500"
                >
                  Learn Fly
                </Link>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

export default Navbar;
