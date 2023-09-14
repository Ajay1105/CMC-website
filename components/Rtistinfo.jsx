import Image from "next/image";
import { amaze, intro, line, lumen, smart } from "@/assests";

export default function Rtistinfo() {
  const data = [
    {
      id: "0",
      imglink: amaze,
      event: "Amaze us",
    },
    {
      id: "1",
      imglink: intro,
      event: "Introduction to Rtist ",
    },
    {
      id: "2",
      imglink: line,
      event: "Line following robot",
    },
    {
      id: "3",
      imglink: lumen,
      event: "Lumen Tracer",
    },
    {
      id: "4",
      imglink: smart,
      event: "Smart Tank",
    },
  ];
  return (
    <>
      <div className="flex flex-col w-4/5 mx-[10%] blurBlackground rounded-2xl justify-center items-center p-8 mt-12">
        <h1 className=" font-bold font-sans text-4xl text-white p-4">
          About Rtist NITJ
        </h1>
        <div className="flex flex-col text-[#D4D0D3] flex-wrap text-justify sm:pt-12 sm:pb-12 sm:pl-12 sm:pr-4">
          <p>
            Rtist is the official robotics club of NIT JALANDHAR. The club is a
            dynamic and innovative community of passionate students dedicated to
            the exciting world of robotics. With a shared love for technology,
            automation, and problem-solving, the club serves as a hub for
            like-minded individuals to collaborate, learn, and explore the
            fascinating realm of robotics. From designing and building robots
            for competitions to hosting workshops and outreach events, the club
            provides a platform for students to develop their technical skills,
            foster creativity, and deepen their understanding of robotics and
            artificial intelligence.Within the club, members often engage in
            hands-on projects, ranging from building autonomous vehicles and
            robotic arms to developing computer vision systems and AI-driven
            solutions.
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
            <div className="w-full flex flex-col justify-center align-middle items-center">
              <div>
                <Image
                  src={d.imglink}
                  height={300}
                  width={500}
                  alt="image"
                />
              </div>

              <div>
                <h1 className="text-lg text-center mt-4 text-white">
                  {d.event}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
