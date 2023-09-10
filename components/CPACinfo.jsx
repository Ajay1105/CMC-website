import Image from "next/image";

export default function CPACinfo() {
  const data = [
    {
      id: "0",
      imglink: " ",
      event: "Navigating Alzheimer's: Solving the Diagnostic puzzle",
    },
    {
      id: "1",
      imglink: " ",
      event: "Buddy Behen Menstrual Awareness ",
    },
    {
      id: "2",
      imglink: " ",
      event: "Covid Awareness Event",
    },
    {
      id: "3",
      imglink: " ",
      event:
        "Covid-19 and Breast Cancer Awareness Event at Khalsa College for Women",
    },
    {
      id: "4",
      imglink: " ",
      event: "Tuberculosis awareness event",
    },
    {
      id: "5",
      imglink: " ",
      event:
        "Covid and Reproductive Health Awareness Event (at Silai centre) of Udaan NGO.",
    },
  ];
  return (
    <div className="flex flex-col w-4/5 mx-[10%] blurBlackground rounded-2xl justify-center items-center p-8">
      <h1 className=" font-bold font-sans text-4xl text-white p-4">
        About CMC-PAC
      </h1>
      <div className="flex flex-col text-[#D4D0D3] flex-wrap text-justify sm:pt-12 sm:pb-12 sm:pl-12 sm:pr-4">
        <p>
          Established in 2021, CMCL-PAC was founded with the primary objective
          of conducting awareness and outreach events to foster positive change
          in our community. We take pride in our wide base of about 400+ medical
          students from Christian Medical College Ludhiana taking part in public
          health initiatives locally. The purpose of conducting academic events
          by the club is to increase awareness around public health problems and
          to increase the exposure of our students to the outside world. The
          club shall function to ensure that competitive academic events are
          conducted on an inter-college and national level. Our college has
          avenues that remain undiscovered by the students, by conducting
          workshops the club shall introduce the students to these and increase
          the skill level that you have in the medical field.
        </p>
      </div>

      <div className="">
        {data.map((d) => (
          <div className="" key={d.id}>
            <div className="">
              
              <div className="Atitle">
                <img className="">{d.imglink}</img>
              </div>

              <div className="">
                <h1 className="">{d.event}</h1>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
