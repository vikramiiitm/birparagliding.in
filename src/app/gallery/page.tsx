

"use client";


import Image from "next/image";
import React, { useState } from "react";
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

const images = [G1, G2, G3, G4, G5, G6, G7, G8, G9, G10, G11, G12, G13];

function Page() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to- from-blue-300 to-tranparent">
        <section className="px-5">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-7xl mx-auto py-20">
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                width={1000}
                height={1000}
                alt={`gallery ${index + 1}`}
                className="rounded object-cover object-bottom h-[30vh] cursor-pointer"
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </section>
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 md:p-10  "
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative md:m-10">
            <Image
              src={selectedImage}
              width={1000}
              height={1000}
              alt="selected gallery"
              className="rounded"
            />
            <button
              className="absolute top-0 right-0 p-2 text-white bg-black rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default Page;
