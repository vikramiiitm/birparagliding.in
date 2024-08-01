
import Image from "next/image";
import React from "react";
import TourImg from "../../../public/SkyCandy/TCP2.webp";
import TourImportant from "../../../public/tourImport.png";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import TourForm from "@/components/TourForm";

function page() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row h-full justify-around max-w-7xl mx-auto gap-10 py-20 px-5">
        <div className="w-full lg:w-1/2">
          <Image
            src={TourImg}
            width={1000}
            height={800}
            alt="tour image "
            className="rounded"
          />

          <div className="flex flex-col gap-2 mt-6">
            <h2 className="text-2xl font-bold">Description</h2>
            <p className="text-gray-700 ">
              Experience the thrill of paragliding with our classic and premium
              rides that promise to take your breath away.
              <br />
              <br />
              <strong>Classic:</strong> Enjoy a 20-25 minute ride that takes you
              high above the earth. As you ascend into the sky, you&apos;ll be
              greeted by spectacular views of the surrounding landscape,
              including rolling hills and verdant valleys. Feel the wind in your
              face and the sense of freedom that comes with soaring high above
              the earth.
              <br />
              <br />
              <strong>Premium:</strong> Indulge in a 40-45 minute ride for an
              extended experience. This package offers even more time to soak in
              the breathtaking views and enjoy the exhilarating feeling of
              flight. The premium ride ensures you have ample time to appreciate
              the beauty of the landscape and the thrill of paragliding.
              <br />
              <br />
              Feel the wind in your face and the sense of freedom that comes
              with soaring high above the earth. Whether you choose the Classic
              or the Premium ride, you&apos;re in for an unforgettable
              adventure.
              <br />
              <br />
              Whether you&apos;re new to paragliding or an experienced flyer,
              this adventure is designed to provide both excitement and
              relaxation. Our professional pilots are dedicated to ensuring your
              safety and enjoyment, so you can fully immerse yourself in the
              experience. Get ready for a flight that will leave you with
              incredible memories and a newfound appreciation for the beauty of
              the world from above. Welcome to the skies!{" "}
            </p>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <h2 className="text-2xl font-bold">Points to Remember</h2>
            <div className="flex flex-col-reverse md:flex-row justify-between">
              <ul className="ml-4 text-black list-disc">
                <li>Report 15 min earlier than the slot booking</li>
                <li>Listen to the instructor carefully</li>
                <li>Have light meal and stay hydrated before gliding</li>
              </ul>
              <span>
                <Image
                  src={TourImportant}
                  width={1000}
                  height={1000}
                  alt="tour important points"
                  className="w-56"
                />
              </span>
            </div>
          </div>
        </div>
        <div className="w-full h-full lg:w-1/2 flex justify-center">
          <TourForm />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default page;
