import React from "react";

function Courses() {
  const courses = [
    {
      title: "AI Development",
      desc: "Master AI Development",
      img: "https://img.icons8.com/?size=100&id=L39d2CKDXsXE&format=png&color=000000",
    },
    {
      title: "Software Development",
      desc: "Master Software Development",
      img: "https://img.icons8.com/?size=100&id=54840&format=png&color=000000",
    },
    {
      title: "Digital Marketing",
      desc: "Master in Digital Marketing",
      img: "https://img.icons8.com/?size=100&id=weHLBH3sEl0z&format=png&color=000000",
    },
    {
      title: "Cloud Computing",
      desc: "Master Cloud Computing",
      img: "https://img.icons8.com/?size=100&id=2jQzIDg73xLo&format=png&color=000000",
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-10">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-800">
          Our Free Courses
        </h1>
        <h2 className="text-gray-600 text-sm md:text-lg mt-2">
          The Top Trending Free Courses with Free Certifications
        </h2>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-violet-500 rounded-2xl flex flex-col items-center justify-center p-6 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            <img
              className="w-16 h-16 object-contain mb-4"
              src={course.img}
              alt={course.title}
            />
            <h1 className="text-white text-lg font-semibold text-center">
              {course.title}
            </h1>
            <p className="text-white text-sm mt-1 text-center">
              {course.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
