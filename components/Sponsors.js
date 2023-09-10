import { Rtist, CMCPAC, devfolio, polygon, solana, replit, filecoin } from "@/assests";
import Image from "next/image";

const Sponsors = () => {
  return (
    <div className="flex flex-wrap justify-around items-center align-middle my-4">
      <div className="">
         <h1 className=" font-semibold font-sans text-4xl p-8 text-white">
        Sponsors
      </h1>
      </div>
     
      <Image
            className="mx-20 my-20"
            src={devfolio}
            height={250}
            width={250}
            alt="DEVFOLIO LOGO"
          />
          <Image
            className="mx-20 my-20"
            src={solana}
            height={250}
            width={250}
            alt="SOLANA LOGO"
          />
          <Image
            className="mx-20 my-20"
            src={replit}
            height={250}
            width={250}
            alt="REPLIT LOGO"
          />
          <Image
            className="mx-20 my-20"
            src={filecoin}
            height={250}
            width={250}
            alt="FILECOIN LOGO"
          />
          <Image
            className="mx-20 my-20"
            src={polygon}
            height={250}
            width={250}
            alt="POLYGON LOGO"
          />
      <h1 className=" text-5xl font-semibold text-white mb-20">
        More to be announced...
      </h1>
    </div>

    // <>
    //   <div className="flex flex-col justify-around items-center align-middle my-4">
    // <h1 className=" font-semibold font-sans text-4xl p-8 text-white">Sponsors</h1>
    // <h1 className=" font-semibold font-sans text-2xl p-8 text-white">Gold</h1>
    //   <div className="flex flex-wrap items-center align-middle justify-around">

    //     <Image
    //       className="mx-20 my-20"
    //       src={Rtist}
    //       height={250}
    //       width={250}
    //       alt="Rtist"
    //     />
    //     <Image
    //       className="mx-20 my-20"
    //       src={CMCPAC}
    //       height={250}
    //       width={250}
    //       alt="CMCPAC"
    //     />
    //   </div>
    //   <h1 className=" font-semibold font-sans text-2xl p-8 text-white">Silver</h1>
    //   <div className="flex flex-wrap items-center align-middle justify-around">
    //     <Image
    //       className="mx-10 my-10"
    //       src={Rtist}
    //       height={200}
    //       width={200}
    //       alt="Rtist"
    //     />
    //     <Image
    //       className="mx-10 my-10"
    //       src={CMCPAC}
    //       height={200}
    //       width={200}
    //       alt="CMCPAC"
    //     />
    //     <Image
    //       className="mx-10 my-10"
    //       src={Rtist}
    //       height={200}
    //       width={200}
    //       alt="Rtist"
    //     />
    //     <Image
    //       className="mx-10 my-10"
    //       src={CMCPAC}
    //       height={200}
    //       width={200}
    //       alt="CMCPAC"
    //     />
    //   </div>
    // </div>
    // </>
  );
};

export default Sponsors;
