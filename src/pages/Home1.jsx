import React from "react";
import Header from "../components/Header";
import Home from "../components/Home";
import Courses from "../components/Courses";
import Community from "../components/Community";
import Pricingplan from "../components/pricingplan";
import Footer from "../components/footer";
// import logo from"../assets/logo .png";
function Home1() {
  return (
    <>
      <Home/>
      <Courses/>
      <Community/>
      <Pricingplan/>
    </>
  );
}

export default Home1;
