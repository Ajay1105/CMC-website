import { about } from "@/assests";
import Link from 'next/link';

import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col w-4/5 mx-[10%] blurBlackground rounded-2xl justify-center items-center p-8">
      <h1 className=" font-bold font-sans text-4xl text-white p-4">About</h1>
      <div className="flex flex-col md:flex-row w-full">
        <div className="flex flex-col text-[#D4D0D3] flex-wrap text-justify sm:pt-12 sm:pb-12 sm:pl-12 sm:pr-4">
          <p>
            AI & Robotics is an emerging area of research in the field of
            Engineering and Medicine. There is a large demand for AI tools in
            the field of medicine such as advanced diagnostic tools, end-to-end
            drug discovery and development, improving communication between
            physician and patient, transcribing medical documents, telemedicine
            and robotics. Christian Medical College Ludhiana and Dr. B.R. Ambedkar
            National Institute of Technology, Jalandhar are jointly organizing
            an event hackathon aimed at making technological innovation in the
            field of Medicine. The future of medicine is to be shaped and formed
            by research and innovation. The event aims at boosting technological
            innovation in healthcare and wellness as a whole. 
            <br></br>
            The teams constituting of both medical and engineering students shall work to
            tackle problem statements with novel solutions. The hackathon aims
            to take advantage of this overlap between the medical and technology
            fields for the betterment of healthcare facilities on a global
            scale.
          </p>
        </div>
        
        <div className=" md: flex items-center align-middle justify-center flex-col m-8 p-4">
        <Image
        className="m-4"
        src={about}
        height={4000}
        width={4000}
        alt="about"
      />
        </div>
      </div>
    </div>
  );
};

export default About;
