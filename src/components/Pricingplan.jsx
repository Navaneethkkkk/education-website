import React from "react";

function Pricingplan() {
  return (
    <>
      <div id="service" className=" flex items-center justify-center flex-col gap-4 w-[100%] h-[100vh] bg-white px-24 ">
        <h1 className="text-5xl font-serif">Premium Pricing Plan</h1>
        <h2 className="text-[1rem] font-sans ">
          Unlock elite tech servises with premium pricing and get ahead of the
          compitition
        </h2>

        <div className="flex flex-row w-[100%] gap-10 pt-11 ">
          <div className="w-[30%] h-[65vh]   drop-shadow-2xl rounded-md    ">
            <div className=" w-[100%] h-[20vh] border-b bg-white rounded-t-md flex  flex-col justify-center items-center font-bold">
                <h1 className="font-serif">Regular Member</h1>
                <p className="">$50</p>
            </div>
            <div className=" w-[100%] h-[30vh] bg-white rounded-b-md font-serif p-6 hover:scale-101 hover:drop-shadow-2xl transition-all ">
                <p>United Access to the course</p>
                <p>Customer Suport</p>
                <p>Personal Mentor</p> 
                <p>Standard Option</p>
                <p>5 Class per week</p>
                <div className="flex  justify-center ">
                    <button className="bg-violet-600 w-full h-12 rounded-md text-white mt-7  hover:bg-green-900">JOIN</button>
                </div>
            </div>
            

            
          </div>
          <div className="w-[30%] h-[65vh]   drop-shadow-2xl rounded-md    ">
            <div className=" w-[100%] h-[20vh] border-b bg-white rounded-t-md flex  flex-col justify-center items-center font-bold">
                <h1 className="font-serif">Regular Member</h1>
                <p className="">$70</p>
            </div>
            <div className=" w-[100%] h-[30vh] bg-white rounded-b-md font-serif p-6 hover:scale-101 hover:drop-shadow-2xl transition-all ">
                <p>United Access to the course</p>
                <p>Customer Suport</p>
                <p>Personal Mentor</p> 
                <p>Standard Option</p>
                <p>5 Class per week</p>
                <div className="flex  justify-center ">
                    <button className="bg-violet-600 w-full h-12 rounded-md text-white mt-7  hover:bg-green-900">JOIN</button>
                </div>
            </div>
            

            
          </div>
          <div className="w-[30%] h-[65vh]   drop-shadow-2xl rounded-md    ">
            <div className=" w-[100%] h-[20vh] border-b bg-white rounded-t-md flex  flex-col justify-center items-center font-bold">
                <h1 className="font-serif">Regular Member</h1>
                <p className="">$100</p>
            </div>
            <div className=" w-[100%] h-[30vh] bg-white rounded-b-md font-serif p-6 hover:scale-101 hover:drop-shadow-2xl transition-all ">
                <p>United Access to the course</p>
                <p>Customer Suport</p>
                <p>Personal Mentor</p>
                <p>Standard Option</p>
                <p>5 Class per week</p>
                <div className="flex  justify-center ">
                    <button className="bg-violet-600 w-full h-12 rounded-md text-white mt-7  hover:bg-green-900">JOIN</button>
                </div>
            </div>
            

            
          </div>

        </div>
      </div>
    </>
  );
}

export default Pricingplan;
