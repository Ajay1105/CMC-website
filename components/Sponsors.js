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
  navan,
  orangewood,
  Hll,
  Amsa,
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
          <a href="https://amura.ai/">
            <Image
              className="rounded-lg"
              src={amura}
              height={250}
              width={250}
              alt="AMURA LOGO"
            />
          </a>
        </div>
        <div className=" ml-16 mr-16 box glowing rounded-lg">
          <a href="https://www.micelabs.in/">
            <Image
              className="rounded-lg"
              src={mice2}
              height={250}
              width={250}
              alt="MICE LOGO"
            />
          </a>
        </div>
        <div className=" ml-16 mt-10 mr-16 box glowing rounded-lg">
          <a href="https://www.orangewood.co/">
            <Image
              className="rounded-lg"
              src={orangewood}
              height={250}
              width={250}
              alt="MICE LOGO"
            />
          </a>
        </div>
      </div>
      <div className="flex flex-wrap justify-around items-center align-middle">
        <a href="https://www.lifecarehll.com/">
          <Image
            className="mx-10 my-10"
            src={Hll}
            height={250}
            width={250}
            alt="DEVFOLIO LOGO"
          />
        </a>
        <a href="https://navan.ai/">
          <Image
            className="mx-10 my-10"
            src={navan}
            height={250}
            width={250}
            alt="DEVFOLIO LOGO"
          />
        </a>
        <a href="https://www.amsaindia.in/">
          <Image
            className="mx-10 my-10"
            src={Amsa}
            height={250}
            width={250}
            alt="DEVFOLIO LOGO"
          />
        </a>
        <a href="https://devfolio.co/">
          <Image
            className="mx-10 my-10"
            src={devfolio}
            height={250}
            width={250}
            alt="DEVFOLIO LOGO"
          />
        </a>
        <a href="https://solana.com/">
          <Image
            className="mx-10 my-10"
            src={solana}
            height={250}
            width={250}
            alt="SOLANA LOGO"
          />
        </a>
        <a href="https://replit.com/">
          <Image
            className="mx-10 my-10"
            src={replit}
            height={250}
            width={250}
            alt="REPLIT LOGO"
          />
        </a>
        <a href="https://filecoin.io/">
          <Image
            className="mx-10 my-10"
            src={filecoin}
            height={250}
            width={250}
            alt="FILECOIN LOGO"
          />
        </a>
        <a href="https://polygon.technology/home">
          <Image
            className="mx-10 my-10"
            src={polygon}
            height={250}
            width={250}
            alt="POLYGON LOGO"
          />
        </a>
      </div>
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
