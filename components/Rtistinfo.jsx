import Image from "next/image";
import { amaze, into, line } from "@/assests";

export default function Rtistinfo() {
  const data = [
    {
      id: "0",
      imglink: amaze,
      event: "Amaze us",
    },
    {
      id: "1",
      imglink: into,
      event: "Introduction to Rtist ",
    },
    {
      id: "2",
      imglink: line,
      event: "Line following robot",
    },
  ];
  return (
    <div className="flex flex-col w-4/5 mx-[10%] blurBlackground rounded-2xl justify-center items-center p-8">
      <h1 className=" font-bold font-sans text-4xl text-white p-4">
        About Rtist
      </h1>
      <div className="flex flex-col text-[#D4D0D3] flex-wrap text-justify sm:pt-12 sm:pb-12 sm:pl-12 sm:pr-4">
        <p>
          A diverse group of over-enthused robotics nerds who find roots across
          all academic departments of the institute.
        </p>
      </div>

      <div className="">
        {data.map((d) => (
          <div className="" key={d.id}>
            <div className="">
              <div className="Atitle">
                <Image src={d.imglink} height={200} width={200} alt="image" />
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
