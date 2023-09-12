import { Rtist, CMCPAC } from "@/assests";
import Link from 'next/link';

import Image from "next/image";

const Organizers = () => {
  return (
    <div className="flex flex-col justify-around items-center align-middle pt-5 mb-24 mt-8 ">
      <h1 className=" font-bold font-sans text-4xl p-8 text-white">
        Organizers
      </h1>
      <div className="flex flex-wrap items-center align-middle justify-around">
        <div className="flex flex-col justify-between items-center align-middle">
          <Image
            className="mx-20 my-20"
            src={Rtist}
            height={250}
            width={250}
            alt="Rtist"
          />
          <div className=" text-white rounded-xl font-semibold align-middle justify-center py-3 px-6 bg-[#C086EA] hover:bg-blue-600 transition duration-300">
            <a href="/rtist">About Rtist</a>
          </div>
        </div>

        <div className="flex flex-col justify-between items-center align-middle">
          <Image
            className="mx-20 my-20"
            src={CMCPAC}
            height={250}
            width={250}
            alt="CMCPAC"
          />
          <div className=" text-white rounded-xl font-semibold align-middle justify-center py-3 px-6 bg-[#C086EA] hover:bg-blue-600 transition duration-300">
            <Link href="/pac">About PAC</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organizers;
