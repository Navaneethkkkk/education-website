import React from "react";
import logo from "../assets/logo.png";
function Footer() {
  return (
    <>
      <div className="w-[100%] h-[25vh] bg-gray-200 flex justify-center items-center  ">
        <div className=" h-[90%]  justify-center w-[90%]  flex flex-row">
          <div className="w-[50%] h-[100%] flex flex-col  ">
            <div className="w-full h-[30%] flex flex-row items-center  gap-3 pt-10">
              <img className="w-10 rounded-full " src={logo} alt="" />{" "}
              <h1 className="">LEARN WITH ME</h1>
            </div>

            <div className="w-[80%] pt-5">
              Emprice the future of Inovation and the Technology without
              cutting-edge tech busssines Techlology.
            </div>
          </div>
          <div className=" w-[25%] h-[100%] flex  flex-col gap-4 items-start  pt-10">
            <h1 className="">Combany</h1>
            <ol className="">
              <li>Our programs</li>
              <li>Our plan</li>
              <li>Become a member</li>
            </ol>
          </div>
          <div className="w-[25%] h-[100%] flex flex-col gap-4 items-start  pt-10">
          <h1 className=" ">Quick links</h1>
            <ol className="">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Suport Us</li>
            </ol>

          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
