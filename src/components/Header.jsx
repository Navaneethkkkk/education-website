import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="w-[100%] py-[4] h-[16vh] bg-amber-50 gap-[40%] flex flex-row items-center ">
        <div className="flex items-center gap-3 pl-3 ">
          <img className="w-10 rounded-full " src={logo} alt="" />
          <h1 className="text-4xl font-display ">Learn with me</h1>
          </div>

          <div className="">
          <ul className="flex gap-7 text-lg font-bold ">
            <Link to="/">
            <li  className="hover:text-violet-600" >Home</li>
            </Link>
            
           <Link to='/Services'> <li  className="hover:text-violet-600" >Services</li></Link> 
            <Link to='/Courses' >

            <li  className="hover:text-violet-600" > Courses</li>
            </Link>
            <li  className="hover:text-violet-600" >Contact us</li>
            <li  className="hover:text-violet-600" > Feedbacks</li>
          </ul>
          </div>
      </div>
    </>
  );
}

export default Header;
