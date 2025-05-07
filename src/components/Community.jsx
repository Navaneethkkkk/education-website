import React from "react";

function Community() {
  return (
    <>
      <div className="flex flex-row items-center justify-center gap-20 m-24 ml-16 mt-44">
        
          <img
            className="w-[50%] rounded-2xl gap-10"
            src="https://media.licdn.com/dms/image/v2/D4D12AQG9fee8q1tW2A/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1683194822834?e=2147483647&v=beta&t=81hmsIIBLvVr5p4Ebssw8H5V66zvE_v87WwrGanNY_E"
            alt=""
          />
        
        <div className="  flex items-start justify-center flex-col gap-6">
          <h1 className="text-4xl font-serif"> Join Our Tech Community</h1>
          <h3 className="text-[1rem] font-sans">
            Unlock the power of the technology and innovation by joing our
            vibrant and free whatsapp tech cummunity{" "}
          </h3>
          <button className="bg-violet-600 w-full text-white h-12 rounded-xl hover:bg-green-900">
            Join Now
          </button>
        </div>
      </div>
    </>
  );
}

export default Community;
