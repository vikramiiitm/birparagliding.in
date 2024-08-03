import Image from "next/image";
import React from "react";
import AboutImg from "../../../public/home/paraPerson.jpg";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

function page() {
  return (
    <>
      <Navbar />
      <div className="">
        <div className="relative w-full h-full ">
          <div className="h-full absolute top-0 w-full -z-10"></div>
          <div className="w-full h-[60vh] relative  flex justify-center items-center">
            <Image
              src={AboutImg}
              width={1000}
              height={1000}
              alt="about-img"
              className="absolute top-0 w-full object-cover  h-[60vh] -z-10"
            />
            <div className="absolute top-0 w-full object-cover bg-black opacity-[.3]  h-[60vh] -z-10"></div>
            <h1 className="text-5xl md:text-7xl text-center text-white font-bold ">
              About Us
            </h1>
          </div>
          <div className=" py-20 px-5 bg-blue-800">
            <div className="flex max-w-7xl mx-auto flex-col gap-5 text-yellow-500  ">
              <div className="flex flex-col gap-2  ">
                <h2 className="text-2xl md:text-4xl  font-bold ">
                  Welcome to SkyCandy!
                </h2>
                <p className="text-white text-base">
                  {" "}
                  Established in 2004, SkyCandy has been a premier provider of
                  paragliding services in the picturesque region of Bir Billing.
                  With over two decades of experience, we pride ourselves on
                  offering exhilarating and safe paragliding adventures that
                  cater to both novice and experienced flyers.
                </p>
              </div>
              <div className="flex flex-col gap-2  ">
                <h3 className="text-xl md:text-2xl  font-bold ">About Us:</h3>
                <p className="text-white text-base">
                  {" "}
                  At SkyCandy, we believe in the magic of flight and the beauty
                  of nature. Our team of certified and passionate instructors
                  ensures that every flight is a memorable experience. Nestled
                  in the heart of Bir Billing, one of the world&apos;s top
                  paragliding destinations, we offer unparalleled views and a
                  sense of freedom that is truly unmatched.
                </p>
              </div>
              <div className="flex flex-col gap-2 ">
                <h2 className="text-2xl md:text-4xl text-yellow-500 font-bold ">
                  Founder
                </h2>
                <p className="text-white text-base">
                  {" "}
                  Manjeet Thakur, the founder and owner of SkyCandy, is a
                  passionate paragliding enthusiast with a vision to share the
                  joy of flight with the world. Since establishing SkyCandy in
                  2004, Manjeet has dedicated himself to creating unforgettable
                  paragliding experiences in the breathtaking region of Bir
                  Billing. With a deep love for adventure and a commitment to
                  safety, Manjeet has built a team of skilled instructors who
                  share his enthusiasm for soaring the skies. His expertise,
                  combined with his warm and approachable nature, has made
                  SkyCandy a trusted name in the paragliding community. Under
                  Manjeet&apos;s leadership, SkyCandy continues to inspire and
                  thrill both new and seasoned paragliders, offering a perfect
                  blend of excitement and tranquility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default page;
