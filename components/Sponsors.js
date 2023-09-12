import {
  Rtist,
  CMCPAC,
  devfolio,
  polygon,
  solana,
  replit,
  filecoin,
  amura,
  mice2,
} from "@/assests";
import Image from "next/image";

const Sponsors = () => {
  return (
    <div className="flex flex-col flex-wrap justify-around items-center align-middle my-4">
      <h1 className=" font-bold font-sans text-4xl p-12 text-white">
        Sponsors
      </h1>
      <div className="flex flex-row flex-wrap justify-around items-center align-middle my-4">
      <div className="box ml-16 mr-16 mt-16 mb-16 glowing rounded-lg">
      <Image
      className="rounded-lg"
      src={amura}
      height={250}
      width={250}
      alt="AMURA LOGO"
      />
      </div>
        <div className=" ml-16 mr-16 box glowing rounded-lg">
        <Image
        className="rounded-lg"
        src={mice2}
        height={250}
        width={250}
        alt="MICE LOGO"
        />
        </div>
      </div>
      <div className="flex flex-wrap justify-around items-center align-middle">
        <Image
          className="mx-10 my-10"
          src={devfolio}
          height={250}
          width={250}
          alt="DEVFOLIO LOGO"
        />
        <Image
          className="mx-10 my-10"
          src={solana}
          height={250}
          width={250}
          alt="SOLANA LOGO"
        />
        <Image
          className="mx-10 my-10"
          src={replit}
          height={250}
          width={250}
          alt="REPLIT LOGO"
        />
        <Image
          className="mx-10 my-10"
          src={filecoin}
          height={250}
          width={250}
          alt="FILECOIN LOGO"
        />
        <Image
          className="mx-10 my-10"
          src={polygon}
          height={250}
          width={250}
          alt="POLYGON LOGO"
        />
      </div>
      <h1 className=" text-3xl font-semibold text-white pt-12 mb-24">
        To be announced...
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
