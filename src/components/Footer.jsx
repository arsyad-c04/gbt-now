import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Footer2 from "./Footer2";

function Footer() {
  return (
    <>
      <footer className="bg-green-800">
        <div className="flex mx-auto items-center text-center w-full space-x-4 md:px-6">
          <div className="mx-10 md:mx-auto grid grid-flow-row md:grid-cols-3 gap-3 auto-cols-auto py-5 md:space-x-6">
            <div>
              <h3 className="text-3xl font-bold text-white p-5">Lokasi</h3>
              <div className="">
                <div className="div-map mx-auto items-center">
                  <div id="canvas-for-googlemap">
                    <iframe src="https://www.google.com/maps/embed/v1/place?q=Ponodk+Pesantren+Tahfidzul+Qur'an+Al-Hasan&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <h3 className="mt-0 text-3xl font-bold text-white p-5">Alamat</h3>
              <div className="">
                <h3 className="items-start text-2xl font-bold text-white mb-5">
                  Pondok Pesantren Tahfidzul Qur'an Al-Hasan
                </h3>
                <p className="text-white">
                  Jl. Parang Menang No.32 Patihan Wetan, Babadan, Ponorogo, Jawa
                  Timur
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white ">Kontak</h3>
              <div className="">
                <h3 className="text-2xl font-bold text-white p-5">
                  Hubungi Kami :
                </h3>
                <div className="items-center text-green-800  text-3xl flex bg-white rounded-xl md:mx-24 py-2">
                  <a href="wa.me/6285259804977" className="flex mx-auto ">
                    <FaWhatsapp />
                    <p className="text-2xl font-bold md:ml-3 mt-auto">
                      WhatsApp
                    </p>
                  </a>
                </div>
                <div className="bg-white rounded-xl md:mx-24  mt-2 items-center text-green-800  text-3xl flex">
                  <a
                    href="instagram/"
                    className="flex mx-auto bg-white rounded-xl p-2"
                  >
                    <FaInstagram />
                    <p className="text-2xl font-bold md:ml-3 mt-auto">
                      Instagram
                    </p>
                  </a>
                </div>
                <div className="mt-2 bg-white rounded-xl md:mx-24 items-center text-green-800  text-3xl flex">
                  <a
                    href="instagram/"
                    className="flex mx-auto bg-white rounded-xl p-2"
                  >
                    <FaFacebook />
                    <p className="text-2xl font-bold md:ml-3 mt-auto">
                      Facebook
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer2 />
      </footer>
    </>
  );
}

export default Footer;
