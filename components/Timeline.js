const Timeline=()=>{
    return(
        <div id='schedule' className='flex flex-col justify-center items-center '>
        
        <h1 className=" font-bold font-sans text-4xl text-white pt-8">Timeline</h1>
            
            <div className='flex flex-col md:w-full py-8 justify-center items-center w-4/5'>
                <div className='flex flex-col text-white shadow-3xl font-medium sm:w-4/5 rounded-[12px]'>
                    <div className='flex flex-wrap justify-between my-4 px-8 py-6 blurBlackground '><div className="py-2">12 Sep 2023 to 30 Sep 2023</div><div className="py-2">Registration-1</div></div>
                    <div className='flex flex-wrap justify-between my-4 px-8 py-6 blurBlackground '><div className="py-2">1  Oct 2023 to 8 Oct 2023</div><div className="py-2">Registration-2</div></div>
                    <div className='flex flex-wrap justify-between my-4 px-8 py-6 blurBlackground '><div className="py-2">10 Oct 2023</div><div className="py-2">Final confirmation will be sent</div></div>
                    <div className='flex flex-wrap justify-between my-4 px-8 py-6 blurBlackground '><div className="py-2">20 Oct 2023</div><div className="py-2">Commence hacking</div></div>
                    <div className='flex flex-wrap justify-between my-4 px-8 py-6 blurBlackground '><div className="py-2">23 Oct 2023</div><div className="py-2">Final Presentation & Result Declaration</div></div>
                </div>
            </div>
            
        </div>
    )
}

export default Timeline;