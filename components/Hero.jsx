"use client"
import { MedicalShield, Arduino, RoboticArm, devfolio } from "@/assests";
import { Devfolio } from "./index.js";

import dynamic from "next/dynamic";

const NoSSR = dynamic(() => import("./Devfolio.jsx"), { ssr: false });

import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="relative flex flex-col justify-around items-center align-middle lg:mt-5 lg:m-20 h-fit">
        <div className="absolute z-10 top-0 left-0 h-20 w-24 md:h-32 md:w-40">
          <Image className="mx-0 my-95" src={MedicalShield} alt="MedShield" />
        </div>

        <div className="absolute z-10 top-0 right-0 h-20 w-24 md:h-32 md:w-40">
          <Image className="mx-0 my-95" src={Arduino} alt="Arduino" />
        </div>

        <div className="absolute z-10 bottom-10 right-0 h-20 w-24 hidden md:block">
          <Image className="mx-0 my-95" src={RoboticArm} alt="RoboticArm" />
        </div>

        <div className="flex text-white md:text-7xl font-bold px-23 mx-3 mt-40 translate-y-204 justify-center align-middle text-center">
          <h1 className="text-7xl">HACKING HEALTH</h1>
        </div>
        <div className="flex text-white text-xl md:text-3xl font-normal px-23 mx-3 mt-7 translate-y-204 justify-center align-middle text-center">
          Code a Better Future at Hacking Health!
        </div>
      </div>

      <div className="flex flex-wrap flex-col mb-40 mt-40 align-middle text-center justify-center">
        {/* <Devfolio/> */}
        <a href="https://forms.gle/hbQEfFDaj5E3MU2q8">
          <button className="text-white rounded-xl font-semibold align-middle justify-center py-3 px-6 bg-[#C086EA] hover:bg-blue-600 transition duration-300">
            Register
          </button>
        </a>
        
      </div>
    </>
  );
};

export default Hero;
