"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import HeroImg from "../../public/SkyCandy/p.jpeg";
import BirMaskImg from "../../public/SkyCandy/About.webp";
import HomepageSection4 from "../../public/SkyCandy/TCP3.webp";
import Pilot from "../../public/ParaIcon.png";
import Equipments from "../../public/home/paraG.png";
import Price from "../../public/home/rupee.png";
import Staff from "../../public/home/customer.png";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function page() {
  return (
    <>
      <Navbar />
      <div>
        <section className="relative  w-full h-[40vh] md:h-[70vh] flex justify-between items-center  flex-col-reverse lg:flex-row">
          <div className=" bg-black opacity-[.3] w-full object-cover h-[40vh]  md:h-[70vh] absolute top-0 -z-10">
            {" "}
          </div>
          <div className=" px-10 pt-32 md:pt-64 text-center w-full  flex h-full items-center justify-center gap-10">
            <h1 className="text-4xl  text-center font-bold text-white">
              See The World Like A Bird Glide With US
            </h1>
            {/* <Link href="/tour" className="">
              <Button className="flex w-80 lg:w-96 bg-yellow-500 hover:bg-yellow-600 ">
                book your Quote
              </Button>
            </Link> */}
          </div>
          <Image
            src={HeroImg}
            width={1000}
            height={1000}
            alt="Hero Image paragliding"
            className="w-full  h-[40vh] md:h-[70vh]  object-cover absolute top-0 -z-20"
          />
        </section>
        <section>
          <div className=" max-w-7xl mx-auto flex flex-col-reverse lg:flex-row md:justify-between md:gap-8 items-center px-5 py-10">
            <div className="pt-6 md:pt-0 lg :w-[50%]">
              <h1 className="text-3xl md:text-4xl font-bold">
                {" "}
                Bir Billing Paragliding{" "}
              </h1>
              <p className="py-4 text-justify text-sm md:text-base text-gray-700">
                Welcome to Bir Billing, the paragliding capital of India and a
                haven for adventure enthusiasts from around the globe! Nestled
                in the scenic Dhauladhar Range of the Himalayas, Bir Billing
                offers an unparalleled paragliding experience with its perfect
                blend of stunning landscapes and ideal flying conditions. As you
                prepare to launch from Billing, located at an altitude of 2,400
                meters, you&apos;ll be greeted by panoramic views of lush green
                valleys, dense forests, and distant snow-capped peaks. The
                thrill of taking off and gliding effortlessly over this
                breathtaking scenery is an adventure like no other.
              </p>
              <Link href="/tour" className="pt-8">
                <Button className="flex w-full  bg-black hover:bg-gray-900 ">
                  book your Quote
                </Button>
              </Link>
            </div>

            <Image
              src={BirMaskImg}
              width={1000}
              height={1000}
              alt="BirMaskImg"
              className="w-full lg:w-[50%] rounded h-[50vh] lg:h-[40vh]  object-cover object-center"
            />
          </div>
        </section>

        <section>
          <div className=" h-full py-10  w-full px-5">
            {/* <div className="bg-gray-100 w-full h-[40vh] sm:h-[25vh] lg:h-[50vh] absolute top-0 -z-10"></div> */}
            <div className=" flex flex-col items-center justify-center ">
              <h1 className="text-3xl md:text-5xl text-center font-bold  py-10 md:max-w-sm md:mx-auto">
                Why You Should Choose Us
              </h1>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:pt-10 text-xs text-center lg:text-lg ">
                <div className="flex flex-col border bg-gray-200 h-40 w-40 items-center justify-center p-2 rounded">
                  <Image
                    src={Pilot}
                    width={1000}
                    height={1000}
                    alt="icons"
                    className="w-16 h-16 object-contain"
                  />
                  <p>Experienced Pilot</p>
                </div>
                <div className="flex flex-col border h-40 w-40 bg-gray-200 items-center justify-center p-2 rounded">
                  <Image
                    src={Equipments}
                    width={1000}
                    height={1000}
                    alt="icons"
                    className="w-16 h-16 object-contain"
                  />
                  <p>Best Equipments</p>
                </div>
                <div className="flex flex-col border h-40 w-40 bg-gray-200 items-center justify-center p-2 rounded">
                  <Image
                    src={Price}
                    width={1000}
                    height={1000}
                    alt="icons"
                    className="w-16 h-16 object-contain"
                  />
                  <p>Affordable Prices</p>
                </div>
                <div className="flex flex-col border h-40 w-40 bg-gray-200 items-center justify-center p-2 rounded">
                  <Image
                    src={Staff}
                    width={1000}
                    height={1000}
                    alt="icons"
                    className="w-16 h-16 object-contain"
                  />
                  <p>Experienced Staff</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className=" lg:px-5 ">
          <div className="flex flex-col-reverse lg:flex-row items-center ">
            <div className="flex py-4 w-full flex-col items-center ">
              <h1 className="text-xl md:text-4xl text-center font-bold  md:pt-0">
                Wanna Fly High Join SkyCandy School Of Paragliding
              </h1>
              <Link href="/course" className=" mt-6">
                <Button className="flex w-56 text-sm md:text-base lg:w-96 bg-green-500 hover:bg-green-600 ">
                  book your Quote
                </Button>
              </Link>
            </div>
            {/* <div className=" bg-green-500 rounded"></div> */}
            <div className="w-full">
              <Image
                src={HomepageSection4}
                width={1000}
                height={1000}
                alt="BirMaskImg"
                className="w-full  md:rounded md:w-full h-[40vh] lg:h-[30vh] object-cover object-center "
              />
            </div>
          </div>
        </section>

        <section className="py-10 px-5 ">
          <h1 className="text-3xl md:text-5xl text-center font-bold pb-10 italic">
            Review
          </h1>
          <div className="p-10 overflow-hidden">
            <Carousel
              opts={{
                align: "start",
              }}
              className=" max-w-xs  md:max-w-7xl mx-auto"
            >
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-[30%] lg:basis-1/3 drop-shadow-md"
                  >
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex flex-col aspect-video items-start justify-center p-6">
                          <p>
                            <em>
                              <q>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Sed fuga illo dolor tempora
                                quae debitis corrupti dolore aut quaerat animi.
                              </q>
                            </em>
                          </p>
                          <p>Name</p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default page;
