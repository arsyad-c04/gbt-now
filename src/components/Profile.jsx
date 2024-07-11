import React from "react";
import logoImg from "../assets/images/logo.png";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

function Profile() {
  return (
    <>
      <section id="profile" className="pt-5 bg-gray-200">
        <div className="bg-green-800 px-5 py-5 mx-auto rounded-xl w-5/6">
          <div className=" md:flex space-x-5">
            <img src={logoImg} alt="" className="mx-auto" />
            <div className="">
              <h3 className="mt-5 text-3xl font-bold text-center mx-auto text-white">
                Profil
              </h3>
              <p className="text-white align-sub">
                PPTQ (Pondok Pesanten Tachfidzul Qur’an) AL-HASAN ini berada di
                Jalan Parang Menang No.32, Patihan Wetan kec.Babadan, Ponorogo.
                PPTQ al-Hasan merupakan satu-satunya pondok pesantren yang
                mendalami al-Qur’an di wilayah Patihan Wetan.
              </p>
              <h4 className="mt-5 text-xl font-bold text-white">
                Ikuti Kami : di
              </h4>
              <ul className="flex space-x-3 mt-2">
                <li>
                  <a
                    className=" text-white text-3xl hover:text-violet-700"
                    href="https://instagram.com/pondokalhasan"
                  >
                    {" "}
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a
                    className="text-white text-3xl hover:text-blue-700"
                    href="https://facebook.com/pondokalhasan"
                  >
                    {" "}
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a
                    className="text-white text-3xl hover:text-red-700"
                    href="https://youtube.com/pondokalhasan"
                  >
                    {" "}
                    <FaYoutube />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Profile;
