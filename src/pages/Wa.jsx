import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Wa() {
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = `https://api.whatsapp.com/send?phone=6285259804977&text=Assalamu%27alaikum%20saya%20${nama}%20dari%20${alamat}%20ingin%20mendaftar.`;
  };
  return (
    <div>
      <Header />
      <div className="flex container mx-auto items-center w-full my-10">
        <div className="mx-auto bg-white rounded-xl shadow-xl p-7">
          <h3 className="text-3xl font-bold text-center mb-5">
            Daftar Sekarang
          </h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="" className="text-xl ">
              Nama :
            </label>
            <div>
              <input
                type="text"
                name="name"
                value={nama}
                onChange={(e) => {
                  setNama(e.target.value);
                }}
                className="p-2 border-5 rounded-md border-black bg-gray-200 ring-1 mt-2 ring-black w-full"
                placeholder="Masukkan Nama"
              />
            </div>
            <label htmlFor="" className="text-xl ">
              Alamat :
            </label>
            <div>
              <input
                type="text"
                name="address"
                value={alamat}
                onChange={(e) => {
                  setAlamat(e.target.value);
                }}
                className="p-2 border-5 rounded-md border-black bg-gray-200 ring-1 mt-2 ring-black w-full"
                placeholder="Masukkan Alamat"
              />
            </div>
            <button className="mt-5 bg-green-800 text-white text-center w-full p-2 rounded-md">
              Daftar
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Wa;
