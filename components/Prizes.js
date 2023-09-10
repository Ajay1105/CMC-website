const Prizes = () => {
  return (
    <div className="flex flex-col justify-center items-center align-middle">
      
      <h1 className=" font-bold font-sans text-4xl text-white pt-12">Prizes worth</h1>
      <h1 className=" font-bold font-sans text-4xl text-[#C086EA] pt-4 pb-12">Rs 72000</h1>
      
      <div className="flex flex-wrap justify-center items-center gap-x-20">
        <div className=" h-96 w-80 mx-5 my-5 blurBlackground outline-2 rounded-xl flex justify-center items-center text-white">
          1st
        </div>
        <div className=" h-96 w-80 mx-5 my-5 blurBlackground outline-2 rounded-xl flex justify-center items-center text-white">
          2nd
        </div>
        <div className=" h-96 w-80 mx-5 my-5 blurBlackground outline-2 rounded-xl flex justify-center items-center text-white">
          3rd
        </div>
      </div>
    </div>
  );
};

export default Prizes;
