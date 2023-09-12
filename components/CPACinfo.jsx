import Image from "next/image";
import {
  alz,
  tb,
  touch,
  silai,
  covid,
  cancer,
  buddy,
  hackathon,
} from "@/assests";

export default function CPACinfo() {
  const data = [
    {
      id: "0",
      imglink: alz,
      event: "Navigating Alzheimer's: Solving the Diagnostic puzzle",
    },
    {
      id: "1",
      imglink: buddy,
      event: "Buddy Behen Menstrual Awareness ",
    },
    {
      id: "2",
      imglink: covid,
      event: "Covid Awareness Event",
    },
    {
      id: "3",
      imglink: cancer,
      event:
        "Covid-19 and Breast Cancer Awareness Event at Khalsa College for Women",
    },
    {
      id: "4",
      imglink: tb,
      event: "Tuberculosis awareness event",
    },
    {
      id: "5",
      imglink: silai,
      event:
        "Covid and Reproductive Health Awareness Event (at Silai centre) of Udaan NGO.",
    },
  ];
  return (
    <>
      <div className="flex flex-col w-4/5 mx-[10%] blurBlackground rounded-2xl justify-center items-center p-8 mt-12">
        <h1 className=" font-bold font-sans text-4xl text-white p-4">
          About CMC-PAC
        </h1>
        <div className="flex flex-col text-[#D4D0D3] flex-wrap text-justify sm:pt-12 sm:pb-12 sm:pl-12 sm:pr-4">
          <p>
            Established in 2021, CMCL-PAC was founded with the primary objective
            of conducting awareness and outreach events to foster positive
            change in our community. We take pride in our wide base of about
            400+ medical students from Christian Medical College Ludhiana taking
            part in public health initiatives locally. The purpose of conducting
            academic events by the club is to increase awareness around public
            health problems and to increase the exposure of our students to the
            outside world. The club shall function to ensure that competitive
            academic events are conducted on an inter-college and national
            level. Our college has avenues that remain undiscovered by the
            students, by conducting workshops the club shall introduce the
            students to these and increase the skill level that you have in the
            medical field.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-stretch justify-evenly my-12">
  <h1 className="font-bold text-4xl text-white w-full text-center p-8 ">
    Previous Events
  </h1>
  {data.map((d) => (
    <div
      className="flex flex-wrap blurBlackground justify-center align-middle  rounded-2xl m-8 p-4 sm:w-1/2 lg:w-1/3"
      key={d.id}
    >
      <div className="w-full">
        <div> 
        <Image
          src={d.imglink}
          height={300}
          width={500}
          objectFit="cover"
          alt="image"
        />
        </div>
        
        <div> 
        <h1 className="text-lg text-center mt-4 text-white">{d.event}</h1>
        </div>
        
      </div>
    </div>
  ))}
</div>

    </>
  );
}
