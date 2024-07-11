import React, { useState } from "react";
import logoImg from "../assets/images/logo.png";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Header() {
  const [clickButton, setClickButton] = useState("hidden");
  function tampilMenu() {
    if (clickButton == "hidden") {
      setClickButton("");
    } else {
      setClickButton("hidden");
    }
  }
  return (
    <>
      <header className="z-10 sticky h-full top-0 bg-white shadow-xl">
        <nav className=" text-black mx-auto w-11/12 container py-3 ">
          <div className="max-w-screen flex justify-between items-center">
            <Link to="/" className="text-3xl font-bold text-green-800 flex">
              <img src={logoImg} alt="" className="size-10 mr-3" />
              AL-HASAN
            </Link>
            <button className=" md:hidden" onClick={tampilMenu}>
              <FaBars />
            </button>
            {/* NavBar Full Page */}
            <ul className="hidden md:flex relative w-auto top-0">
              <li className="px-3">
                <HashLink to="/" className="hover:text-green-800 font-bold">
                  Home
                </HashLink>
              </li>
              <li className="px-3">
                <HashLink
                  to="/#news"
                  className="hover:text-green-800 font-bold"
                >
                  Kegiatan
                </HashLink>
              </li>
              <li className="px-3">
                <HashLink
                  to="/#profile"
                  className="hover:text-green-800 font-bold"
                >
                  Profil
                </HashLink>
              </li>
              <li className="px-3">
                <HashLink
                  to="/#vision"
                  className="hover:text-green-800 font-bold"
                >
                  Visi Misi
                </HashLink>
              </li>
              <li className="px-3">
                <HashLink
                  to="/#program"
                  className="hover:text-green-800 font-bold"
                >
                  Program Unggulan
                </HashLink>
              </li>
              <li className="px-3">
                <HashLink
                  to="/#join"
                  className="hover:text-white hover:bg-green-800 font-bold rounded-xl bg-white border-2 border-green-800 p-3"
                >
                  Daftar Sekarang
                </HashLink>
              </li>
            </ul>
          </div>
          <div className={`${clickButton}`}>
            <ul className=" md:hidden relative w-auto top-0">
              <li className="p-2">
                <HashLink
                  to="/#home"
                  className="hover:text-green-800 font-bold"
                  onClick={tampilMenu}
                >
                  Home
                </HashLink>
              </li>
              <li className="p-2">
                <HashLink
                  to="/#news"
                  className="hover:text-green-800 font-bold"
                  onClick={tampilMenu}
                >
                  Berita
                </HashLink>
              </li>
              <li className="p-2">
                <HashLink
                  to="/#profile"
                  className="hover:text-green-800 font-bold"
                  onClick={tampilMenu}
                >
                  Profil
                </HashLink>
              </li>
              <li className="p-2">
                <HashLink
                  to="/#vision"
                  className="hover:text-green-800 font-bold"
                  onClick={tampilMenu}
                >
                  Visi Misi
                </HashLink>
              </li>
              <li className="p-2">
                <HashLink
                  to="/#program"
                  className="hover:text-green-800 font-bold"
                  onClick={tampilMenu}
                >
                  Program Unggulan
                </HashLink>
              </li>
              <li className="p-2 bg-green-800 rounded-2xl">
                <HashLink
                  to="/#join"
                  className="font-bold  bg-green-800 text-white"
                  onClick={tampilMenu}
                >
                  Daftar Sekarang
                </HashLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
