const Timeline=()=>{
    return(
        <div id='schedule' className='flex flex-col justify-center items-center '>
        
        <h1 className=" font-bold font-sans text-4xl text-white pt-8">Timeline</h1>
            
            <div className='flex flex-col md:w-full py-8 justify-center items-center w-4/5'>
                <div className='flex flex-col text-white shadow-3xl font-medium sm:w-4/5 rounded-[12px]'>
                    <div className='flex flex-wrap justify-between my-4 px-8 py-6 blurBlackground '><div className="pb-4">09 Sep 2023 | 5:00 PM</div><div>Hackathon registration starts</div></div>
                    <div className='flex flex-wrap justify-between my-4 px-8 py-6 blurBlackground '><div className="pb-4">30 Sep 2023 | 5:00 PM</div><div>Hackathon registration closes</div></div>
                    <div className='flex flex-wrap justify-between my-4 px-8 py-6 blurBlackground '><div className="pb-4">13 Oct 2023 | 5:00 PM</div><div>Introductory Event & Pitching of Ideas</div></div>
                    <div className='flex flex-wrap justify-between my-4 px-8 py-6 blurBlackground '><div className="pb-4">14 Oct 2023 | 5:00 PM</div><div>Pitch Practice sessions</div></div>
                    <div className='flex flex-wrap justify-between my-4 px-8 py-6 blurBlackground '><div className="pb-4">15 Oct 2023 | 5:00 PM</div><div>Final Presentation & Result Declaration</div></div>
                </div>
            </div>
            
        </div>
    )
}

export default Timeline;