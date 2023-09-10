const Prizes = () => {
  return (
    <div className="flex flex-col justify-center items-center align-middle">
      
      <h1 className=" font-bold font-sans text-4xl text-white pt-12">Prizes worth</h1>
      <h1 className=" font-bold font-sans text-4xl text-[#C086EA] pt-4 pb-12">Rs 72000</h1>
      
      <div className="flex flex-wrap justify-center items-center gap-x-20">
      <div className=" flex flex-col w-80 mx-5 my-5 blurBlackground outline-2 rounded-xl justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:border-white duration-300 ">
          <h1 className="text-white text-4xl font-bold font-sans px-8 pt-8">
            Rs 30000
          </h1>
          <h3 className="text-white text-4xl font-sans">
            worth of prizes
          </h3>
          <h2 className="text-white font-bold text-4xl font-sans p-12">
          1st
          </h2>   
        </div>
        <div className=" flex flex-col w-80 mx-5 my-5 blurBlackground outline-2 rounded-xl justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:border-white duration-300 ">
          <h1 className="text-white text-4xl font-bold font-sans px-8 pt-8">
            Rs 24000
          </h1>
          <h3 className="text-white text-4xl font-sans">
            worth of prizes
          </h3>
          <h2 className="text-white font-bold text-4xl font-sans p-12">
            2nd
          </h2>   
        </div>
        <div className=" flex flex-col w-80 mx-5 my-5 blurBlackground outline-2 rounded-xl justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:border-white duration-300 ">
          <h1 className="text-white text-4xl font-bold font-sans px-8 pt-8">
            Rs 18000
          </h1>
          <h3 className="text-white text-4xl font-sans">
            worth of prizes
          </h3>
          <h2 className="text-white font-bold text-4xl font-sans p-12">
          3rd
          </h2>   
        </div>
      </div>
    </div>
  );
};

export default Prizes;
