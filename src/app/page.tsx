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

// import TextScroller from "text-scroller";

// import HeroImg from "../../public/SkyCandy/p.jpeg";
import BirMaskImg from "../../public/SkyCandy/g9.webp";
import HomepageSection4 from "../../public/SkyCandy/courseImg.jpeg";
import Pilot from "../../public/ParaIcon.png";
import Equipments from "../../public/home/paraG.png";
import Price from "../../public/home/rupee.png";
import Staff from "../../public/home/customer.png";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorldMap from "../../public/home/WorldMap.png";

import { Fade } from "react-awesome-reveal";
        





function page() {
  return (
    <>
      <Navbar />
      <div>
        <section className="relative  w-full h-[22vh] md:h-[70vh] overflow-hidden flex justify-between items-center  flex-col-reverse lg:flex-row">
          <div className=" bg-black opacity-[.5] w-full object-cover h-[40vh]  md:h-[70vh] absolute top-0 -z-10">
            {" "}
          </div>
          <div className=" px-10 pt-0 md:pt-36 text-center w-full flex-col flex h-full items-center justify-center gap-5">
            <Fade direction="left" triggerOnce>
              <h1 className="text-xl lg:text-5xl  text-center font-bold text-white">
                See The World Like A Bird Glide With US
              </h1>
            </Fade>
            <Fade direction="right" triggerOnce>
              <Link href="/tour" className="">
                <Button className="flex w-full lg:w-96 bg-blue-500 hover:bg-blue-600 ">
                  book your Quote
                </Button>
              </Link>
            </Fade>
          </div>
          {/* <Image
            src={HeroImg}
            width={1000}
            height={1000}
            alt="Hero Image paragliding"
            className="w-full lg:block h-[40vh] md:h-[70vh] object-cover   absolute top-0 -z-20"
          /> */}

          <iframe
            src="https://player.cloudinary.com/embed/?public_id=zemaxil4d8syeom6ryh3&cloud_name=dirsedwao&player[autoplay]=true&player[muted]=true&player[loop]=true&player[fluid]=true&player[seekThumbnails]=false&player[aiHighlightsGraph]=true"
            width="1000"
            height="800"
            allow="autoplay; encrypted-media; picture-in-picture"
            className="w-screen  h-[80vh] md:h-[120vh] object-cover object-center  absolute md:-top-56 top-[-14rem] -z-20"
          ></iframe>
        </section>
        <section className="">
          <div className=" max-w-7xl mx-auto flex flex-col-reverse lg:flex-row md:justify-between md:gap-8 items-center px-5 py-10  ">
            <div className="pt-6 md:pt-0 lg:w-[50%]">
              <Fade direction="left" triggerOnce>
                <h1 className="text-3xl md:text-4xl font-bold text-slate-950">
                  {" "}
                  Bir Billing Paragliding{" "}
                </h1>
              </Fade>
              <Fade direction="left" triggerOnce>
                <p className="py-4 text-sm md:text-base text-gray-600">
                  Welcome to Bir Billing, the paragliding capital of India and a
                  haven for adventure enthusiasts from around the globe! Nestled
                  in the scenic Dhauladhar Range of the Himalayas, Bir Billing
                  offers an unparalleled paragliding experience with its perfect
                  blend of stunning landscapes and ideal flying conditions. As
                  you prepare to launch from Billing, located at an altitude of
                  2,400 meters, you&apos;ll be greeted by panoramic views of
                  lush green valleys, dense forests, and distant snow-capped
                  peaks. The thrill of taking off and gliding effortlessly over
                  this breathtaking scenery is an adventure like no other.
                </p>
              </Fade>

              <Fade direction="left" triggerOnce>
                <Link href="/tour" className="pt-8">
                  <Button className="flex w-full text-white font-semibold  bg-blue-800 hover:bg-blue-600 ">
                    book your Quote
                  </Button>
                </Link>
              </Fade>
            </div>
            <Fade direction="right" triggerOnce>
              <Image
                src={BirMaskImg}
                width={1000}
                height={1000}
                alt="BirMaskImg"
                className="w-[100vw] lg:w-[50vw]  rounded h-[50vh] lg:h-[60vh]  object-cover object-center"
              />
            </Fade>
          </div>
        </section>

        <section>
          <div className=" h-full py-10  w-full px-5 relative overflow-hidden">
            {/* <div className="bg-gray-100 w-full h-[40vh] sm:h-[25vh] lg:h-[50vh] absolute top-0 -z-10"></div> */}

            <Image
              src={WorldMap}
              width={1000}
              height={1000}
              alt="Image paragliding"
              className="h-full w-full object-cover object-center  absolute top-0 -z-10"
            />

            <div className=" flex flex-col items-center justify-center z-20 ">
              <Fade direction="right" triggerOnce>
                <h1 className="text-3xl md:text-5xl text-center font-bold  py-10 md:max-w-sm md:mx-auto">
                  Why You Should Choose Us
                </h1>
              </Fade>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:pt-10 text-xs text-center lg:text-lg ">
                <Fade direction="up" triggerOnce>
                  <div className="flex flex-col border bg-white h-32 lg:h-56 w-32 lg:w-56 drop-shadow-lg shadow-lg  items-center justify-center p-2 rounded-lg">
                    <Image
                      src={Pilot}
                      width={1000}
                      height={1000}
                      alt="icons"
                      className="w-16 h-16 object-contain"
                    />
                    <p>Experienced Pilot</p>
                  </div>
                </Fade>

                <Fade direction="left" triggerOnce>
                  <div className="flex flex-col border lg:h-56 h-32 w-32 lg:w-56 bg-white drop-shadow-lg shadow-lg  items-center justify-center p-2 rounded-lg">
                    <Image
                      src={Equipments}
                      width={1000}
                      height={1000}
                      alt="icons"
                      className="w-16 h-16 object-contain"
                    />
                    <p>Best Equipments</p>
                  </div>
                </Fade>

                <Fade direction="down" triggerOnce>
                  <div className="flex flex-col border lg:h-56 h-32 w-32 lg:w-56 bg-white drop-shadow-lg shadow-lg  items-center justify-center p-2 rounded-lg">
                    <Image
                      src={Price}
                      width={1000}
                      height={1000}
                      alt="icons"
                      className="w-16 h-16 object-contain"
                    />
                    <p>Affordable Prices</p>
                  </div>
                </Fade>
                <Fade direction="right" triggerOnce>
                  <div className="flex flex-col border lg:h-56 lg:w-56 h-32 w-32 bg-white drop-shadow-lg shadow-lg  items-center justify-center p-2 rounded-lg">
                    <Image
                      src={Staff}
                      width={1000}
                      height={1000}
                      alt="icons"
                      className="w-16 h-16 object-contain"
                    />
                    <p>Experienced Staff</p>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </section>

        <section className=" px-5 bg-yellow-500 py-4">
          <div className="flex flex-col-reverse md:flex-row items-center justify-center md:max-w-7xl md:mx-auto">
            <Fade direction="left" triggerOnce>
              <div className="flex py-4 w-full lg:w-[70%] flex-col items-center ">
                <h1 className="text-2xl md:text-6xl text-center font-bold  md:pt-0">
                  Enroll in Sky Candy School of Paragliding Courses!
                </h1>
                <Link href="/course" className=" mt-6">
                  <Button className="flex w-56 text-sm md:text-base lg:w-96 bg-blue-900 hover:bg-green-600 ">
                    book your Quote
                  </Button>
                </Link>
              </div>
            </Fade>
            {/* <div className=" bg-green-500 rounded"></div> */}

            <Fade direction="right" triggerOnce>
              <div className="w-full">
                <Image
                  src={HomepageSection4}
                  width={1000}
                  height={1000}
                  alt="BirMaskImg"
                  className="w-full rounded-lg md:w-full h-[40vh] lg:h-[60vh] object-cover object-center "
                />
              </div>
            </Fade>
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
