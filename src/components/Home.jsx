import React from "react";
// import logo from"../assets/logo .png";
function Home() {
  return (
    <>
      <div className="w-[80%] h-[60vh] flex flex-row   mt-40 ml-20 justify-center ">
        <div className="w-[60%] h-[50vh] flex gap-12  flex-col">
          <h1 className=" text-5xl font-serif " >Learn Everithing For Free !!!</h1>
          <h3 className="text-[1rem] font-sans ">
            Master tradig technology with LEANR WITH ME and retun skills
          </h3>

          <div className="space-x-20 text-white  ">
            <button className="bg-violet-600 w-72 h-12 rounded-md  hover:bg-green-900 ">
              Get started
            </button>
            <button className="bg-violet-600 w-72 h-12 rounded-md hover:bg-green-900 ">
              Watch Now
            </button>
          </div>
        </div>

        <div className="w-[40%] flex   items-start justify-center  ">
          <img
           
            src="https://static.vecteezy.com/system/resources/previews/012/054/287/non_2x/a-girl-learning-online-concept-free-vector.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Home;
