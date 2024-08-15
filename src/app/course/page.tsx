import Image from "next/image";
import React from "react";
import paraTrans from "../../../public/SkyCandy/About.webp";
// import paraTrans from "../../../public/paraTrans.png";
import TCp1 from "../../../public/SkyCandy/TCP1.webp";
import TCp2 from "../../../public/SkyCandy/TCP2.webp";
import TCp3 from "../../../public/SkyCandy/g9.webp";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function pages() {
  return (
    <>
      <Navbar />
      <div className=" ">
        <section>
          <div className=" h-[30vh] md:h-[60vh] relative flex       ">
            <div className="flex flex-col md:gap-2  lg:pl-20  top-10 px-5 text-white items-start justify-center text-start w-full">
              <h1 className="text-2xl lg:text-5xl font-bold">
                Sky Candy School Of Paragliding
              </h1>
              <p className="text-base lg:text-xl font-bold md:mt-4">
                Course :- P1 + P2 Certification
              </p>
              <p className="text-base lg:text-xl font-bold">
                Duration :- 10 Days
              </p>
              <a
                href="https://wa.me/+919736333133?text=I'm%20interested%20in%20Paragliding%20course%20from%20you"
                target="_blank"
                className="flex items-center gap-4 text-lg font-bold text-white justify-center hover:bg-green-500 bg-green-500 duration-500 md:max-w-fit border pr-4 rounded-lg  md:mt-6 mt-4"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://www.vectorlogo.zone/logos/whatsapp/whatsapp-icon.svg"
                  width={30}
                  height={30}
                  alt="whatsapp icon"
                  className="p-2 md:w-10 rounded-lg bg-white"
                />
                <span>Chat with us</span>
              </a>
            </div>
            <div className="absolute bg-black opacity-[.5]  w-full  top-0 left-0  h-[30vh] md:h-[60vh] -z-10 object-cover"></div>
            <Image
              src={paraTrans}
              width={1000}
              height={1000}
              alt="courses"
              className="w-full absolute top-0 left-0  h-[30vh] md:h-[60vh] -z-20 object-cover "
            />
            {/* <Image
              src={paraTrans}
              width={1000}
              height={1000}
              alt="courses"
              className="w-[40vw] md:w-[30vw] h-[25vh] md:h-[50vh] absolute top-10 -right-1 md:right-20 rounded-lg object-conatin    "
            /> */}
            {/* <div className="w-full absolute  bottom-0 -z-10  rounded-lg object-cover object-center   ">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="#0099ff"
                  fill-opacity="1"
                  d="M0,160L34.3,144C68.6,128,137,96,206,80C274.3,64,343,64,411,90.7C480,117,549,171,617,165.3C685.7,160,754,96,823,106.7C891.4,117,960,203,1029,218.7C1097.1,235,1166,181,1234,160C1302.9,139,1371,149,1406,154.7L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
                ></path>
              </svg>
            </div> */}
          </div>
        </section>
        <section className=" p-4 bg-[#E8AF30] text-black">
          <h2 className="text-3xl mt-1 font-bold text-start">Course Details</h2>

          <div className="py-10 relative">
            <div className="md:w-full md:h-1 h-full w-1 bg-black absolute left-40 top-0 md:left-0 md:top-36  "></div>
            <div className="flex gap-6 flex-col md:flex-row justify-around items-center z-10">
              <Image
                src={TCp1}
                width={1000}
                height={1000}
                className="object-cover w-full md:w-[20vw] h-[30vh] rounded-lg z-10"
                alt="TCP1"
              />

              <Image
                src={TCp2}
                width={1000}
                height={1000}
                className="object-cover rounded-lg w-full md:w-[20vw] h-[30vh] z-10"
                alt="TCP1"
              />
              <Image
                src={TCp3}
                width={1000}
                height={1000}
                className="rounded-lg object-cover object-center w-full md:w-[20vw] h-[30vh]  border z-10"
                alt="TCP1"
              />
            </div>
          </div>

          <div className="flex flex-col-reverse md:flex-row gap-4 mt-4 max-w-7xl mx-auto items-center ">
            <div className="">
              {" "}
              <h3 className="text-xl font-bold">Days 1-3 :- Ground Handling</h3>
              <ul className="list-disc ml-8 text-sm">
                <li className="list-disc">
                  <strong>Introduction to Equipment:</strong> Understand the
                  components of paragliding gear, including the wing
                  (parachute), harness, helmet, and radio.
                </li>
                <li className="list-disc">
                  <strong>Wing Inflation Practice:</strong> Learn how to
                  properly inflate the wing, a crucial skill for takeoff. This
                  involves lifting the wing off the ground and keeping it stable
                  above you.
                </li>
                <li className="list-disc">
                  <strong>Control Techniques:</strong> Develop your ability to
                  manage the wing on the ground. This includes kiting, where you
                  control the wing while standing on the ground, which helps
                  build muscle memory and reflexes.
                </li>
                <li className="list-disc">
                  <strong>Launching and Landing Practice:</strong> Gain
                  confidence in launching (taking off) and landing techniques.
                  These are fundamental skills that will be refined throughout
                  your training.
                </li>
              </ul>
            </div>
          </div>
          <div className=" flex flex-col-reverse md:flex-row gap-4 mt-4 max-w-7xl mx-auto items-center">
            <div>
              <h3 className="text-xl font-bold">
                Days 4 :- Tandem Flight with Instructor
              </h3>
              <ul className="list-disc ml-8 text-sm">
                <li className="list-disc">
                  <strong>First Flight Experience:</strong> Take to the skies
                  with an experienced instructor in a tandem setup. This allows
                  you to experience flight dynamics without the pressure of
                  controlling the wing.
                </li>
                <li className="list-disc">
                  <strong>Building Confidence:</strong> Feel the sensation of
                  flying and understand how the wing reacts in the air, boosting
                  your confidence for solo flights.
                </li>
                <li className="list-disc">
                  <strong>Flight Dynamics Insight: </strong> Observe and learn
                  about controlling the paraglider in flight, including turns,
                  altitude control, and approach to landing.
                </li>
              </ul>
            </div>
          </div>
            <div className=" mt-4 max-w-7xl mx-auto items-center flex flex-col-reverse md:flex-row">
              <div className=" mt-4 max-w-7xl mx-auto items-center">
                <h3 className="text-xl font-bold my-4">
                  Days 5-10 :- Theory + Solo Flying (Instructor-Guided via
                  Radio)
                </h3>

                <h4 className="text-lg font-bold mt-4">Theoretical Lessons:</h4>
                <ul className="list-disc ml-10 text-sm">
                  <li className="list-disc">
                    <strong>Flight Mechanics:</strong> Learn about the
                    principles of flight, including how lift, drag, and gravity
                    affect your wing.
                  </li>
                  <li className="list-disc">
                    <strong>Weather Conditions:</strong> Understand how weather
                    impacts paragliding, including wind patterns, thermals, and
                    potential hazards.
                  </li>
                  <li className="list-disc">
                    <strong>Safety Procedures: </strong> Study essential safety
                    protocols to handle emergencies and ensure a safe flying
                    experience.
                  </li>
                </ul>
                <h4 className="text-lg font-bold mt-4">Solo Flights:</h4>
                <ul className="list-disc ml-10 text-sm">
                  <li className="list-disc">
                    <strong>Guided Takeoffs and Landings: </strong>Execute solo
                    flights with real-time guidance from your instructor via
                    radio. This support helps you refine your techniques in a
                    controlled and safe environment.
                  </li>
                  <li className="list-disc">
                    <strong>In-flight Maneuvers:</strong> Practice and master
                    various in-flight maneuvers, such as turns, speed control,
                    and maintaining a straight flight path.
                  </li>
                  <li className="list-disc">
                    <strong>Progressive Skill Development: </strong> Each flight
                    builds on the previous one, allowing you to gradually
                    increase your proficiency and confidence in flying
                    independently.
                  </li>
                </ul>
              </div>
            </div>
          

          <div className=" mt-4 max-w-7xl mx-auto items-center">
            <div>
              <h2 className="text-xl font-bold">What we provide</h2>
              <ul className="list-disc ml-8 text-sm">
                <li className="list-disc">
                  <strong>Paragliding Equipment:</strong> All necessary gear is
                  provided, including a high-quality wing, harness, helmet, and
                  radio for communication.
                </li>
                <li className="list-disc">
                  <strong>Transportation:</strong> Enjoy convenient shuttle
                  service from Bir to Billing, ensuring you arrive at the launch
                  site comfortably and on time
                </li>
                <li className="list-disc">
                  <strong>Insurance: </strong>Comprehensive coverage for the
                  entire duration of the course, providing peace of mind and
                  financial protection in case of accidents or incidents.
                </li>
              </ul>
            </div>
          </div>

          <div className=" mt-4 max-w-7xl mx-auto items-center">
            <div>
              <h2 className="text-xl font-bold">
                Why Choose Sky Candy School of Paragliding?
              </h2>
              <ul className="list-disc ml-8 text-sm">
                <li className="list-disc">
                  <strong>Expert Instructors: </strong>ur team consists of
                  highly experienced and certified instructors dedicated to your
                  safety and learning.
                </li>
                <li className="list-disc">
                  <strong>Comprehensive Training:</strong> Our course is
                  designed to equip you with the skills and knowledge required
                  to become a competent P1 and P2 certified pilot.
                </li>
                <li className="list-disc">
                  <strong>Beautiful Location: </strong>Train and fly in the
                  stunning landscape of Bir Billing, renowned for its excellent
                  paragliding conditions.
                </li>
              </ul>
            </div>
          </div>

          <p className=" px-2 flex items-center justify-center font-bold text-justify mt-6">
            Join us for an unforgettable journey into the skies with Sky Candy
            School of Paragliding. Book your course now and take the first step
            towards becoming a certified paragliding pilot!
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default pages;
