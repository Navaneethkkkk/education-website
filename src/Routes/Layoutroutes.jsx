import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home1";
import Home1 from "../pages/Home1";
import Header from "../components/Header";
import Footer from "../components/footer";
import Courses from "../components/Courses";
import Pricingplan from "../components/pricingplan";




function Layoutroutes() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/Services" element={<Pricingplan/>} />

          <Route path="/Courses" element={<Courses />} />
          <Route path="/" element={<Home1/>} />
          <Route path="/Feedbacks" element={<Home1 />} />

          
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}


export default Layoutroutes;
