import React from "react";

function Pricingplan() {
  const plans = [
    { title: "Regular Member", price: "$50" },
    { title: "Standard Member", price: "$70" },
    { title: "Premium Member", price: "$100" },
  ];

  return (
    <div
      id="service"
      className="w-full min-h-screen flex flex-col items-center justify-center bg-white px-6 md:px-12 lg:px-24 py-16"
    >
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-800">
          Premium Pricing Plan
        </h1>
        <h2 className="text-gray-600 text-sm md:text-lg mt-3 max-w-2xl">
          Unlock elite tech services with premium pricing and get ahead of the
          competition
        </h2>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:scale-105"
          >
            {/* Header */}
            <div className="w-full h-32 border-b flex flex-col justify-center items-center bg-violet-50 rounded-t-xl">
              <h1 className="font-serif text-lg md:text-xl font-bold">
                {plan.title}
              </h1>
              <p className="text-gray-800 text-2xl font-semibold mt-1">
                {plan.price}
              </p>
            </div>

            {/* Body */}
            <div className="p-6 flex flex-col gap-2 text-gray-700 font-serif text-sm md:text-base">
              <p>Unlimited Access to the Course</p>
              <p>Customer Support</p>
              <p>Personal Mentor</p>
              <p>Standard Options</p>
              <p>5 Classes per Week</p>

              {/* Button */}
              <div className="flex justify-center mt-6">
                <button className="bg-violet-600 w-full py-3 rounded-md text-white font-semibold hover:bg-green-800 transition-all duration-300">
                  JOIN
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricingplan;
