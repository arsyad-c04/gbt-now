import React from "react";
import Header from "../components/Header";
import Jumbotron from "../components/Jumbotron";
import Kegiatan from "../components/Kegiatan";
import Profile from "../components/Profile";
import Vision from "../components/Vision";
import Program from "../components/Program";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <Jumbotron />
      <Kegiatan />
      <Profile />
      <Vision />
      <Program />
      <Footer />
    </>
  );
}

export default Home;
