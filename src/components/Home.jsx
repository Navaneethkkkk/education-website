import React from "react";
// import logo from"../assets/logo .png";
function Home() {
  return (
    <>
    <div className="w-full min-h-[80vh] flex flex-col md:flex-row mt-10 md:mt-40 px-6 md:px-20 items-center justify-center gap-10">
      {/* Text Section */}
      <div className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight">
          Learn Everything For Free !!!
        </h1>

        <h3 className="text-base sm:text-lg font-sans text-gray-700">
          Master trading technology with{" "}
          <strong className="text-violet-700">LEARN WITH ME</strong> and return skills
        </h3>

        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-4">
          <button className="bg-violet-600 w-full sm:w-44 h-12 rounded-md text-white hover:bg-green-900 transition duration-300">
            Get Started
          </button>
          <button className="bg-violet-600 w-full sm:w-44 h-12 rounded-md text-white hover:bg-green-900 transition duration-300">
            Watch Now
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="https://static.vecteezy.com/system/resources/previews/012/054/287/non_2x/a-girl-learning-online-concept-free-vector.jpg"
          alt="Learning Illustration"
          className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] object-contain"
        />
      </div>
    </div>
  </>
  );
}

export default Home;
