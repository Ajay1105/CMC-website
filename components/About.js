const About = () => {
  return (
    <div className="flex flex-col w-4/5 mx-[10%] blurBlackground rounded-2xl justify-center items-center p-8">
      <h1 className=" font-bold font-sans text-4xl text-white p-4">About</h1>
      <div className="flex flex-col md:flex-row w-full">
        <div className="flex flex-col text-[#D4D0D3] flex-wrap sm:pt-12 sm:pb-12 sm:pl-12 sm:pr-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
            magna sem. Nullam scelerisque commodo erat. Praesent ac volutpat
            sapien, sed finibus arcu. Etiam venenatis imperdiet augue eget
            rutrum. Donec eu nunc eu neque commodo iaculis vel sed mi. Proin non
            condimentum purus. Suspendisse egestas lacinia erat, id fermentum
            quam scelerisque et. Phasellus dapibus nec enim id pulvinar. Nulla
            luctus nec diam ut pharetra.
          </p>

        </div>
        <div className="flex items-center align-middle justify-center flex-col">
          <div className="w-72 sm:w-96 mx-10 my-8 h-36 pl-4 bg-[#212631] rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
