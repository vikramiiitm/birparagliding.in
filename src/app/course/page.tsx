import Image from "next/image";
import React from "react";
import paraTrans from "../../../public/paraTrans.png";
import TCp1 from "../../../public/SkyCandy/TCP1.webp";
import TCp2 from "../../../public/SkyCandy/TCP2.webp";
import TCp3 from "../../../public/SkyCandy/TCP3.webp";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function pages() {
  return (
    <>
      <Navbar />
      <div className="py-10">
        <section>
          <div className="max-w-7xl h-full md:h-96 mx-auto flex flex-col-reverse md:flex-row py-10 relative px-5 z-10">
            <div className="flex flex-col gap-3 pt-20 md:pt-0">
              <h1 className="text-3xl lg:text-5xl font-bold">
                Sky Candy School Of Paragliding
              </h1>
              <p className="text-lg font-bold">
                Course :- P1 + P2 Certification
              </p>
              <p className="text-lg font-bold">Duration :- 10 Days</p>
              <a
                href="http://"
                target="_blank"
                className="flex items-center gap-4 text-lg font-bold text-black border justify-center hover:bg-green-500 duration-500 md:max-w-fit py-3 px-6 rounded-lg  mt-6"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://www.vectorlogo.zone/logos/whatsapp/whatsapp-icon.svg"
                  width={30}
                  height={30}
                  alt="whatsapp icon"
                />
                <span>Chat with us</span>
              </a>
            </div>
            <Image
              src={paraTrans}
              width={900}
              height={900}
              alt="courses"
              className="absolute w-56 md:w-[40vw]  top-0 right-0 md:right-32 -z-20"
            />
          </div>
        </section>
        <section className="px-5">
          <h2 className="text-3xl lg:text-4xl font-bold text-center">
            Course Details
          </h2>
          <div className="flex flex-col-reverse md:flex-row gap-4 mt-4 max-w-7xl mx-auto items-center">
            <div>
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
            <Image
              src={TCp1}
              width={1000}
              height={1000}
              className="object-cover rounded-lg md:w-[20vw]"
              alt="TCP1"
            />
          </div>
          <div className="flex flex-col-reverse md:flex-row gap-4 mt-4 max-w-7xl mx-auto items-center">
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
            <Image
              src={TCp2}
              width={1000}
              height={1000}
              className="object-cover rounded-lg md:w-[40vw]"
              alt="TCP1"
            />
          </div>
          <div className=" mt-4 max-w-7xl mx-auto items-center">
            <h3 className="text-xl font-bold my-4">
              Days 5-10 :- Theory + Solo Flying (Instructor-Guided via Radio)
            </h3>
            <Image
              src={TCp3}
              width={1000}
              height={1000}
              className="rounded-lg object-cover"
              alt="TCP1"
            />

            <h4 className="text-lg font-bold mt-4">Theoretical Lessons:</h4>
            <ul className="list-disc ml-10 text-sm">
              <li className="list-disc">
                <strong>Flight Mechanics:</strong> Learn about the principles of
                flight, including how lift, drag, and gravity affect your wing.
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
                flights with real-time guidance from your instructor via radio.
                This support helps you refine your techniques in a controlled
                and safe environment.
              </li>
              <li className="list-disc">
                <strong>In-flight Maneuvers:</strong> Practice and master
                various in-flight maneuvers, such as turns, speed control, and
                maintaining a straight flight path.
              </li>
              <li className="list-disc">
                <strong>Progressive Skill Development: </strong> Each flight
                builds on the previous one, allowing you to gradually increase
                your proficiency and confidence in flying independently.
              </li>
            </ul>
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
