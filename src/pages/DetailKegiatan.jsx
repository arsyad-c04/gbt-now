import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Navigate, useParams } from "react-router-dom";
import { dataKegiatan } from "../data/DataKegiatan";
import { Link } from "react-router-dom";
import ScrollOnTop from "../components/ScrollOnTop";

function DetailKegiatan() {
  const { id } = useParams();
  const data = dataKegiatan.find((item) => item.id == id);
  if (id == null) {
    return <Navigate to="/not-found" />;
  }
  return (
    <>
      <Header />
      <div className="container mt-10 bg-white py-5 w-5/6 rounded-xl mx-auto mb-10">
        <div>
          <h3 className="mb-5 text-3xl text-green-800 font-bold mx-auto text-center items-center">
            {data.desc}
          </h3>
          <div className="md:flex px-7">
            <img className="size-48 mx-auto" src={data.image} alt="" />
            <div className="pl-7">
              <p className="text-justify">{data.ket}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollOnTop />
    </>
  );
}

export default DetailKegiatan;
