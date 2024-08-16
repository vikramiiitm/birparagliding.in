"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
import Sec2 from "../../public/SkyCandy/Sec2.jpg";
import Pilot from "../../public/ParaIcon.png";
import Equipments from "../../public/home/paraG.png";
import Price from "../../public/home/rupee.png";
import Staff from "../../public/home/customer.png";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorldMap from "../../public/home/WorldMap.png";

import { Fade } from "react-awesome-reveal";

import Pattern from "../../public/pattern.jpg";
import Vineet from "../../public/testimonialsImgs/vineet.jpg"
import Apurva from "../../public/testimonialsImgs/Apurva.jpg";
import Vikram from "../../public/testimonialsImgs/Vikram.jpg";
import { useState } from "react";


// import EmblaCarousel from '@/components/Carousel/Carousel';








const testimonials = [
  {
    img: Vineet,
    name: "Vineet",
    review:
      "This was my first paragliding experience, and I was both nervous and excited. As soon as I started gliding through the winds, it felt like I was flying and time slowed down. A big thank you to Sky Candy for ensuring my safety throughout the entire journey.",
  },

  {
    img: Apurva,
    name: "Apurva",
    review: `Had an incredible experience with pilot Sunny! His exceptional handling skills and extensive experience truly made it an awesome adventure. Paragliding had always been a dream of mine, and finally taking the plunge with him was beyond words. The sensation of flying was surreal! Every aspect of the experience was simply outstanding.
`,
  },
  {
    img: Vikram,
    name: "Vikram",
    review: `Best flying experience. gliders were helpful and made sure we have the best time flying. Sky Candy is the best in bir.`,
  },
  
  {
    img: Vikram,
    name: "Vikram",
    review: `Best flying experience. gliders were helpful and made sure we have the best time flying. Sky Candy is the best in bir.`,
  },
  
  {
    img: Vikram,
    name: "Vikram",
    review: `Best flying experience. gliders were helpful and made sure we have the best time flying. Sky Candy is the best in bir.`,
  },
  
  {
    img: Vikram,
    name: "Vikram",
    review: `Best flying experience. gliders were helpful and made sure we have the best time flying. Sky Candy is the best in bir.`,
  },
  
];
















