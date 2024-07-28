import Link from "next/link";
import React from "react";
import Image from "next/image";

import Brand from "../../public/home/BrandLogo.png";

function Footer() {
  return (
    <footer className="pt-10 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row px-5 md:justify-between">
        <div>
          <Image
            src={Brand}
            width={1000}
            height={1000}
            className="w-56"
            alt="Brand Image"
          />
        </div>
        <div className="mt-8 md:mt-0">
          <h1 className="font-bold text-lg">Quick Links</h1>
          <div className="flex flex-col">
            <Link className="hover:text-yellow-500 duration-500" href="/about">
              About
            </Link>
            <Link className="hover:text-yellow-500 duration-500" href="/tour">
              TourPackage
            </Link>
            <Link
              className="hover:text-yellow-500 duration-500"
              href="/TourCourse"
            >
              Course
            </Link>
            <Link className="hover:text-yellow-500 duration-500" href="/blog">
              Blog
            </Link>
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <h1 className="font-bold text-lg">Get In Touch</h1>
          <div>
            <p>Contact No : 9736333133, 7550733333</p>
            <p>
              Email : <a href="mailto:manu@skycandy.in">manu@skycandy.in</a>
            </p>
            <p>
              Office:: SkyCandy High Adventure Village Kotli,
              <br /> Bir Billing Road, P.O. Bir, Distt Kangra HP (India) –
              176077
            </p>
          </div>
        </div>
      </div>
      <div className="p-5 text-center ">
        <p>copyright &copy; 2024 skycandy All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
