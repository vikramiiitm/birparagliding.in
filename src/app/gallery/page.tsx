import Image from "next/image";
import React from "react";
import G1 from "../../../public/G1.png";
import G2 from "../../../public/G2.png";
import G3 from "../../../public/G3.png";
import G4 from "../../../public/G4.png";
import G5 from "../../../public/G5.png";
import G6 from "../../../public/G6.png";
import G7 from "../../../public/G7.png";
import G8 from "../../../public/G8.png";
import G9 from "../../../public/G9.png";
import G10 from "../../../public/G10.png";
import G11 from "../../../public/G11.png";
import G12 from "../../../public/G12.png";
import G13 from "../../../public/G13.png";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function page() {
  return (
    <>
      <Navbar />
      <div>
        <section className="px-5">
          {/* <h1>images</h1> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-7xl mx-auto py-20">
            <Image src={G1} width={1000} height={1000} alt="gallery" />
            <Image src={G2} width={1000} height={1000} alt="gallery" />
            <Image src={G3} width={1000} height={1000} alt="gallery" />
            <Image src={G4} width={1000} height={1000} alt="gallery" />
            <Image src={G5} width={1000} height={1000} alt="gallery" />
            <Image src={G6} width={1000} height={1000} alt="gallery" />
            <Image src={G7} width={1000} height={1000} alt="gallery" />
            <Image src={G8} width={1000} height={1000} alt="gallery" />
            <Image src={G9} width={1000} height={1000} alt="gallery" />
            <Image src={G10} width={1000} height={1000} alt="gallery" />
            <Image src={G11} width={1000} height={1000} alt="gallery" />
            <Image src={G12} width={1000} height={1000} alt="gallery" />
            <Image src={G13} width={1000} height={1000} alt="gallery" />
          </div>
        </section>
        <section className="px-5"></section>
      </div>
      <Footer />
    </>
  );
}

export default page;