function Page() {
  // const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();


  return (
    <>
      <Navbar />
      <div>
        <section className="relative  w-full h-full  flex justify-between overflow-hidden items-center  flex-col-reverse lg:flex-row">
          <div className=" px-10 pt-0 top-[60px] md:pt-36 text-center absolute w-full flex-col flex h-full items-center justify-center gap-3 md:gap-10">
            <Fade direction="left" triggerOnce>
              <h1
                className="text-2xl lg:text-5xl text-center font-bold text-white uppercase"
                style={{ textShadow: "4px 4px 10px black" }}
              >
                See The World Like A Bird Glide With US
              </h1>
            </Fade>

            <Fade direction="right" triggerOnce>
              <Button
                onClick={() => {
                  router.push("/tour");
                }}
                className="flex w-full h-8 md:h-full lg:w-96 bg-blue-800 hover:bg-blue-600 uppercase"
              >
                book your Quote
              </Button>
            </Fade>
          </div>

          <video
            src="../../HeroSection.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[40vh] md:h-[80vh] object-cover -z-10"
          />

          {/* <video
            width="320"
            height="240"
            controls
            preload="none"
            className="w-full h-[40vh] md:h-[80vh] object-cover -z-10"
          >
            <source src="../../video.mp4" type="video/mp4" />
          </video> */}
        </section>




        {/* <section className="h-[80vh]  relative">
          <Image
            src={Sec2}
            width={1000}
            height={1000}
            alt="BirMaskImg"
            className="w-full h-[80vh] object-cover left-0 object-center   absolute "
          />
          <Image
            src={Pattern}
            width={1000}
            height={1000}
            alt="BirMaskImg"
            className="w-full h-[40vh] lg:h-[60vh] object-cover left-0 object-center absolute top-0 -z-10 opacity-20"
          />
          <div className="flex h-full pb-10 justify-center items-end">
            <Fade direction="left" triggerOnce>
              <h1 className="text-center text-xl md:text-4xl  font-bold p-2 md:p-4 bg-gradient-to-tr from-[#F1C76B] to-[#DFA018] border rounded-[30px]  uppercase">
                Fly Beyond Limits With Sky Candy
              </h1>
            </Fade>
          </div>
        </section> */}








        <section className="bg-[#E8AF30] ">
          <div className="  flex flex-col-reverse lg:flex-row md:justify-between md:gap-8 items-center  ">
            <div className="pt-6 md:pt-0 lg:w-[50%] px-5 py-10 flex flex-col justify-center md:mx-auto">
              <Fade direction="left" triggerOnce>
                <h1 className="text-3xl md:text-4xl font-bold text-slate-950 uppercase">
                  {" "}
                  Bir Billing Paragliding{" "}
                </h1>
              </Fade>
              <Fade direction="left" triggerOnce>
                <p className="py-4 text-sm md:text-base text-gray-800 ">
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
                <Button
                  onClick={() => {
                    router.push("/tour");
                  }}
                  className="flex  w-full text-white font-semibold  bg-blue-800 hover:bg-blue-600 uppercase"
                >
                  book your Quote
                </Button>
              </Fade>
            </div>
            <Fade direction="right" triggerOnce>
              <Image
                src={BirMaskImg}
                width={1000}
                height={1000}
                alt="BirMaskImg"
                className="w-[100vw] lg:w-[45vw]   h-[50vh] lg:h-[60vh]  object-cover object-center"
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
                <h1 className="text-3xl md:text-4xl text-center font-bold  py-10 md:max-w-md md:mx-auto uppercase">
                  Why You Should Choose Us
                </h1>
              </Fade>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:pt-10 text-xs text-center lg:text-lg ">
                <Fade direction="up" triggerOnce>
                  <div className="flex flex-col border bg-gradient-to-bl from-[#F1C76B] to-[#DFA018] h-32 lg:h-56 w-32 lg:w-56 drop-shadow-lg shadow-lg  items-center justify-center p-2 rounded-lg">
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
                  <div className="flex flex-col border lg:h-56 h-32 w-32 lg:w-56 bg-gradient-to-bl from-[#F1C76B] to-[#DFA018] drop-shadow-lg shadow-lg  items-center justify-center p-2 rounded-lg">
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
                  <div className="flex flex-col border lg:h-56 h-32 w-32 lg:w-56 bg-gradient-to-bl from-[#F1C76B] to-[#DFA018] drop-shadow-lg shadow-lg  items-center justify-center p-2 rounded-lg">
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
                  <div className="flex flex-col border lg:h-56 lg:w-56 h-32 w-32 bg-gradient-to-bl from-[#F1C76B] to-[#DFA018] drop-shadow-lg shadow-lg  items-center justify-center p-2 rounded-lg">
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

        <section className="  bg-[#E8AF30] ">
          <div className="flex flex-col-reverse md:flex-row items-center justify-center ">
            <Fade direction="left" triggerOnce>
              <div className="flex  w-full lg:w-[80%] flex-col items-center lg:mx-auto py-10">
                <h1 className="text-2xl md:text-6xl text-center font-bold uppercase  md:pt-0">
                  Enroll in Sky Candy School of Paragliding Courses!
                </h1>
                <Button
                  onClick={() => {
                    router.push("/course");
                  }}
                  className="flex mt-4 w-56 text-sm md:text-base lg:w-96 bg-blue-900 hover:bg-blue-600 uppercase"
                >
                  book your Quote
                </Button>
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
                  className="w-full md:w-[80vw]  h-full object-cover object-center"
                />
              </div>
            </Fade>
          </div>
        </section>

        <section className="py-10 px-5 ">
          <h1 className="text-3xl md:text-4xl text-center font-bold uppercase underline">
            Review
          </h1>
          <div className=" py-10 overflow-hidden">
            <Carousel
              opts={{
                align: "center",
              }}
              className=" max-w-sm  md:max-w-[90rem] mx-auto  "
             
             
            >
              <CarouselContent>
                {testimonials.map((props, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-1 md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="">
                      <Card className="h-[60vh] md:w-[25vw] flex justify-center items-center  bg-gradient-to-t from-[#E8AF30] to-[#ebc245] rounded hover:scale-110 duration-500">
                        <CardContent className="flex flex-col  items-center justify-center  gap-4 p-4">
                         
                          <div className="flex flex-col items-center justify-center ">
                            <Image
                              src={props.img}
                              width={1000}
                              height={1000}
                              alt="BirMaskImg"
                              className="w-32 h-32 rounded-full object-cover object-center"
                            />
                            <p className="text-md font-bold">{props.name}</p>
                          </div>
                          <p className="text-base font-medium italic ">
                            {" "}
                            <q>{props.review}</q>{" "}
                          </p>
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
        
          {/* <div className="hidden md:block">
            <EmblaCarousel />
          </div> */}
        </section>

      </div>
      <Footer />
    </>
  );
}

export default Page;

