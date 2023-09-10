import Image from "next/image";
import { Glow } from "@/assests";

import {
  Navbar,
  Prize,
  Organizers,
  Timeline,
  FAQ,
  About,
  Hero,
  Sponsors,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <div className="relative bg-[#010E15] overflow-hidden">
      <Image
        alt="alr"
        src={Glow}
        width={600}
        height={600}
        className="absolute top-[18%] md:left-[40%] z--1 overflow-hidden rotate-180"
      />
      <Image
        alt="alr"
        src={Glow}
        width={500}
        height={500}
        className="absolute top-[23%] -left-10 z--1 overflow-hidden rotate-90"
      />
      <Image
        alt="alr"
        src={Glow}
        width={500}
        height={500}
        className="absolute top-[58%] -left-10 z--1 overflow-hidden rotate-90"
      />
   
      <Image
        alt="alr"
        src={Glow}
        width={600}
        height={600}
        className="absolute top-[48%] right-[-10%] z--1 overflow-hidden -rotate-90"
      />
      <Image
        alt="alr"
        src={Glow}
        width={500}
        height={500}
        className="absolute top-[90%] right-0 md:right-[30%] lg:right-[40%] z-0 overflow-hidden "
      />
      <div className="z-10 relative">
        <Navbar />
        <Hero />
        <div id="about">
          <About />
        </div>
        <Prize />
        <div id="timeline">
          <Timeline />
        </div>
          <Sponsors />
        <div id="faq">
          <FAQ />
        </div>
        <div id="organizers">
          <Organizers />
        </div>
        <Footer />
      </div>
    </div>
  );
}
