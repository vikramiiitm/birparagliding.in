import Image from "next/image";
import React from "react";
import G1 from "../../../public/SkyCandy/g1.webp";
import G2 from "../../../public/SkyCandy/g2.webp";
import G3 from "../../../public/SkyCandy/g3.webp";
import G4 from "../../../public/SkyCandy/g4.webp";
import G5 from "../../../public/SkyCandy/g5.webp";
import G6 from "../../../public/SkyCandy/g6.webp";
import G7 from "../../../public/SkyCandy/g7.webp";
import G8 from "../../../public/SkyCandy/g8.webp";
import G9 from "../../../public/SkyCandy/g9.webp";
import G10 from "../../../public/SkyCandy/g10.webp";
import G11 from "../../../public/SkyCandy/g11.webp";
import G12 from "../../../public/SkyCandy/g12.webp";
import G13 from "../../../public/SkyCandy/g13.webp";
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
